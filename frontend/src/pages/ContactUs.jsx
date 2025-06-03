import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { User, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { submitContactForm } from '../services/apiService'; // Import the submit function
import contactus from '../assets/contactus.jpg';
import { FaWhatsapp } from 'react-icons/fa';
import dImage from '../assets/d.jpg';
import toast from 'react-hot-toast';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });


  // Handle form input changes
  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();
  toast.loading('Submitting your message...', { id: 'formSubmit' });

  try {
    await submitContactForm(formData);

    toast.success('Form submitted successfully!', {
      id: 'formSubmit',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: '',
    });
  } catch (error) {
    toast.error('Error submitting form, please try again.', {
      id: 'formSubmit',
    });
  }
};


  return (
    <div className="pt-20 bg-white text-gray-800 w-full overflow-x-hidden">
      
      {/* Contact Form and Illustration */}
      <section className="px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
             {/* Contact SVG Illustration */}
          <div data-aos="fade-left" className="flex justify-center">
            <img
              src={contactus}
              alt="Contact Illustration"
              className="w-full max-w-md animate-pulse"
            />
          </div>
          
          {/* Contact Form */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              Fill out the form and our team will get back to you soon.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="relative group">
                <User className="absolute left-3 top-3.5 text-green-600" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full pl-10 border rounded p-3 outline-none focus:ring-2 ring-green-200"
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <Mail className="absolute left-3 top-3.5 text-green-600" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full pl-10 border rounded p-3 outline-none focus:ring-2 ring-green-200"
                />
              </div>

              {/* Phone */}
              <div className="relative group">
                <Phone className="absolute left-3 top-3.5 text-green-600" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Contact Number"
                  className="w-full pl-10 border rounded p-3 outline-none focus:ring-2 ring-green-200"
                />
              </div>

              {/* Address */}
              <div className="relative group">
                <MapPin className="absolute left-3 top-3.5 text-green-600" />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="w-full pl-10 border rounded p-3 outline-none focus:ring-2 ring-green-200"
                />
              </div>

              {/* Message */}
              <div className="relative group">
                <MessageCircle className="absolute left-3 top-3.5 text-green-600" />
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter Your Message"
                  className="w-full pl-10 border rounded p-3 outline-none focus:ring-2 ring-green-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>

       
        </div>
      </section>
     {/* Large Contact Image in White Box */}
      <section className="px-6 md:px-20 py-10">
        <div className="bg-white rounded-xl shadow-md p-4 flex justify-center items-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={dImage}
            alt="Contact Visual"
            className="w-full max-h-[500px] object-contain"
          />
        </div>
      </section>

     {/* Info Boxes */}
<section className="px-6 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      name: 'Third Eye Suppliers',
      contact: '+977-9845138406',
      address: 'Balkumari Road,Narayangarh,Chitwan',
    },
    {
      name: 'A&B Suppliers(For Bhaktapur,Kathmandu,Lalitpur)',
      contact: '+977-9851404023',
      address: 'Gwarko,Emadol,Lalitpur',
    },
    {
      name: 'Bivian Traders',
      contact: '+977-9802847535,9802847701',
      address: 'Masbar,Pokhara',
    },
    {
      name: 'Sulav Departmental Store',
      contact: '061-462365,+977-9856020676',
      address: 'Lakeside,Pokhara-06',
    },
    {
      name: 'Subakul Trader',
      contact: '+977-9847536315',
      address: 'Kalikanagar,Butwal-11',
    },
    {
      name: 'BS Trading',
      contact: '+977-9813999263',
      address: 'Purano Bhadrapur Road,Birtamode',
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className="bg-white rounded-xl shadow-md p-6 border border-green-100 hover:shadow-xl transform transition duration-300 hover:scale-105"
    >
      <h3 className="text-lg font-bold text-green-600 mb-2">Name</h3>
      <p className="text-gray-700 mb-4">{item.name}</p>
      <h3 className="text-lg font-bold text-green-600 mb-2">Contact No.</h3>
      <p className="text-gray-700 mb-4">{item.contact}</p>
      <h3 className="text-lg font-bold text-green-600 mb-2">Address</h3>
      <p className="text-gray-700">{item.address}</p>
    </div>
  ))}
</section>


      {/* Marquee Section */}
      <section className="py-6 bg-green-100 overflow-hidden">
        <div className="marquee whitespace-nowrap text-lg sm:text-xl text-green-700 font-semibold px-6">
          <span className="inline-block mx-6">📞 Contact us anytime</span>
          <span className="inline-block mx-6">📍 We're here to help</span>
          <span className="inline-block mx-6">✉️ namunabiomass@gmail.com</span>
          <span className="inline-block mx-6">📦 Fast & Reliable Service</span>
        </div>
      </section>

      {/* Marquee Animation */}
      <style>{`
        .marquee {
          display: inline-block;
          animation: scroll-left 20s linear infinite;
        }
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>



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

export default ContactUs;


  