Here's your README.md! 🚀

> 🔗 Project: https://roadmap.sh/projects/blogging-platform-api

---

```markdown
# 🌐 Blogging Platform

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)

> A full stack blogging platform with a futuristic cyberpunk UI — built with Angular 21, Node.js, Express, and PostgreSQL using raw SQL.

---

## ✨ Features

### Backend
- ✅ RESTful API with full CRUD operations
- ✅ PostgreSQL database with migration system
- ✅ Raw SQL queries — no ORM
- ✅ Pagination with `page` and `limit` params
- ✅ Search/filter posts by title, content or category
- ✅ Image URL support per post
- ✅ Environment variables with dotenv
- ✅ CORS enabled for Angular frontend

### Frontend
- ✅ Futuristic cyberpunk dark theme
- ✅ Full CRUD from the browser
- ✅ Live image preview on create/edit
- ✅ Search functionality
- ✅ Pagination
- ✅ Angular standalone components
- ✅ Reactive forms
- ✅ Angular signals

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Angular 21, TypeScript, SCSS |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL |
| DB Driver | node-postgres (pg) |
| Auth | dotenv |

---

## 📁 Project Structure

### Backend (`backend` branch)
```
Blogging-Platform-API/
├── src/
│   ├── controllers/
│   │   └── postController.ts
│   ├── db/
│   │   ├── migrations/
│   │   │   ├── 001_create_posts_table.sql
│   │   │   └── 002_add_image_url.sql
│   │   ├── db.ts
│   │   ├── migrate.ts
│   │   └── seed.ts
│   ├── routes/
│   │   └── postRoutes.ts
│   └── index.ts
├── .env
├── package.json
└── tsconfig.json
```

### Frontend (`frontend` branch)
```
Blogging-Platform-UI/
├── src/
│   └── app/
│       ├── models/
│       │   └── post.model.ts
│       ├── services/
│       │   └── post.service.ts
│       ├── pages/
│       │   ├── home/
│       │   ├── post-detail/
│       │   ├── create-post/
│       │   └── edit-post/
│       ├── components/
│       │   ├── navbar/
│       │   └── post-card/
│       ├── app.routes.ts
│       └── app.config.ts
├── package.json
└── angular.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- PostgreSQL v15+
- Angular CLI v21+

### Backend Setup

```bash
# Clone the repo and switch to backend branch
git clone https://github.com/3ljo/Blogging-Platform-API.git
cd Blogging-Platform-API
git checkout backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Fill in your PostgreSQL credentials

# Run migrations
npm run migrate

# Seed the database (optional)
npm run seed

# Start development server
npm run dev
```

### Frontend Setup

```bash
# Switch to frontend branch
git checkout frontend
cd Blogging-Platform-UI

# Install dependencies
npm install

# Start development server
ng serve
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend root:

| Variable | Description | Example |
|---|---|---|
| `DB_HOST` | PostgreSQL host | `localhost` |
| `DB_PORT` | PostgreSQL port | `5432` |
| `DB_USER` | PostgreSQL user | `postgres` |
| `DB_PASSWORD` | PostgreSQL password | `yourpassword` |
| `DB_NAME` | Database name | `blogging_platform` |
| `PORT` | API server port | `3000` |

---

## 📡 API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### Get All Posts
```http
GET /posts?page=1&limit=6&term=technology
```
Response `200`:
```json
{
  "posts": [...],
  "total": 100,
  "page": 1,
  "limit": 6,
  "totalPages": 17
}
```

#### Get Single Post
```http
GET /posts/:id
```
Response `200`:
```json
{
  "id": 1,
  "title": "My Post",
  "content": "Content here...",
  "category": "Technology",
  "tags": ["node", "typescript"],
  "image_url": "https://picsum.photos/800/400",
  "created_at": "2026-03-23T12:00:00Z",
  "updated_at": "2026-03-23T12:00:00Z"
}
```

#### Create Post
```http
POST /posts
Content-Type: application/json

{
  "title": "My Post",
  "content": "Content here...",
  "category": "Technology",
  "tags": ["node", "typescript"],
  "image_url": "https://picsum.photos/800/400"
}
```
Response `201` — returns created post

#### Update Post
```http
PUT /posts/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content...",
  "category": "Technology",
  "tags": ["node"],
  "image_url": "https://picsum.photos/800/400"
}
```
Response `200` — returns updated post

#### Delete Post
```http
DELETE /posts/:id
```
Response `204` — no content

---

## 🌐 Running Locally

| Service | URL |
|---|---|
| Backend API | http://localhost:3000 |
| Frontend | http://localhost:4200 |
| PostgreSQL | localhost:5432 |

---

## 📄 License

MIT © [3ljo](https://github.com/3ljo)
```

---

Copy this, create a `README.md` file in the **root of your backend project** and paste it in. Then commit and push! 🙌
