import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/axios'; // Use the shared Axios instance

import {
  Home,
  Mail,
  FileText,
  Users,
  Search,
  ChevronDown,
  Menu,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import logo from "../assets/logo.png";

const StatCard = ({ icon: Icon, title, value, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition-shadow cursor-pointer"
  >
    <div className="bg-green-100 p-2 rounded-lg mb-3">
      <Icon className="text-green-600" />
    </div>
    <p className="text-gray-600">{title}</p>
    <h2 className="text-3xl font-bold">{value}</h2>
    <div className="w-full h-1 mt-3 bg-gray-200 rounded-full">
      <div className={`h-full rounded-full ${color}`} style={{ width: "70%" }}></div>
    </div>
  </motion.div>
);

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState([]);
  const [admin, setAdmin] = useState({ username: "", email: "" });
  const [stats, setStats] = useState({ admins: 0, queries: 0, applications: 0 });
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

 useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      window.location.href = "/admin/login";
      return;
    }

    api.get("/admin/profile")
      .then((res) => setAdmin(res.data))
      .catch(() => window.location.href = "/admin/login");

    api.get("/dashboard/stats")
      .then((res) => setStats(res.data));

    api.get("/dashboard/chart-data")
      .then((res) => setChartData(res.data));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePasswordUpdate = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      await api.put("/admin/update-password", {
        oldPassword,
        newPassword,
      });
      alert("Password updated successfully");
      setShowPasswordModal(false);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      alert(err?.response?.data?.message || "Update failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    window.location.href = "/admin/login";
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans relative">
      <button
        className="md:hidden fixed top-5 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <Menu />
      </button>

      <AnimatePresence>
        {(sidebarOpen || window.innerWidth >= 768) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed md:relative z-40 w-64 h-full bg-white p-6 shadow-md"
          >
            <div className="flex items-center space-x-3 mb-8">
              <img src={logo} alt="Logo" className="w-10 h-10" />
              <span className="text-lg font-bold text-green-600">Dashboard</span>
            </div>
            <nav>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li className="flex items-center space-x-2 text-green-600">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </li>
                <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600" onClick={() => navigate("/admin/contact-queries")}> <Mail className="w-4 h-4" /><span>Contact Queries</span></li>
                <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600" onClick={() => navigate("/admin/applications")}> <FileText className="w-4 h-4" /><span>Application</span></li>
                <li className="flex items-center space-x-2 cursor-pointer hover:text-green-600" onClick={() => navigate("/admin/total-admins")}> <Users className="w-4 h-4" /><span>Total Admin Users</span></li>
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      <main className="flex-1 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Application Submission Trends</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <input type="text" placeholder="Search anything here..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
            </div>

            <div ref={dropdownRef} className="relative inline-block">
              <div className="flex items-center cursor-pointer select-none" onClick={() => setDropdownOpen((prev) => !prev)}>
                <span className="text-2xl">👋</span>
                <div className="ml-2">
                  <p>{`${getGreeting()}, ${admin.username}`}</p>
                  <p className="text-sm text-gray-500">{admin.email}</p>
                </div>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="absolute right-0 mt-2 w-48 bg-white rounded shadow border border-gray-200 z-50">
                    <button onClick={() => { setShowPasswordModal(true); setDropdownOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-green-100">Update Password</button>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100">Logout</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-green-500 to-green-300 rounded-xl p-6 shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="white" />
              <XAxis dataKey="date" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Bar dataKey="applications" fill="#00C853" barSize={20} />
              <Bar dataKey="queries" fill="#ffffff" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-center text-sm text-white mt-4">Time (Days/Weeks)</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div onClick={() => navigate("/admin/total-admins")}> <StatCard icon={Users} title="Total Admins" value={stats.admins} color="bg-green-600" /> </div>
          <div onClick={() => navigate("/admin/contact-queries")}> <StatCard icon={Mail} title="Queries Received" value={stats.queries} color="bg-green-600" /> </div>
          <div onClick={() => navigate("/admin/applications")}> <StatCard icon={FileText} title="Applications" value={stats.applications} color="bg-green-600" /> </div>
        </div>

        <AnimatePresence>
          {showPasswordModal && (
            <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} transition={{ duration: 0.3 }}>
                <h2 className="text-xl font-semibold mb-4">Update Password</h2>
                <input type="password" placeholder="Old Password" className="w-full mb-3 px-3 py-2 border rounded" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                <input type="password" placeholder="New Password" className="w-full mb-3 px-3 py-2 border rounded" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <input type="password" placeholder="Confirm New Password" className="w-full mb-5 px-3 py-2 border rounded" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setShowPasswordModal(false)}>Cancel</button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={handlePasswordUpdate}>Update</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AdminDashboard;