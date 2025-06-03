import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaWhatsapp } from 'react-icons/fa';


import heroVideo from '../assets/video.mp4';

import a from '../assets/a.png';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';

import featured1 from '../assets/featured1.jpg';
import featured2 from '../assets/featured2.jpg';
import powder from '../assets/powder.png';

import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';

import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';

import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import cert3 from '../assets/cert3.jpg';

import pp from '../assets/pp.png';
import pp2 from '../assets/pp2.png';
import chat from '../assets/chat.png';



const images = [a, b, c, d, e];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full aspect-video overflow-hidden pt-5" data-aos="fade">
  <video
    src={heroVideo}
    autoPlay
    muted
    loop
    playsInline
    className=" top-0 left-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/30"></div>
</section>

      {/* Featured Products */}
<section className="py-16 px-4 md:px-20 bg-white" data-aos="fade-up">
  <h2 className="text-3xl font-bold mb-10 text-center text-green-500">
    Featured Products
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[featured1, featured2, powder].map((img, i) => (
      <div
        key={i}
        className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center h-full transition duration-300 hover:scale-105 hover:shadow-xl"
        data-aos="zoom-in"
      >
        <img
          src={img}
          alt={`Product ${i + 1}`}
          className="w-full h-48 object-contain rounded"
        />
        <h3 className="mt-4 text-xl font-semibold text-center">
          {i === 0
            ? "Namuna Charcoal Briquettes"
            : i === 1
            ? "Namuna Wood Charcoal"
            : "Namuna Charcoal Powder"}
        </h3>
        <p className="mt-2 text-sm text-center text-gray-600">
          {i === 0
            ? "With Namuna Biomass Charcoal Briquettes, you get a reliable, sustainable and high performance fuel solution."
            : i === 1
            ? "Namuna Biomass offers premium, sustainable hardwood charcoal for a clean, efficient, and flavorful grilling experience."
            : "Namuna Biomass Charcoal Powder is ideal for industrial and domestic applications, providing consistent burning and clean energy."}
        </p>
        <a
          href="/OurProducts"
          className="mt-4 inline-block px-4 py-2 text-sm font-semibold text-white bg-[#116062] rounded hover:bg-[#0d4f50] transition"
        >
          Learn More
        </a>
      </div>
    ))}
  </div>
</section>


{/* Showcase Images Section */}
<section className="py-16 px-4 md:px-20 bg-white" data-aos="fade-up">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[pp, pp2].map((img, idx) => (
      <div
        key={idx}
        className="flex items-center justify-center bg-gray-100 rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300"
        data-aos="zoom-in"
        data-aos-delay={idx * 100}
      >
        <img
          src={img}
          alt={`Showcase ${idx + 1}`}
          className="w-full h-auto object-contain rounded"
        />
      </div>
    ))}
  </div>
</section>




      {/* Product Availability Swiper */}
      <section className="py-16 px-4 md:px-20 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-10 text-center text-green-500">Our Products Available At</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full max-w-6xl mx-auto"
        >
          {[brand1, brand2, brand3, brand4, brand1, brand2].map((brand, idx) => (
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <img
                src={brand}
                alt={`Brand ${idx + 1}`}
                className="h-20 w-auto object-contain  hover:scale-80 transition-all duration-500 ease-in-out"
                data-aos="zoom-in"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Why Namuna Briquettes */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-500">Why Namuna Briquettes?</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
          {[icon1, icon2, icon3, icon4, icon5].map((icon, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-110"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img src={icon} alt={`Reason ${idx + 1}`} className="w-24 h-24 md:w-32 md:h-32 mb-4" />
            </div>
          ))}
        </div>
      </section>

      {/* Download Brochure Section (Compact) */}
<section className="py-4 px-4 md:px-8 lg:px-16 bg-[#f9f9f9]" data-aos="fade-up">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
    {/* Left Side - Brochure Mockup Image in White Box */}
<div
  className="flex justify-center"
  data-aos="fade-right"
  data-aos-delay="100"
>
  <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 w-[20rem] h-72 md:w-[24rem] md:h-72">
    <img
      src="/mockup.jpg"
      alt="Brochure Mockup"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
</div>


    {/* Right Side - Text & Download Button */}
    <div data-aos="fade-left" data-aos-delay="200" className="text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
        Download Our Brochure
      </h2>
      <p className="text-gray-700 mb-3 text-sm md:text-base leading-relaxed">
        Discover our commitment to sustainability, innovation, and community impact. Everything you
        need to know—now in one clean, digital brochure.
      </p>
      <a
        href="/brochure.pdf"
        download
        className="inline-block bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
      >
        Download Brochure (PDF)
      </a>
    </div>
  </div>
</section>



      {/* Certifications */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-500">Our Certification</h2>
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row gap-8">
            {[cert1, cert2].map((cert, idx) => (
              <div
                key={idx}
                className="flex-1 flex items-center justify-center bg-white rounded-lg shadow-md p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl"
                data-aos="zoom-in"
              >
                <img
                  src={cert}
                  alt={`Certificate ${idx + 1}`}
                  className="max-h-72 w-full object-contain"
                />
              </div>
              
            ))}
          </div>
        </div>
      </section>
      
 {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9779761705550"
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

export default Home;