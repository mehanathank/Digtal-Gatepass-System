import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import StudentLogin from './Pages/StudentLogin';
import TeacherLogin from './Pages/TeacherLogin';
import WatchmanLogin from './Pages/WatchmanLogin';
import StudentDashboard from './Pages/StudentDashboard';
import TeacherDashboard from './Pages/TeacherDashboard';
import WatchmanDashboard from './Pages/WatchmanDashboard';
import './styles/App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/student/login",
        element: <StudentLogin />
      },
      {
        path: "/teacher/login",
        element: <TeacherLogin />
      },
      {
        path: "/watchman/login",
        element: <WatchmanLogin />
      },
      {
        path: "/student/dashboard",
        element: <StudentDashboard />
      },
      {
        path: "/teacher/dashboard",
        element: <TeacherDashboard />
      },
      {
        path: "/watchman/dashboard",
        element: <WatchmanDashboard />
      },
      {
        path: "*",
        element: <h1>Page not found. Please check your URL.</h1>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
