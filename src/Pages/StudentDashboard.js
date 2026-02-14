import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../styles/Dashboard.css';

const StudentDashboard = () => {
  const { user, onLogout, gatePasses, onApplyGatePass } = useOutletContext();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    rollNumber: user?.rollNumber || '',
    department: user?.department || '',
    year: user?.year || '',
    reason: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyGatePass(formData);
    setFormData({ ...formData, reason: '' });
    setShowForm(false);
  };

  const studentPasses = gatePasses.filter(pass => pass.studentId === user?.id);

  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Welcome, {user?.name}</h2>
          <p>Roll Number: {user?.rollNumber} | Department: {user?.department}</p>
          <div className="dashboard-actions">
            <button className="action-btn" onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Cancel' : 'Apply for Gate Pass'}
            </button>
          </div>
        </div>

        {showForm && (
          <div className="dashboard-content">
            <h3>Apply for Gate Pass</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Roll Number</label>
                <input 
                  type="text" 
                  value={formData.rollNumber}
                  onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Department</label>
                <input 
                  type="text" 
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Year</label>
                <input 
                  type="text" 
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Reason for Outpass</label>
                <select
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  required
                >
                  <option value="">Select Reason</option>
                  <option value="Medical Emergency">Medical Emergency</option>
                  <option value="Family Function">Family Function</option>
                  <option value="Personal Work">Personal Work</option>
                  <option value="Home Visit">Home Visit</option>
                  
                  <option value="Bank Work">Bank Work</option>
                  
                  <option value="Other">Other</option>
                </select>
              </div>
              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          </div>
        )}

        <div className="dashboard-content">
          <h3>My Gate Passes</h3>
          {studentPasses.length === 0 ? (
            <div className="empty-state">
              <p>No gate passes found. Apply for a new gate pass to get started.</p>
            </div>
          ) : (
            <div className="pass-list">
              {studentPasses.map(pass => (
                <div key={pass.id} className="pass-card">
                  <div className="pass-card-header">
                    <span className="pass-id">Pass ID: {pass.id}</span>
                    <span className={`status-badge ${pass.status.toLowerCase()}`}>
                      {pass.status}
                    </span>
                  </div>
                  <div className="pass-details">
                    <div className="detail-item">
                      <span className="detail-label">Reason</span>
                      <span className="detail-value">{pass.reason}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Applied On</span>
                      <span className="detail-value">{pass.appliedDate}</span>
                    </div>
                    {pass.approvedDate && (
                      <div className="detail-item">
                        <span className="detail-label">Approved On</span>
                        <span className="detail-value">{pass.approvedDate}</span>
                      </div>
                    )}
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

export default StudentDashboard;
