import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurProduct from './pages/OurProduct';
import ContactUs from './pages/ContactUs';
import WorkWithUs from "./pages/WorkWithUs"; 
import MediaAndArticle from './pages/MediaAndArticle';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard'; // Import your admin dashboard
import ContactQueries from './pages/ContactQueries';
import ApplicationPage from './pages/ApplicationPage';
import TotalAdminUsers from "./pages/TotalAdminUsers";
import { Toaster } from 'react-hot-toast';
import CustomCursor from './components/CustomCursor';

// ScrollToTop component
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  return null;
}

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin'); // Check for admin route

  return (
     <>
     
      <ScrollToTop />
      <Toaster position="bottom-center" reverseOrder={false} /> 
            {!isAdminRoute && <CustomCursor />} 

      {!isAdminRoute && <Navbar />}
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/OurProducts" element={<OurProduct />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/WorkWithUs" element={<WorkWithUs />} />
        <Route path="/MediaAndArticle" element={<MediaAndArticle />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<Signup />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/contact-queries" element={<ContactQueries />} />
       <Route path="/admin/applications" element={<ApplicationPage/>}/>
      <Route path="/admin/total-admins" element={<TotalAdminUsers />} />

      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
