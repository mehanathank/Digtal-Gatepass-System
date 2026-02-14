# Digital Gate Pass Management System

A frontend-only React application for managing college gate passes with three user roles: Student, Teacher, and Watchman.

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── Pages/              # Main screens
│   │   ├── Home.js
│   │   ├── StudentLogin.js
│   │   ├── TeacherLogin.js
│   │   ├── WatchmanLogin.js
│   │   ├── StudentDashboard.js
│   │   ├── TeacherDashboard.js
│   │   └── WatchmanDashboard.js
│   ├── Components/         # Reusable UI components
│   │   └── Navbar.js
│   ├── services/          # API handling (dummy for now)
│   │   └── api.js
│   ├── styles/            # CSS files
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Login.css
│   │   ├── Dashboard.css
│   │   └── Home.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Features

### Student Module
- Login page
- Dashboard to view all gate passes
- Apply for gate pass with fields:
  - Name (auto-filled)
  - Roll Number (auto-filled)
  - Department (auto-filled)
  - Year (auto-filled)
  - Reason for outpass
- View gate pass status: Pending, Approved, Rejected, Used

### Teacher Module
- Login page
- Dashboard to view all student requests
- Approve/Reject gate pass requests
- Display Gate Pass ID on approval
- View all gate passes with their status

### Watchman Module
- Login page
- Verify gate pass using Gate Pass ID
- Update status to "Used"
- View approved and used gate passes

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Select your role from the home page (Student/Teacher/Watchman)
2. Login with any credentials (dummy authentication)
3. Access role-specific dashboard and features

## Notes

- This is a frontend-only application using local state management
- No backend or database integration yet
- All data is stored in React state (resets on page refresh)
- Ready for backend integration through the services/api.js file

## Future Enhancements

- Backend API integration
- Database connectivity
- Real authentication system
- Email notifications
- PDF generation for gate passes
- Advanced filtering and search
