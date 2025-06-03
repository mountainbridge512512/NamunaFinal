// src/pages/PendingAdmins.jsx
import React, { useEffect, useState } from "react";
import api from "../api/axios";  // Adjust path if needed

const PendingAdmins = () => {
  const [pendingAdmins, setPendingAdmins] = useState([]);

  const fetchPendingAdmins = async () => {
    try {
      const res = await api.get("/admin/pending-admins");
      setPendingAdmins(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch pending admins");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/admin/admins/${id}/status`, { status });
      alert(`Admin ${status}`);
      fetchPendingAdmins(); // Refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };

  useEffect(() => {
    fetchPendingAdmins();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Pending Admin Approvals</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-green-100">
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingAdmins.map((admin) => (
              <tr key={admin._id} className="border-t">
                <td className="p-3 border">{admin.username}</td>
                <td className="p-3 border">{admin.email}</td>
                <td className="p-3 border space-x-2">
                  <button
                    onClick={() => updateStatus(admin._id, "approved")}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(admin._id, "rejected")}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
            {pendingAdmins.length === 0 && (
              <tr>
                <td colSpan="3" className="p-3 text-center text-gray-500">
                  No pending admins
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAdmins;
