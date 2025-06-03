import React, { useEffect, useState } from 'react';
import { Download, Trash2, CheckCircle, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios'; // Use the shared Axios instance

const ApplicationPage = () => {
  
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

   const fetchApplications = () => {
    api.get("/application", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => setApplications(res.data))
    .catch((err) => console.error("Failed to load applications", err));
  };

  useEffect(() => {
    if (!token) {
      window.location.href = "/admin/login";
      return;
    }
    fetchApplications();
  }, []);

  const exportToCSV = () => {
    const headers = [
      "Full Name", "Position", "Email", "Address", "Contact Number", "Message", "Resume URL", "Created At"
    ];
    const rows = applications.map((a) => [
      a.fullName,
      a.position,
      a.email,
      a.address,
      a.contactNumber,
      a.message,
      a.resumeUrl,
      new Date(a.createdAt).toLocaleString(),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "applications.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deleteApplication = async (id) => {
    try {
      await api.delete(`/application/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchApplications();
    } catch (err) {
      console.error("Failed to delete application", err);
    }
  };

    const markAsRead = async (id) => {
    try {
      await api.put(`/application/${id}/read`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchApplications();
    } catch (err) {
      console.error("Failed to mark as read", err);
    }
  };
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Applications</h1>
        <button
          onClick={exportToCSV}
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <Download className="w-4 h-4 mr-2" />
          Export to CSV
        </button>
      </div>

      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-green-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
            <th className="py-3 px-6">Full Name</th>
            <th className="py-3 px-6">Position</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Address</th>
            <th className="py-3 px-6">Contact Number</th>
            <th className="py-3 px-6">Message</th>
            <th className="py-3 px-6">Resume</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {applications.map((app) => (
            <tr key={app._id} className="border-t hover:bg-gray-100">
              <td className="py-3 px-6">{app.fullName}</td>
              <td className="py-3 px-6">{app.position}</td>
              <td className="py-3 px-6">{app.email}</td>
              <td className="py-3 px-6">{app.address}</td>
              <td className="py-3 px-6">{app.contactNumber}</td>
              <td className="py-3 px-6 truncate max-w-[150px]">{app.message}</td>
              <td className="py-3 px-6">
                {app.resumeUrl ? (
                  <a
                    href={app.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Resume
                  </a>
                ) : (
                  <span className="text-red-500">Not uploaded</span>
                )}
              </td>
              <td className="py-3 px-6 space-x-2 flex">
                <button
                  onClick={() => setSelectedApp(app)}
                  className="text-blue-600 hover:underline"
                  title="View Details"
                >
                  <Eye size={18} />
                </button>
                <button
                  onClick={() => markAsRead(app._id)}
                  className="text-green-600 hover:underline"
                  title="Mark as Read"
                >
                  <CheckCircle size={18} />
                </button>
                <button
                  onClick={() => deleteApplication(app._id)}
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

      {/* Modal for Details */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full">
            <h2 className="text-2xl font-semibold mb-4">Application Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <p><strong>Full Name:</strong> {selectedApp.fullName}</p>
              <p><strong>Position:</strong> {selectedApp.position}</p>
              <p><strong>Email:</strong> {selectedApp.email}</p>
              <p><strong>Address:</strong> {selectedApp.address}</p>
              <p><strong>Contact Number:</strong> {selectedApp.contactNumber}</p>
              <p className="col-span-2"><strong>Message:</strong> {selectedApp.message}</p>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <h3 className="text-lg font-medium">Resume Preview</h3>
              {selectedApp.resumeUrl ? (
                <a href={selectedApp.resumeUrl} target="_blank" className="flex items-center bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Download Resume</a>
              ) : <span className="text-red-500">Not available</span>}
            </div>

            <div className="mt-4 h-64 overflow-hidden rounded">
              {selectedApp.resumeUrl ? (
                <iframe src={selectedApp.resumeUrl} className="w-full h-full" />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">No resume uploaded.</div>
              )}
            </div>

            <button onClick={() => setSelectedApp(null)} className="mt-6 w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationPage;
