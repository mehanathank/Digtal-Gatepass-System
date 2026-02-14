import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Digital Gate Pass Management System</h1>
        <p>Select your role to continue</p>
        <div className="role-cards">
          <Link to="/student/login" className="role-card">
            <h3>Student</h3>
            <p>Apply for gate pass and track status</p>
          </Link>
          <Link to="/teacher/login" className="role-card">
            <h3>Teacher</h3>
            <p>Review and approve gate pass requests</p>
          </Link>
          <Link to="/watchman/login" className="role-card">
            <h3>Watchman</h3>
            <p>Verify and update gate pass status</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
