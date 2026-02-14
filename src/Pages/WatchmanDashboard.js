import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const WatchmanDashboard = () => {
  const { user, gatePasses, onMarkUsed, onLogout } = useOutletContext();
  const navigate = useNavigate();
  const [searchId, setSearchId] = useState('');
  const [selectedPass, setSelectedPass] = useState(null);

  const approvedPasses = gatePasses.filter(pass => 
    pass.status === 'Approved' && 
    (searchId === '' || pass.id.toLowerCase().includes(searchId.toLowerCase()))
  );
  const usedPasses = gatePasses.filter(pass => pass.status === 'Used');

  const handleSelectPass = (pass) => {
    setSelectedPass(pass);
  };

  const handleMarkUsed = () => {
    if (selectedPass) {
      onMarkUsed(selectedPass.id);
      setSelectedPass(null);
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Welcome, {user?.name}</h2>
          <p>Gate Security Management</p>
          <div className="dashboard-actions">
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <div className="dashboard-content">
          <h3>Approved Gate Passes - Ready to Use</h3>
          <div className="verify-input-group">
            <input
              type="text"
              className="verify-input"
              placeholder="Search by Pass ID..."
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
          </div>
          {approvedPasses.length === 0 ? (
            <div className="empty-state">
              <p>No approved gate passes available.</p>
            </div>
          ) : (
            <div className="pass-list">
              {approvedPasses.map(pass => (
                <div 
                  key={pass.id} 
                  className="pass-card" 
                  onClick={() => handleSelectPass(pass)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="pass-card-header">
                    <span className="pass-id">Pass ID: {pass.id}</span>
                    <span className="detail-value">{pass.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedPass && (
          <div className="dashboard-content" style={{ marginTop: '2rem' }}>
            <h3>Pass Details</h3>
            <div className="pass-card">
              <div className="pass-card-header">
                <span className="pass-id">Pass ID: {selectedPass.id}</span>
                <span className={`status-badge ${selectedPass.status.toLowerCase()}`}>
                  {selectedPass.status}
                </span>
              </div>
              <div className="pass-details">
                <div className="detail-item">
                  <span className="detail-label">Student Name</span>
                  <span className="detail-value">{selectedPass.name}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Roll Number</span>
                  <span className="detail-value">{selectedPass.rollNumber}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Department</span>
                  <span className="detail-value">{selectedPass.department}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Year</span>
                  <span className="detail-value">{selectedPass.year}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Reason</span>
                  <span className="detail-value">{selectedPass.reason}</span>
                </div>
              </div>
              <div className="pass-actions">
                <button className="approve-btn" onClick={handleMarkUsed}>
                  Mark as Used
                </button>
                <button className="reject-btn" onClick={() => setSelectedPass(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="dashboard-content" style={{ marginTop: '2rem' }}>
          <h3>Used Gate Passes</h3>
          {usedPasses.length === 0 ? (
            <div className="empty-state">
              <p>No used gate passes yet.</p>
            </div>
          ) : (
            <div className="pass-list">
              {usedPasses.map(pass => (
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
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchmanDashboard;
