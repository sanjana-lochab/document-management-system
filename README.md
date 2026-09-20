# Document Management System

A full-stack web application developed as a team project for managing documents. Authenticated users can register, log in, upload documents, view, download, and delete their files.

## Team

### Sanjana Lochab
**Frontend Development & Backend Contribution**

- Developed the React frontend
- Built Login and Registration pages
- Developed the Dashboard and document management interface
- Implemented frontend routing and protected routes
- Integrated frontend with backend REST APIs
- Implemented document upload, view, download, and delete functionality on the frontend
- Worked on backend REST APIs and document management functionality
- Implemented and integrated authentication using JWT
- Worked with MongoDB and Mongoose
- Used Git and GitHub for team collaboration

### Ishika
**Backend Development**

- Worked on backend development using Node.js and Express.js
- Developed backend APIs for authentication and document management
- Worked with MongoDB and Mongoose
- Implemented backend document handling and storage
- Worked on file upload functionality using Multer
- Contributed to API integration and backend functionality
- Used Git and GitHub for team collaboration
- Implemented and integrated authentication using JWT

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- Document upload
- Document listing
- View documents
- Download documents
- Delete documents
- File type and size validation
- User-specific documents

## Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- REST API
- JWT Authentication
- Multer

### Database
- MongoDB
- Mongoose

### Tools
- Git
- GitHub
- VS Code

## How It Works

1. Users create an account and log in.
2. The backend authenticates the user and generates a JWT token.
3. The token is used to access protected document management features.
4. Authenticated users can upload documents.
5. Document metadata is stored in MongoDB.
6. Uploaded files are stored on the server.
7. Users can view, download, and delete their documents.

## Supported File Types

- PDF
- JPG
- PNG
- DOC
- DOCX

Maximum file size: **10 MB**

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Documents

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/documents/upload` | Upload a document |
| GET | `/api/documents` | Get user's documents |
| GET | `/api/documents/:id` | Get a document |
| GET | `/api/documents/:id/download` | Download a document |
| DELETE | `/api/documents/:id` | Delete a document |

## What We Learned

- Full-stack web application development
- React frontend development
- Node.js and Express backend development
- REST API development
- JWT authentication
- MongoDB and Mongoose
- File upload handling using Multer
- Frontend-backend integration
- Protected routes
- Git and GitHub collaboration

## Future Improvements

- Document search and filtering
- Pagination
- User profile management
- Cloud storage
- Cloud deployment

## Project Status

**Completed**

## Team Collaboration

This project was developed collaboratively using Git and GitHub, with responsibilities divided across frontend and backend development.
