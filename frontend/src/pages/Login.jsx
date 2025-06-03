import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';  // adjust path to where your axios.js is

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleLogin = async () => {
    try {
      const response = await api.post('/admin/login', { username, password });

      // Save token and user info in localStorage
      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('adminUser', JSON.stringify(response.data.user));

      navigate('/admin/dashboard');
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
      console.error(error);
    }
  };


  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md flex flex-col justify-center items-center px-10">
        <h1 className="text-3xl font-bold text-green-600 mb-2">ADMIN PANEL</h1>
        <h2 className="text-2xl font-bold mb-2">Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-2"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white rounded-md py-2 mb-2 hover:bg-green-700 transition"
        >
          Sign in
        </button>

        <p className="text-sm">
          Don’t have an account?{' '}
          <Link to="/admin/signup" className="text-purple-700 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
