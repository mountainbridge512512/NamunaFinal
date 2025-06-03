import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Mail,
  User,
  Phone,
  MapPin,
  Briefcase,
  Paperclip,
  MessageCircle
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';

import { submitWorkWithUsForm } from '../services/apiService'; // Adjust path if needed

const WorkWithUs = () => {

    const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    address: '',
    position: '',
    message: '',
    resume: null,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => AOS.refreshHard();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('File chosen:', file);
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submissionData = new FormData();
      for (const key in formData) {
        if (key === 'resume' && formData.resume instanceof File) {
          submissionData.append('resume', formData.resume);
        } else if (formData[key]?.trim?.() !== '') {
          submissionData.append(key, formData[key]);
        }
      }

      const loadingToast = toast.loading('Submitting your application...');
      await submitWorkWithUsForm(submissionData);

      toast.dismiss(loadingToast);
      toast.success('Application submitted successfully!');

      setFormData({
        fullName: '',
        email: '',
        contactNumber: '',
        address: '',
        position: '',
        message: '',
        resume: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to submit application. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="pt-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center px-6 md:px-20 py-16 bg-green-50">
        <h1
          className="text-4xl md:text-5xl font-bold text-green-800"
          data-aos="fade-up"
        >
          Join Our Team
        </h1>
        <p
          className="text-lg md:text-xl text-green-700 font-medium mb-2"
          data-aos="fade-down"
        >
          Explore exciting career opportunities at Namuna Biomass. We are looking
          for talented and passionate individuals to join our team.
        </p>
      </section>

      {/* Application Form Section */}
      <section className="px-6 md:px-20 py-16">
        <div
          className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-6 sm:p-10 border border-green-100"
          data-aos="zoom-in-up"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
            Apply Now
          </h2>
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-3 top-4 text-green-600" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder=" "
                value={formData.fullName}
                onChange={handleChange}
                required
                className="peer w-full pl-10 pt-5 pb-2 border-b-2 border-gray-300 focus:border-green-500 bg-transparent outline-none transition-all duration-300"
              />
              <label
                htmlFor="fullName"
                className="absolute left-10 top-2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
              >
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-4 text-green-600" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full pl-10 pt-5 pb-2 border-b-2 border-gray-300 focus:border-green-500 bg-transparent outline-none transition-all duration-300"
              />
              <label
                htmlFor="email"
                className="absolute left-10 top-2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
              >
                Email
              </label>
            </div>

            {/* Contact Number */}
            <div className="relative">
              <Phone className="absolute left-3 top-4 text-green-600" />
              <input
                id="contactNumber"
                name="contactNumber"
                type="text"
                placeholder=" "
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="peer w-full pl-10 pt-5 pb-2 border-b-2 border-gray-300 focus:border-green-500 bg-transparent outline-none transition-all duration-300"
              />
              <label
                htmlFor="contactNumber"
                className="absolute left-10 top-2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
              >
                Contact Number
              </label>
            </div>

            {/* Address */}
            <div className="relative">
              <MapPin className="absolute left-3 top-4 text-green-600" />
              <input
                id="address"
                name="address"
                type="text"
                placeholder=" "
                value={formData.address}
                onChange={handleChange}
                className="peer w-full pl-10 pt-5 pb-2 border-b-2 border-gray-300 focus:border-green-500 bg-transparent outline-none transition-all duration-300"
              />
              <label
                htmlFor="address"
                className="absolute left-10 top-2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
              >
                Address (Optional)
              </label>
            </div>

            {/* Position Select */}
            <div className="relative">
              <Briefcase className="absolute left-3 top-4 text-green-600" />
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full pl-10 pt-5 pb-2 border-b-2 border-gray-300 focus:border-green-500 bg-transparent text-gray-700 outline-none transition duration-300"
              >
                <option value="">Select Position</option>
                <option value="frontend">Join as Distributor</option>
                <option value="backend">Join as Supplier</option>
                <option value="designer">Join as Retailer</option>
              </select>
            </div>

            {/* Resume Upload */}
            <div className="relative">
              <Paperclip className="absolute left-3 top-4 text-green-600" />
              <input
                ref={fileInputRef} // <- Make sure this is added
                id="resume"
                name="resume"
                type="file"
                onChange={handleFileChange}
                required
                className="w-full pl-10 pt-5 pb-2 file:ml-2 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 border-b-2 border-gray-300 focus:border-green-500 bg-transparent outline-none transition-all duration-300"
              />
              <p className="text-sm text-gray-600 mt-1">
                {formData.resume ? formData.resume.name : 'No file chosen'}
              </p>
            </div>

            {/* Message */}
            <div className="relative">
              <MessageCircle className="absolute left-3 top-4 text-green-600" />
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                className="peer w-full pl-10 pt-5 pb-2 border-b-2 border-gray-300 focus:border-green-500 bg-transparent outline-none resize-none transition-all"
              />
              <label
                htmlFor="message"
                className="absolute left-10 top-2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
              >
                Message (Optional)
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9779845138406"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default WorkWithUs;
