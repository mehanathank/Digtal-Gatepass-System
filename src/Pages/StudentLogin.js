import React, { useState } from 'react';
import { useNavigate, Link, useOutletContext } from 'react-router-dom';
import usersData from '../data/users.json';
import '../styles/Login.css';

const StudentLogin = () => {
  const { onLogin } = useOutletContext();
  const [credentials, setCredentials] = useState({ rollNumber: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = usersData.students.find(
      s => s.rollNumber === credentials.rollNumber && s.password === credentials.password
    );
    
    if (student) {
      onLogin({ ...student, role: 'Student' });
      navigate('/student/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Student Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Roll Number</label>
            <input
              type="text"
              value={credentials.rollNumber}
              onChange={(e) => setCredentials({ ...credentials, rollNumber: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    </div>
  );
};

export default StudentLogin;
