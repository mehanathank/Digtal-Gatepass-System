import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../styles/Dashboard.css';

const TeacherDashboard = () => {
  const { user, onLogout, gatePasses, onApprovePass, onRejectPass } = useOutletContext();
  const [message, setMessage] = useState('');

  const handleApprove = (passId) => {
    onApprovePass(passId);
    setMessage('Gate Pass Approved Successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleReject = (passId) => {
    onRejectPass(passId);
    setMessage('Gate Pass Rejected');
    setTimeout(() => setMessage(''), 3000);
  };

  const pendingPasses = gatePasses.filter(pass => pass.status === 'Pending');

  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Welcome, {user?.name}</h2>
          <p>Department: {user?.department}</p>
        </div>

        <div className="dashboard-content">
          <h3>Pending Gate Pass Requests</h3>
          {message && <div className="success-message">{message}</div>}
          
          {pendingPasses.length === 0 ? (
            <div className="empty-state">
              <p>No pending gate pass requests at the moment.</p>
            </div>
          ) : (
            <div className="pass-list">
              {pendingPasses.map(pass => (
                <div key={pass.id} className="pass-card">
                  <div className="pass-card-header">
                    <span className="pass-id">Pass ID: {pass.id}</span>
                    <span className={`status-badge ${pass.status.toLowerCase()}`}>
                      {pass.status}
                    </span>
                  </div>
                  <div className="pass-details">
                    <div className="detail-item">
                      <span className="detail-label">Student Name</span>
                      <span className="detail-value">{pass.name}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Roll Number</span>
                      <span className="detail-value">{pass.rollNumber}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Department</span>
                      <span className="detail-value">{pass.department}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Year</span>
                      <span className="detail-value">{pass.year}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Reason</span>
                      <span className="detail-value">{pass.reason}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Applied On</span>
                      <span className="detail-value">{pass.appliedDate}</span>
                    </div>
                  </div>
                  <div className="pass-actions">
                    <button className="approve-btn" onClick={() => handleApprove(pass.id)}>
                      Approve
                    </button>
                    <button className="reject-btn" onClick={() => handleReject(pass.id)}>
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dashboard-content" style={{ marginTop: '2rem' }}>
          <h3>All Gate Passes</h3>
          <div className="pass-list">
            {gatePasses.filter(pass => pass.status !== 'Pending').map(pass => (
              <div key={pass.id} className="pass-card">
                <div className="pass-card-header">
                  <span className="pass-id">Pass ID: {pass.id}</span>
                  <span className={`status-badge ${pass.status.toLowerCase()}`}>
                    {pass.status}
                  </span>
                </div>
                <div className="pass-details">
                  <div className="detail-item">
                    <span className="detail-label">Student Name</span>
                    <span className="detail-value">{pass.name}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Roll Number</span>
                    <span className="detail-value">{pass.rollNumber}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Reason</span>
                    <span className="detail-value">{pass.reason}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
