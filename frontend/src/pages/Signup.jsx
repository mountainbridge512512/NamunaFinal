import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios'; // Adjust the path as needed

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await api.post('/admin/signup', { username, email, password });

      alert('Signup successful. Please log in.');
      navigate('/admin/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
      console.error('Signup error:', err);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md flex flex-col justify-center items-center px-10">
        <h1 className="text-3xl font-bold text-green-600 mb-2">ADMIN PANEL</h1>
        <h2 className="text-2xl font-bold mb-2">Sign up</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleSignup}
          className="w-full bg-green-600 text-white rounded-md py-2 mb-2 hover:bg-green-700 transition"
        >
          Get started
        </button>

        <p className="text-sm">
          Already a member?{' '}
          <Link to="/admin/login" className="text-purple-700 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
