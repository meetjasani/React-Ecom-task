import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data/data.json';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const admin = data.users.find(user => user.email === email && user.password === password && user.role === 'Admin');
    if (admin) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;