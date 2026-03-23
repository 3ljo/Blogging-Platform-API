import { Request, Response } from 'express';
import pool from '../db/db';

// CREATE a new post
export const createPost = async (req: Request, res: Response) => {
  const { title, content, category, tags } = req.body;

  // Validation
  if (!title || !content || !category) {
    res.status(400).json({ error: 'Title, content and category are required' });
    return;
  }

  const result = await pool.query(
    `INSERT INTO posts (title, content, category, tags)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [title, content, category, tags || []]
  );

  res.status(201).json(result.rows[0]);
};

// GET all posts (with optional search filter)
export const getAllPosts = async (req: Request, res: Response) => {
  const { term } = req.query;

  let result;

  if (term) {
    result = await pool.query(
      `SELECT * FROM posts
       WHERE title ILIKE $1
       OR content ILIKE $1
       OR category ILIKE $1
       ORDER BY created_at DESC`,
      [`%${term}%`]
    );
  } else {
    result = await pool.query(
      `SELECT * FROM posts ORDER BY created_at DESC`
    );
  }

  res.status(200).json(result.rows);
};

// GET a single post by id
export const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await pool.query(
    `SELECT * FROM posts WHERE id = $1`,
    [id]
  );

  if (result.rows.length === 0) {
    res.status(404).json({ error: 'Post not found' });
    return;
  }

  res.status(200).json(result.rows[0]);
};

// UPDATE a post by id
export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, category, tags } = req.body;

  // Validation
  if (!title || !content || !category) {
    res.status(400).json({ error: 'Title, content and category are required' });
    return;
  }

  const result = await pool.query(
    `UPDATE posts
     SET title = $1, content = $2, category = $3, tags = $4, updated_at = CURRENT_TIMESTAMP
     WHERE id = $5
     RETURNING *`,
    [title, content, category, tags || [], id]
  );

  if (result.rows.length === 0) {
    res.status(404).json({ error: 'Post not found' });
    return;
  }

  res.status(200).json(result.rows[0]);
};

// DELETE a post by id
export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await pool.query(
    `DELETE FROM posts WHERE id = $1 RETURNING *`,
    [id]
  );

  if (result.rows.length === 0) {
    res.status(404).json({ error: 'Post not found' });
    return;
  }

  res.status(204).send();
};
