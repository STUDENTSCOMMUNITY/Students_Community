   # Students Community Website

**Students Community** is a collaborative platform designed to help students connect, share resources, and engage in real-time discussions. We aim to create a dynamic and interactive space for student engagement.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Contributing](#contributing)
- [How to Get Connected](#how-to-get-connected)
- [License](#license)

## Features

- **Real-Time Chat**: Engage in real-time discussions with other students.
- **Notifications**: Receive notifications about important updates and announcements.
- **Admin Panel**: Manage notifications and other administrative tasks.
- **Dedicated Sections**:
  - Code Discussion
  - DSA Discussion
  - Room Finding and Selling
  - Notes Sharing and Selling

## Setup

Follow these steps to set up the project locally.

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/students-community/students-community-website.git
    cd students-community-website
    ```

2. Navigate to the backend directory:

    ```bash
    cd backend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file with the following variables:

    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the backend server:

    ```bash
    npm run dev
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env.local` file with the following variables:

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5000
    ```

4. Start the frontend server:

    ```bash
    npm run dev
    ```

## Contributing

We welcome contributions to the Students Community project! To contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-branch
    ```

3. Make your changes and commit them:

    ```bash
    git add .
    git commit -m "Description of changes"
    ```

4. Push your

    ```bash
    git push origin feature-branch
    ```

5. Create a pull request from your forked repository to the main repository.

## How to Get Connected

To get involved with the Students Community:

- **Join Code Discussion Watsapp Group**: [Invite Link](https://chat.whatsapp.com/Fhg2dV9VXVQCABxzv2s9JS)
- **Join Students Community Watsapp Group**: [@StudentsComm](https://chat.whatsapp.com/ITQCHRQ56BTDROuf0q5Kvd)
- **Email us**: [contact@studentscommunity.com](mailto:chaurasiyanitesh68@gmail.com)

Stay updated with the latest news and announcements, and participate in discussions and events!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

Clone the repository and install dependencies for both the backend and frontend as outlined in the Setup section.

### Running the Project

1. Start the backend server:

    ```bash
    cd backend
    npm run dev
    ```

2. Start the frontend server:

    ```bash
    cd ../frontend
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

### Features in Detail

- **Real-Time Chat**: Utilizes `socket.io` for real-time communication among users.
- **OTP-based Authentication**: Secure login and registration process with OTP verification.
- **Admin Panel**: Manage notifications and administrative tasks directly from the platform.
- **Notifications**: Keep users informed about important updates and announcements.
- **Discussion Sections**: Separate areas for code discussion, DSA discussion, room finding and selling, and notes sharing and selling.

## Project Structure

### Backend

The backend is built using Node.js and Express, with MongoDB as the database. The structure is modular, with separate folders for configurations, controllers, middlewares, models, routes, and utility functions.

### Frontend

The frontend is built using Next.js and React, ensuring a responsive and dynamic user interface. Components are organized based on their functionality, making the codebase easy to navigate and maintain.

## Contribution Guidelines

We appreciate your interest in contributing to the Students Community project. To ensure a smooth collaboration process, please adhere to the following guidelines:

1. **Fork the Repository**: Create a personal fork of the project on GitHub.

2. **Clone the Fork**: Clone your fork to your local machine.

    ```bash
    git clone https://github.com/your-username/students-community-website.git
    cd students-community-website
    ```

3. **Create a Branch**: Create a new branch for your feature or bugfix.

    ```bash
    git checkout -b feature-branch-name
    ```

4. **Make Changes**: Make your changes to the codebase. Ensure that your changes are well-documented and include tests if applicable.

5. **Commit Changes**: Commit your changes with a descriptive commit message.

    ```bash
    git add .
    git commit -m "Description of changes"
    ```

6. **Push Changes**: Push your changes to your fork on GitHub.

    ```bash
    git push origin feature-branch-name
    ```

7. **Create a Pull Request**: Open a pull request from your branch to the `main` branch of the original repository. Include a detailed description of your changes and any related issues.

8. **Code Review**: Participate in the code review process by responding to feedback and making necessary changes.

## Support

If you have any questions or need assistance, please reach out to us through our [@StdentsCommunity](https://chat.whatsapp.com/ITQCHRQ56BTDROuf0q5Kvd) or [contact@studentscommunity.com](mailto:chaurasiyanitesh68@gmail.com).

---

Thank you for contributing to the Students Community project! Your involvement helps us create a better platform for students everywhere.


## File structure
   ```bash
   students-community-website/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js            # Database configuration
│   │   ├── controllers/
│   │   │   ├── authController.js # Authentication controllers
│   │   │   ├── chatController.js # Chat functionality controllers
│   │   │   ├── notificationController.js # Notification controllers
│   │   ├── models/
│   │   │   ├── User.js          # User model
│   │   │   ├── Chat.js          # Chat model
│   │   │   └── Notification.js  # Notification model
│   │   ├── routes/
│   │   │   ├── authRoutes.js    # Authentication routes
│   │   │   ├── chatRoutes.js    # Chat routes
│   │   │   └── notificationRoutes.js # Notification routes
│   │   ├── services/
│   │   │   ├── authService.js    # Authentication logic
│   │   │   ├── chatService.js    # Chat logic
│   │   │   └── notificationService.js # Notification logic
│   │   ├── middlewares/
│   │   │   └── authMiddleware.js # Authentication middleware
│   │   ├── utils/
│   │   │   ├── generateOtp.js   # OTP generation utility
│   │   │   └── sendOtp.js       # OTP sending utility
│   │   ├── app.js              # Express app setup
│   │   └── server.js           # Server entry point
│   ├── .env                    # Environment variables
│   ├── package.json            # Backend dependencies
│   └── README.md               # Backend-specific README
│




frontend/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── students-community/
│   │   ├── page.tsx
│   │   └── components/
│   ├── code-discussion/
│   │   ├── page.tsx
│   │   └── components/
│   ├── dsa-discussion/
│   │   ├── page.tsx
│   │   └── components/
│   ├── room-finding/
│   │   ├── page.tsx
│   │   └── components/
│   ├── notes-sharing/
│   │   ├── page.tsx
│   │   └── components/
│   ├── chat/
│   │   ├── page.tsx
│   │   └── components/
│   ├── admin-panel/
│   │   ├── page.tsx
│   │   └── components/
│   ├── login/
│   │   ├── page.tsx
│   │   └── components/
│   ├── register/
│   │   ├── page.tsx
│   │   └── components/
│   └── components/
├── public/
├── styles/
│   └── globals.css
├── package.json
├── README.md
└── tsconfig.json


```