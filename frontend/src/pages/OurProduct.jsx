import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

import { FaWhatsapp } from 'react-icons/fa';


import charcoalImg from '../assets/charcoal.jpg';
import charcoal1 from '../assets/charcoal1.jpg';
import biomassImg from '../assets/wood.jpg';
import biomass1 from '../assets/wood1.jpg';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';
import powderImg from '../assets/powder.png';
import powder2Img from '../assets/powder2.png';
import { FaCheckCircle, FaFire, FaLeaf, FaHandsHelping, FaHome, FaBaby, FaUtensils, FaIndustry, FaToolbox,FaBoxOpen , FaRulerCombined, FaLock, FaPrint, FaBars, FaHandHolding,FaTags} from 'react-icons/fa';

const OurProduct = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [charcoalPreview, setCharcoalPreview] = useState(charcoalImg);
  const [biomassPreview, setBiomassPreview] = useState(biomassImg);
  const [powderPreview, setPowderPreview] = useState(powderImg);

  return (
    <div className="pt-20 bg-white text-gray-800 w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="w-full py-20 bg-green-50 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4">
          "Save Energy-Save Money-Save Planet"
        </h1>
        <p className="text-gray-700 mb-10 text-base sm:text-lg">
          We offer clean, high-performance, and reliable fuel alternatives.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-2 md:px-20">
          {[
            { icon: '🌱', title: 'Sustainable' },
            { icon: '🔥', title: 'High Heat' },
            { icon: '♻️', title: 'Zero Waste' },
            { icon: '📦', title: 'Bulk Delivery' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.2 }}
            >
              <motion.div
                className="text-4xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut', delay: idx * 0.2 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold text-green-700">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product 1 - Charcoal */}
      <section className="px-4 md:px-20 py-16 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center" data-aos="fade-right">
         <div className="w-full max-w-md mx-auto aspect-square">
  <img
    src={charcoalPreview}
    alt="Charcoal Briquettes"
    className="rounded-xl shadow-md w-full h-full object-cover"
  />
</div>

          <div className="flex gap-4 mt-4 justify-center">
            {[charcoalImg, charcoal1].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Charcoal angle ${idx + 1}`}
                className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md border-2 cursor-pointer ${
                  charcoalPreview === img ? 'border-green-600' : 'border-gray-300'
                }`}
                onClick={() => setCharcoalPreview(img)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center" data-aos="fade-left">
  <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">Namuna Charcoal Briquettes</h2>
  <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
    Namuna Biomass Pvt. Ltd. produces high-quality, eco-friendly charcoal briquettes from 100% natural biomass waste. Our cost-effective and efficient briquettes offer a sustainable alternative to traditional charcoal and fossil fuels.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base sm:text-lg">
    <div>
      <h3 className="font-semibold text-green-600 mb-2">Key Features</h3>
      <ul className="space-y-2">
        {[
          ['Eco-friendly', <FaLeaf />],
          ['Efficient', <FaFire />],
          ['Smokeless', <FaCheckCircle />],
          ['Cost-effective', <FaHandsHelping />],
          ['Nepal made', <FaHome />]
        ].map(([text, icon], idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-green-500">{icon}</span> {text}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-green-600 mb-2">Used For</h3>
      <ul className="space-y-2">
        {[
          ['BBQ', <FaUtensils />],
          ['New baby warming', <FaBaby />],
          ['Sekuwa', <FaFire />],
          ['Home application', <FaHome />]
        ].map(([text, icon], idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-green-500">{icon}</span> {text}
          </li>
        ))}
      </ul>
    </div>
    <div>
  <h3 className="font-semibold text-green-600 mb-4">Product Specification</h3>

  <div className="flex flex-col sm:flex-row gap-4">
    {/* 2 kg – Plastic Bag */}
    <div className="bg-green-50 p-4 rounded-xl shadow-sm flex-1 min-w-[240px]">
      <h4 className="text-green-700 font-semibold mb-2">2 kg – Plastic Bag</h4>
      <ul className="space-y-1 text-sm">
        <li><span className="font-semibold">Material:</span> HDPE/LDPE, 60–80 microns</li>
        <li><span className="font-semibold">Size:</span> 19 x 13.5 inch</li>
        <li><span className="font-semibold">Closure:</span> Heat-sealed</li>
        <li><span className="font-semibold">Printing:</span> Product info, branding, safety instructions</li>
      </ul>
    </div>

    {/* 15 kg – Large Sack */}
    <div className="bg-green-50 p-4 rounded-xl shadow-sm flex-1 min-w-[240px]">
      <h4 className="text-green-700 font-semibold mb-2">15 kg – Large Sack</h4>
      <ul className="space-y-1 text-sm">
        <li><span className="font-semibold">Material:</span> Printed Plastic</li>
        <li><span className="font-semibold">Size:</span> 22 x 36 inch</li>
        <li><span className="font-semibold">Closure:</span> Thread Sewing</li>
        <li><span className="font-semibold">Features:</span> Moisture barrier, stackable, optional handles</li>
      </ul>
    </div>
  </div>
</div>


  </div>
</div>

      </section>

      {/* Product 2 - Biomass */}
      <section className="px-4 md:px-20 py-16 grid md:grid-cols-2 gap-10 bg-gray-50">
         <div className="flex flex-col justify-center" data-aos="fade-left">
          <div className="w-full max-w-md mx-auto aspect-square">
  <img
    src={biomassPreview}
    alt="Biomass Pellets"
    className="rounded-xl shadow-md w-full h-full object-cover"
  />
</div>
          
          <div className="flex gap-4 mt-4 justify-center">
            {[biomassImg, biomass1].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Pellet angle ${idx + 1}`}
                className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md border-2 cursor-pointer ${
                  biomassPreview === img ? 'border-green-600' : 'border-gray-300'
                }`}
                onClick={() => setBiomassPreview(img)}
              />
            ))}
          </div>
        </div>
       <div className="flex flex-col justify-center" data-aos="fade-right">
  <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">Namuna Hardwood Charcoal</h2>
  <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
    Our premium-grade hardwood charcoal provides a clean, consistent, and powerful burn. It's ideal for high-heat cooking and industrial applications.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base sm:text-lg">
    <div>
      <h3 className="font-semibold text-green-600 mb-2">Key Features</h3>
      <ul className="space-y-2">
        {[
          'High heat output',
          'Long burn time',
          'Cleaner burn',
          'Low ash content',
          'Consistent performance',
          'Natural and chemical-free',
          'Environmentally friendly'
        ].map((text, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> {text}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-green-600 mb-2">Versatility</h3>
      <ul className="space-y-2">
        {[
          ['Cooking and BBQ', <FaUtensils />],
          ['Hotel and restaurant', <FaHome />],
          ['Tandoori oven', <FaFire />],
          ['Blacksmith', <FaToolbox />],
          ['Industrial use', <FaIndustry />]
        ].map(([text, icon], idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-green-500">{icon}</span> {text}
          </li>
        ))}
      </ul>
    </div>
    <div>
  <h3 className="font-semibold text-green-600 mb-4">Product Specification</h3>

  <div className="flex flex-col sm:flex-row gap-4">
    {/* 2 kg – Plastic Bag */}
    <div className="bg-green-50 p-4 rounded-xl shadow-sm flex-1 min-w-[240px]">
      <h4 className="text-green-700 font-semibold mb-2">3 kg – </h4>
      <ul className="space-y-1 text-sm">
        <li><span className="font-semibold">Material:</span>Plastic Bag</li>
        <li><span className="font-semibold">Size:</span> 21 x 17 inch</li>
        <li><span className="font-semibold">Closure:</span> Heat-sealed</li>
        <li><span className="font-semibold">Printing:</span> Product info, branding, safety instructions</li>
      </ul>
    </div>

    {/* 15 kg – Large Sack */}
    <div className="bg-green-50 p-4 rounded-xl shadow-sm flex-1 min-w-[240px]">
      <h4 className="text-green-700 font-semibold mb-2">15 kg – Coated Woven Polypropylene Sack</h4>
      <ul className="space-y-1 text-sm">
        <li><span className="font-semibold">Material:</span>Plastic Coated Polybag</li>
        <li><span className="font-semibold">Size:</span> 22 x 39 inch</li>
        <li><span className="font-semibold">Closure:</span> Thread Sewing</li>
        <li><span className="font-semibold">Features:</span> Moisture barrier, stackable, optional handles</li>
      </ul>
    </div>
  </div>
</div>

  </div>
</div>

       
      </section>


      {/* Product 3 - Charcoal Powder */}
<section className="px-4 md:px-20 py-16 grid md:grid-cols-2 gap-10">
  <div className="flex flex-col justify-center" data-aos="fade-right">
   <div className="w-full max-w-md mx-auto aspect-square">
  <img
    src={powderPreview}
    alt="Charcoal Powder"
    className="rounded-xl shadow-md w-full h-full object-cover"
  />
</div>
   
    <div className="flex gap-4 mt-4 justify-center">
      {[powderImg, powder2Img].map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Powder angle ${idx + 1}`}
          className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md border-2 cursor-pointer ${
            powderPreview === img ? 'border-green-600' : 'border-gray-300'
          }`}
          onClick={() => setPowderPreview(img)}
        />
      ))}
    </div>
  </div>
 <div className="flex flex-col justify-center" data-aos="fade-left">
  <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">Namuna Bio-Char Powder</h2>
  <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
    Bio-Char powder enhances soil properties and composting, reduces odors in animal bedding, and helps mitigate climate change by trapping carbon in soil.
  </p>

  <ul className="space-y-2 text-base sm:text-lg">
    {[
      'Improves soil fertility',
      'Boosts composting process',
      'Absorbs urine and ammonia odor',
      'Carbon capture and long-term soil stability',
      'Eco-friendly and sustainable'
    ].map((point, idx) => (
      <li key={idx} className="flex items-center gap-2">
        <FaLeaf className="text-green-500" /> {point}
      </li>
    ))}
  </ul>
</div>

</section>


      {/* Brand Carousel */}
      <section className="py-16 px-4 md:px-20 text-center bg-white">
        <h2 className="text-3xl font-bold text-green-500 mb-12">Our Products Available At</h2>
        <div className="relative overflow-hidden w-full max-w-7xl mx-auto">
          <motion.div
            className="flex gap-20 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
          >
            {[...Array(2)].flatMap(() =>
              [brand1, brand2, brand3, brand4].map((logo, idx) => (
                <div key={idx + Math.random()} className="w-28 md:w-36 h-20 md:h-28 flex items-center justify-center">
                  <img src={logo} alt={`Brand ${idx + 1}`} className="w-full h-full object-contain" />
                </div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      
      <section className="py-4 px-4 md:px-8 lg:px-16 bg-[#f9f9f9]" data-aos="fade-up">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
    {/* Left Side - Image */}
    <div className="flex justify-center" data-aos="fade-right" data-aos-delay="100">
  <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 w-[20rem] h-72 md:w-[24rem] md:h-72">
    <img
      src="/probrochure.jpg"
      alt="Product Brochure Mockup"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
</div>


    {/* Right Side - Text and Button */}
    <div data-aos="fade-left" data-aos-delay="200" className="text-center md:text-left">
      <h2 className="text-3xl font-bold text-green-700 mb-3">Download Product Brochure</h2>
      <p className="text-gray-700 mb-4 text-base leading-relaxed">
        Explore detailed information about our eco-friendly briquettes and pellets. Download the brochure to learn more about product specifications, benefits, and applications.
      </p>
      <a
        href="/product.pdf"
        download
        className="inline-block bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
      >
        Download Brochure (PDF)
      </a>
    </div>
  </div>
</section>



      {/* Why Namuna Briquettes */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-12">Why Namuna Briquettes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {[icon1, icon2, icon3, icon4, icon5].map((icon, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center space-y-3 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <img
                src={icon}
                alt={`Icon ${idx + 1}`}
                className="w-20 sm:w-24 md:w-28 h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <section className="py-6 bg-green-100 overflow-hidden">
        <div className="marquee whitespace-nowrap text-base sm:text-lg md:text-xl text-green-700 font-semibold px-6">
          <span className="inline-block mx-6">♻️ Sustainable Energy</span>
          <span className="inline-block mx-6">🔥 High Heat Low Ash</span>
          <span className="inline-block mx-6">🌿 100% Eco-Friendly Fuel</span>
          <span className="inline-block mx-6">🏭 For Industry and Home</span>
        </div>
      </section>

      <style>
        {`
          .marquee {
            display: inline-block;
            animation: scroll-left 20s linear infinite;
          }
          @keyframes scroll-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>


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

export default OurProduct;