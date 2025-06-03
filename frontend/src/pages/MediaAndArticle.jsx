import React, { useState } from "react";
import 'aos/dist/aos.css';
import 'react-image-lightbox/style.css';
import Lightbox from "react-image-lightbox";

import { FaWhatsapp } from 'react-icons/fa';


import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import gallery9 from "../assets/gallery9.jpeg";
import gallery10 from "../assets/gallery10.jpeg";
import gallery11 from "../assets/gallery11.jpg";
import gallery12 from "../assets/gallery12.jpeg";
import article1 from "../assets/article1.jpg";
import article2 from "../assets/article2.jpg";
import article3 from "../assets/article3.jpg";
import article4 from "../assets/b.jpg";

const allGalleryImages = [
  gallery1, gallery2, gallery3, gallery4,
  gallery5, gallery6, gallery7, gallery8,
  gallery9, gallery10, gallery11, gallery12,
];

const Modal = ({ onClose, title, children }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
    <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative p-6">
      <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl">
        &times;
      </button>
      <h2 className="text-2xl font-bold text-green-600 mb-4">{title}</h2>
      <div className="text-gray-800 space-y-4 text-sm md:text-base whitespace-pre-wrap">
        {children}
      </div>
    </div>
  </div>
);

const MediaArticles = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);

  const visibleImages = showAll ? allGalleryImages : allGalleryImages.slice(0, 8);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <section className="px-6 md:px-20 py-16 space-y-20 w-full overflow-x-hidden">
      {/* Hero Section */}
      <div data-aos="fade-up" className="pt-10">
        <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">
          Our Media Presence
        </h2>
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border-4 border-green-100">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/umDHsDOnyUo?si=2kpL_5PTwAR9ER6D"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Articles */}
      <div data-aos="fade-up">
        <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">
          Our Articles & Blogs
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Article Cards */}
          {[{
            img: article1,
            title: "Charcoal products received remarkable attention in alternative energy exhibition",
            summary: "Amidst this ongoing energy crisis due to the more than three months long disturbance...",
            onClick: () => setIsModal1Open(true)
          }, {
            img: article2,
            title: "सामाजिक सञ्जालमा सक्रियता र व्यावसायिक सफलता",
            summary: "सामाजिक सञ्जालको सही सदुपयोगले साना व्यवसायहरूले पनि आफ्नो बजार बिस्तार गर्न...",
            onClick: () => setIsModal2Open(true)
          }, {
            img: article3,
            title: "Namuna Biomass Private Limited becoming model in the realm of charcoal enterprise",
            summary: "Nepal is facing acute energy crisis, which is hampering our economic and social development...",
            onClick: () => setIsModal3Open(true)
          }, {
            img: article4,
            title: "Earning from charcoal has given confidence to plan for daughters’ education",
            summary: "Working in a charcoal enterprise helped a Chepang family in Korak not only meet daily needs...",
            onClick: () => setIsModal4Open(true)
          }].map((article, idx) => (
            <div key={idx} className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition border border-gray-100">
              <img src={article.img} alt="" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.summary}</p>
              <button onClick={article.onClick} className="text-green-500 font-medium hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div data-aos="fade-up">
        <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-40 object-cover rounded-md cursor-pointer hover:opacity-80"
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
        {allGalleryImages.length > 8 && !showAll && (
          <div className="text-center mt-6">
            <button onClick={() => setShowAll(true)} className="text-green-500 hover:underline font-medium">
              View More →
            </button>
          </div>
        )}


        
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox
          mainSrc={allGalleryImages[photoIndex]}
          nextSrc={allGalleryImages[(photoIndex + 1) % allGalleryImages.length]}
          prevSrc={allGalleryImages[(photoIndex + allGalleryImages.length - 1) % allGalleryImages.length]}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + allGalleryImages.length - 1) % allGalleryImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % allGalleryImages.length)
          }
        />
      )}

      {/* Modals */}
      {isModal1Open && (
        <Modal onClose={() => setIsModal1Open(false)} title="Charcoal products received remarkable attention in alternative energy exhibition">
          Amidst this ongoing energy crisis due to the more than three months long disturbance in Indo-Nepal Border; Alternative Energy Promotion Center (AEPC) organized a three day Alternative Energy exhibition in the premises of Bhrikutimandap, Kathmandu from 1st January to 3rd January 2016.
        </Modal>
      )}
      {isModal2Open && (
        <Modal onClose={() => setIsModal2Open(false)} title="सामाजिक सञ्जालमा सक्रियता र व्यावसायिक सफलता">
          नारायणगढ । कोराक–८ ढाँडखोलाका चेपाङ समुदायको दैनिकी ज्याला मजदुरीमै चलेको छ । ... (Full content here)
        </Modal>
      )}
      {isModal3Open && (
        <Modal onClose={() => setIsModal3Open(false)} title="Namuna Biomass Private Limited becoming model in the realm of charcoal enterprise">
          Nepal is facing acute energy crisis, which is hampering our economic and social development. ... (Full content here)
        </Modal>
      )}
      {isModal4Open && (
        <Modal onClose={() => setIsModal4Open(false)} title="Earning from charcoal has given confidence to plan for daughters’ education">
          Purna Bhahadur Praja (Chepang) is a habitant of Korak VDC, Dadh Khola. ... (Full content here)
        </Modal>
      )}

{/* ----------  WhatsApp floating button  ---------- */}
 <a
  href="https://wa.me/9779845138406"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center justify-center
             h-14 w-14 rounded-full bg-green-500 text-white shadow-md
             hover:bg-green-600 transition-transform duration-300
             hover:scale-105 animate-pulse-slow"
>
  <FaWhatsapp className="h-7 w-7" />
  <span className="sr-only">Chat on WhatsApp</span>
</a>

    </section>

    
  );
};

export default MediaArticles;