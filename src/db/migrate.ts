import { Client } from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function runMigrations() {
  await client.connect();
  console.log('Connected to database!');

  const migrationFile = path.join(__dirname, 'migrations', '001_create_posts_table.sql');
  const sql = fs.readFileSync(migrationFile, 'utf-8');

  await client.query(sql);
  console.log('Migration ran successfully!');

  await client.end();
}

runMigrations().catch((err) => {
  console.error('Migration failed!', err);
  process.exit(1);
});