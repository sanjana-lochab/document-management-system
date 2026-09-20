# Document Management System

A full-stack web application that allows authenticated users to upload, view, download, and delete documents through a simple document management interface.

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- Document upload
- Document metadata storage
- User-specific document listing
- View uploaded documents
- Download documents
- Delete documents
- File type validation
- File size validation

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

### Development Tools
- Git
- GitHub
- VS Code

## Application Architecture

```text
React Frontend
      |
      | HTTP Requests
      v
Express.js REST API
      |
      +-------------------+
      |                   |
      v                   v
JWT Authentication     Document API
                          |
                          v
                       MongoDB
                          |
                          v
                   Document Metadata

                    +
                    
                File Storage
                   /uploads
