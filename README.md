# Students Community

Welcome to the Students Community project! This application includes various features for students, such as user registration, real-time public chat, notifications, and more. This README provides an overview of the project, setup instructions, and guidelines for contributing.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Managing Collaborators](#managing-collaborators)
- [Real-Time Chat](#real-time-chat)
- [Admin Panel](#admin-panel)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Registration & Login**: Users can register and log in with their details. Includes OTP verification.
- **Notifications**: Admins can post and manage notifications, displayed in real-time. Old notifications are removed as new ones are added.
- **Public Chat**: A real-time chat feature for sending text, images, and videos. Displays above the footer on all pages.
- **Admin Panel**: For managing notifications and potentially other admin functions.

## Tech Stack
- **Frontend**: React, Next.js
- **Backend**: Node.js, Express.js, MongoDB
- **Real-Time Communication**: Socket.io integrated into the backend
- **File Uploads**: Multer
- **Deployment**: Netlify for frontend, custom server hosting for backend

## Repository Structure

### Repositories
- **`students-community-frontend`**: Contains the frontend code using React and Next.js.
- **`students-community-backend`**: Contains the backend code using Node.js and Express.js, including real-time chat functionality.
- **`students-community-admin`**: Contains the code for the admin panel (if separate).

### Teams
- **Admins**: Full access to all repositories.
- **Developers**: Can push and pull code but may not have admin rights.
- **Contributors**: Can submit pull requests and issues.

### Project Management
- **Issues**: Track bugs, enhancements, and tasks.
- **Projects**: Organize work into boards with tasks and milestones.

## Setup

### Backend Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/students-community/students-community-backend.git
   cd students-community-backend
2. **Install Dependencies**:
   ```bash
   npm install
