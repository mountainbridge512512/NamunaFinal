import React, { useEffect, useState } from "react";
import axios from "axios";
import { Download, Trash2, CheckCircle, Eye } from "lucide-react";
import api from "../api/axios"; // Adjust path as needed

const ContactQueries = () => {
  const [queries, setQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);

  const fetchQueries = async () => {
    try {
      const res = await api.get("/contact");
      setQueries(res.data);
    } catch (err) {
      console.error("Failed to fetch contact queries", err);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);


  const exportToCSV = () => {
    const headers = ["Name", "Email", "Address", "Phone", "Message", "Created At"];
    const rows = queries.map((q) => [
      q.name,
      q.email,
      q.address,
      q.phone,
      q.message,
      new Date(q.createdAt).toLocaleString(),
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "contact_queries.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

   const deleteQuery = async (id) => {
    try {
      await api.delete(`/contact/${id}`);
      fetchQueries();
    } catch (err) {
      console.error("Failed to delete query", err);
    }
  };

  const markAsRead = async (id) => {
    try {
      await api.put(`/contact/${id}/read`);
      fetchQueries();
    } catch (err) {
      console.error("Failed to mark query as read", err);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Contact Queries</h1>
        <button
          onClick={exportToCSV}
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <Download className="w-4 h-4 mr-2" />
          Export to CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-green-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Created At</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {queries.map((query, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-6 py-4">{query.name}</td>
                <td className="px-6 py-4">{query.email}</td>
                <td className="px-6 py-4">{query.address}</td>
                <td className="px-6 py-4">{query.phone}</td>
                <td className="px-6 py-4 truncate max-w-[150px]">{query.message}</td>
                <td className="px-6 py-4">
                  {new Date(query.createdAt).toLocaleString()}
                </td>
                <td className="px-6 py-4 space-x-2 flex">
                  <button
                    onClick={() => setSelectedQuery(query)}
                    className="text-blue-600 hover:underline"
                    title="View Details"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => markAsRead(query._id)}
                    className="text-green-600 hover:underline"
                    title="Mark as Read"
                  >
                    <CheckCircle size={18} />
                  </button>
                  <button
                    onClick={() => deleteQuery(query._id)}
                    className="text-red-600 hover:underline"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedQuery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Query Details</h2>
            <p><strong>Name:</strong> {selectedQuery.name}</p>
            <p><strong>Email:</strong> {selectedQuery.email}</p>
            <p><strong>Address:</strong> {selectedQuery.address}</p>
            <p><strong>Phone:</strong> {selectedQuery.phone}</p>
            <p><strong>Message:</strong> {selectedQuery.message}</p>
            <p><strong>Created At:</strong> {new Date(selectedQuery.createdAt).toLocaleString()}</p>
            <button
              onClick={() => setSelectedQuery(null)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactQueries;
