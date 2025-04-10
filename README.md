# Task Management Backend

A simple task management backend built with Node.js, Express, and MySQL. It supports user authentication and CRUD operations for tasks.



## Getting Started

You can use **any MySQL-compatible database** like:

- MySQL (local)
- PlanetScale
- Neon (with MySQL mode)
- Amazon RDS (MySQL)
- etc.

---

## Database Setup

First, create a database, and run the following SQL to create the required tables:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
  id VARCHAR(255) PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

## Create .env file with following:

PORT=
DB_HOST=localhost          # Replace with your db host
DB_USER=app_user           # Replace with your MySQL-compatible DB user
DB_PASSWORD=your_password  # Replace with your password
DB_NAME=task_manager       # Replace if you used a different DB name

JWT_SECRET=secret_key      #replace with your secret key
JWT_EXPIRES_IN=1d

---

## Run the Server

### 1. Install dependencies:
```pnpm install```

### 2. Start the server in development mode:
```pnpm run dev```
