import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

import logo from '../assets/logo.png'; // Update path as needed

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-10">
      {/* Contact Info & Social Media */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-lg text-green-600" />
            <span className="text-sm sm:text-base">+977-9761705550</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-lg text-blue-600" />
            <span className="text-sm sm:text-base">namunabiomass@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-lg text-red-600" />
            <span className="text-sm sm:text-base">Mangalpur,Chitwan,Nepal</span>
          </div>
        </div>

        {/* Social Media + About Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-black transition">
                <FaTiktok />
              </a>
              <a href="#" className="hover:text-red-600 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">About Namuna</h3>
            <p className="text-sm text-gray-700">
              We are committed to sustainable and clean energy solutions through eco-friendly briquettes and pellets.
            </p>
          </div>
        </div>

        {/* Company Logo */}
        <div className="flex items-start justify-center md:justify-end">
          <img src={logo} alt="Company Logo" className="w-32 md:w-40 h-auto object-contain" />
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="w-full h-72 sm:h-80 md:h-[24rem]">
        <iframe
          title="Namuna Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d452358.6553068423!2d84.365891!3d27.653863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0xcc13da0f6836170c!2sM938%2BG9R%2C%20Bharatpur%2044200%2C%20Nepal!5e0!3m2!1sen!2sus!4v1746783897932!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 text-sm text-gray-600 bg-white border-t">
        © {new Date().getFullYear()} Namuna Briquettes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
