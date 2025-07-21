# Library Management API

A Library Management System built with **Express**, **TypeScript**, and **MongoDB** (via Mongoose) for managing books and borrowing records.

## Features

- Manage books (CRUD operations)
- Borrow books with availability checks
- Summarize borrowed books using MongoDB aggregation
- Filtering, sorting, and validation
- Mongoose instance methods

## Tech Stack

- Node.js, Express
- TypeScript
- MongoDB, Mongoose
- dotenv

## Prerequisites

- Node.js (v16+)
- MongoDB
- npm
- TypeScript (`npm install -g typescript`)

## Setup

1. **Clone Repository**

   ```bash
   git clone https://github.com/sanjitgh/backend-assignments-three.git
   cd backend-assignments-three
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure .env**
   Create `.env` file:

   ```
   MONGODB_URI=<mongodb-uri>
   PORT=5000
   ```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── model/
│   │   ├── routes/
│   │   ├── interfaces/
│   ├── app.ts
│   ├── server.ts
├── .env
├── tsconfig.json
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## API Routes

- https://library-management-backend-nu.vercel.app/api/