import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [gatePasses, setGatePasses] = useState([]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleApplyGatePass = (formData) => {
    const newPass = {
      id: 'GP' + Date.now(),
      studentId: user.id,
      ...formData,
      status: 'Pending',
      appliedDate: new Date().toLocaleDateString(),
      approvedDate: null
    };
    setGatePasses([...gatePasses, newPass]);
  };

  const handleApprovePass = (passId) => {
    setGatePasses(gatePasses.map(pass => 
      pass.id === passId 
        ? { ...pass, status: 'Approved', approvedDate: new Date().toLocaleDateString() }
        : pass
    ));
  };

  const handleRejectPass = (passId) => {
    setGatePasses(gatePasses.map(pass => 
      pass.id === passId 
        ? { ...pass, status: 'Rejected' }
        : pass
    ));
  };

  const handleMarkUsed = (passId) => {
    setGatePasses(gatePasses.map(pass => 
      pass.id === passId 
        ? { ...pass, status: 'Used' }
        : pass
    ));
  };

  return (
    <div className="app">
      <Outlet context={{ 
        user, 
        gatePasses, 
        onLogin: handleLogin, 
        onLogout: handleLogout,
        onApplyGatePass: handleApplyGatePass,
        onApprovePass: handleApprovePass,
        onRejectPass: handleRejectPass,
        onMarkUsed: handleMarkUsed
      }} />
    </div>
  );
}

export default App;
