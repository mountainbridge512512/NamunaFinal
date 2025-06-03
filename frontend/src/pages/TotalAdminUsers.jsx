import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../api/axios";  // adjust path as needed

const TotalAdminUsers = () => {
  const [admins, setAdmins] = useState([]);
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      // redirect to login
      window.location.href = "/admin/login";
      return;
    }

    api.get("/admin/admins")
      .then(res => setAdmins(res.data))
      .catch(err => console.error("Failed to load admins", err));
  }, [token]);

  const handleDelete = (id) => {
    api.delete(`/admin/admins/${id}`)
      .then(() => setAdmins(prev => prev.filter(a => a._id !== id)))
      .catch(err => console.error("Failed to delete admin", err));
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Total Admin Users</h1>
      <table className="min-w-full bg-white shadow rounded overflow-x-auto">
        <thead className="bg-gray-100">
          <tr className="bg-green-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
            <th className="py-2 px-4 text-left">Username</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {admins.length === 0
            ? <tr><td colSpan="3" className="text-center py-4 text-gray-500">No admin users found.</td></tr>
            : admins.map(admin => (
                <tr key={admin._id} className="border-b">
                  <td className="py-2 px-4">{admin.username}</td>
                  <td className="py-2 px-4">{admin.email}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleDelete(admin._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default TotalAdminUsers;
