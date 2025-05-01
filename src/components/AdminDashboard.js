import React, { useState } from 'react';
import data from '../data/data.json';

const AdminDashboard = () => {
  const [users, setUsers] = useState(data.users);
  const [search, setSearch] = useState('');
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'User', password: '' });
  const [editingUserId, setEditingUserId] = useState(null);

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const handleSave = () => {
    if (editingUserId !== null) {
      setUsers(prev => prev.map(user =>
        user.id === editingUserId ? { ...newUser, id: editingUserId } : user
      ));
      setEditingUserId(null);
    } else {
      const id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
      setUsers(prev => [...prev, { ...newUser, id }]);
    }
    setNewUser({ name: '', email: '', role: 'User', password: '' });
  };

  const handleEdit = (user) => {
    setNewUser({ name: user.name, email: user.email, role: user.role, password: user.password });
    setEditingUserId(user.id);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <input placeholder="Search users..." value={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} ({user.role})
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>{editingUserId ? 'Edit User' : 'Add User'}</h2>
      <input
        placeholder="Name"
        value={newUser.name}
        onChange={e => setNewUser(prev => ({ ...prev, name: e.target.value }))}
      />
      <input
        placeholder="Email"
        value={newUser.email}
        onChange={e => setNewUser(prev => ({ ...prev, email: e.target.value }))}
      />
      <input
        placeholder="Password"
        value={newUser.password}
        onChange={e => setNewUser(prev => ({ ...prev, password: e.target.value }))}
      />
      <select
        value={newUser.role}
        onChange={e => setNewUser(prev => ({ ...prev, role: e.target.value }))}
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>
      <button onClick={handleSave}>{editingUserId ? 'Update' : 'Add'}</button>
    </div>
  );
};

export default AdminDashboard;