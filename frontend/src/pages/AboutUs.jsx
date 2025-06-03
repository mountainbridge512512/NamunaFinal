import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaWhatsapp } from "react-icons/fa";

import heroImg from "../assets/a.png";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.jpg";
import missionImg from "../assets/mission.png";
import valueImg from "../assets/values.png";
import impactImg from "../assets/impact.jpg";

import { motion } from "framer-motion";

import whoImg from "../assets/who.png";
import missImg from "../assets/miss.png";
import impImg from "../assets/imp.png";
const values = [
  {
    icon: "🌿",
    title: "Sustainability",
    desc: "We are committed to environmental stewardship and renewable resource management.",
  },
  {
    icon: "🤝",
    title: "Community Empowerment",
    desc: "We create fair employment and support rural development through local sourcing and capacity building.",
  },
  {
    icon: "⚡",
    title: "Innovation",
    desc: "We continuously improve our technologies and practices to enhance product quality and efficiency.",
  },
  {
    icon: "🛡️",
    title: "Integrity",
    desc: "We operate with transparency, accountability, and a deep respect for people and the planet.",
  },
  {
    icon: "🎯",
    title: "Impact-Driven",
    desc: "We measure success by the positive social, economic, and environmental outcomes we create.",
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="pt-10 bg-white text-gray-800 w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-black aspect-[16/9] md:aspect-[16/7]">
        <img
          src={heroImg}
          alt="About Us Hero Banner"
          className="w-full h-full object-contain object-center bg-white"
        />
      </section>

      {/* Company Intro */}
      <section className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-gray-50">
        <div data-aos="fade-right">
          <div className="pl-4 border-l-4 border-green-500">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
              Who we are ?
            </h2>
          </div>{" "}
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Namuna Biomass Pvt. Ltd. is a Nepal-based company dedicated to
            producing high-quality, eco-friendly charcoal briquettes from
            sustainably sourced biomass. With over a decade of experience in the
            renewable energy sector, we are proud to be one of Nepal’s leading
            innovators in clean fuel solutions. Founded with a vision to reduce
            deforestation and promote sustainable livelihoods, we convert
            agricultural and forestry waste into efficient, smokeless, and
            carbon-neutral briquettes. Our products offer a cleaner alternative
            to firewood, traditional charcoal, and fossil fuels, supporting
            households, restaurants, and industries in their transition to green
            energy. At Namuna Biomass, we believe in creating impact—not just in
            fuel efficiency, but also in the lives of farmers, workers, and
            communities who form the backbone of our supply chain. Through local
            sourcing, employment generation, and eco-conscious practices, we are
            helping build a resilient and sustainable future for Nepal and
            beyond. We are currently expanding our operations and are working
            toward international quality standards like ISO 9001:2015 to serve
            global markets, especially in Europe and Asia. Our production
            facility is equipped with modern drying, briquetting, and quality
            control systems to ensure consistent, premium-grade briquettes
            for our customers.{" "}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="overflow-hidden h-auto md:h-[px] rounded-xl shadow-md bg-white"
        >
          <img
            src={whoImg}
            alt="Production process"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2
          className="text-3xl md:text-4xl font-bold text-green-500 text-center mb-12"
          data-aos="fade-up"
        >
          Our Team
        </h2>

        {[
          {
            img: team1,
            name: "Krishna Bhattarai",
            role: "Founder & Marketing Manager",
            desc: `At Namuna Biomass Pvt. Ltd., we are proud to lead Nepal toward a cleaner and more sustainable future. Our eco-friendly charcoal briquettes and cook stoves are made from locally sourced agricultural and forest waste—offering a smart alternative to traditional fuels.`,
          },
          {
            img: team2,
            name: "Baburam Bhattarai",
            role: "Founder & Chairman",
            desc: `Namuna Biomass was founded with a vision to turn local waste into clean, affordable energy for Nepal. Since 2013, we’ve been committed to reducing reliance on fossil fuels, protecting our forests, and creating opportunities in rural communities. Our products reflect this purpose—simple, sustainable solutions that power homes while preserving nature. Together, we can build a greener, more self-reliant Nepal.`,
          },
          {
            img: team3,
            name: "Dr. Arjun Bhattarai",
            role: "Advisor & Founder",
            desc: `We believe real change begins with local solutions. By converting agricultural and forest waste into clean energy, we’re offering Nepal an eco-friendly alternative to traditional fuels. Our journey is a testament to what local solutions can achieve when guided by purpose and responsibility. We are proud to support a greener Nepal—one briquette at a time.`,
          },
          {
            img: team4,
            name: "Hari Bhattarai",
            role: "Founder & Production Head",
            desc: `At Namuna Biomass, our focus in production is on quality, consistency, and sustainability. Every briquette and stove we manufacture is the result of careful sourcing, efficient processes, and a deep commitment to eco-friendly practices. We take pride in turning local waste into reliable energy products that serve homes across Nepal while caring for the environment every step of the way.`,
          },
          {
            img: team5,
            name: "Moti Poudel",
            role: "Environmental Analyst",
            desc: `Our work goes beyond energy—we’re addressing climate challenges at the grassroots level. By transforming invasive plants and agricultural waste into clean-burning fuel, we help reduce carbon emissions, deforestation, and landfill waste. Our approach supports both environmental health and community well-being, making every product a step toward a more sustainable and resilient Nepal.`,
          },
        ].map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 mb-8 flex flex-col md:flex-row items-start gap-6 transition-transform duration-300 hover:scale-[1.02]"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-xl border"
            />
            <div>
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{member.role}</p>
              <p className="text-gray-700 text-sm md:text-base">
                {member.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Our Values */}
      <section className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-gray-50">
        <div data-aos="fade-right">
          <img
            src={missImg}
            alt="Our company values"
            className="rounded-xl shadow-md object-cover bg-white w-full h-64 md:h-96"
          />
        </div>
        <div data-aos="fade-left">
          <div className="pl-4 border-l-4 border-green-500">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
              Our Mission
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            To produce high-quality, eco-friendly biomass charcoal briquettes by
            transforming locally available agricultural and forestry waste into
            clean energy. We aim to reduce deforestation, combat climate change,
            and create sustainable jobs—empowering rural communities and
            promoting inclusive, green economic growth in line with SDGs 7
            (Affordable and Clean Energy), 8 (Decent Work and Economic Growth),
            and 13 (Climate Action).
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 bg-gray-100">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text with colored accent bar */}
          <motion.div
            className="order-2 lg:order-1 flex flex-col justify-center space-y-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="pl-4 border-l-4 border-green-500">
              <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              To be a global leader in sustainable biomass energy—driving
              innovation in clean fuel technologies, supporting circular economy
              practices, and making renewable energy accessible to all.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We envision a future where communities thrive through responsible
              resource use, clean air, and resilient livelihoods, contributing
              to a healthier planet and a low-carbon economy.
            </p>
          </motion.div>

          {/* Image with scale-up hover and reveal */}
          <motion.div
            className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={missImg}
              alt="Our mission"
              className="rounded-xl shadow-md object-cover bg-white w-full h-64 md:h-96"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-50">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="space-y-8"
        >
          <div className="pl-4 border-l-4 border-green-500">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
              Our Values
            </h2>
          </div>
          <ul className="space-y-6">
            {values.map(({ icon, title, desc }, idx) => (
              <li
                key={title}
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-full text-xl">
                  <span role="img" aria-label={title.toLowerCase()}>
                    {icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {title}
                  </h3>
                  <p className="mt-1 text-gray-600 text-sm md:text-base leading-relaxed">
                    {desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src={impImg}
            alt="Environmental impact"
            className="object-cover w-full h-64 md:h-96"
          />
        </div>
      </section>

      {/* Roadmap - Zigzag Timeline (Updated with tight spacing) */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2
          className="text-3xl md:text-4xl font-bold text-green-500 text-center mb-12"
          data-aos="fade-up"
        >
          How Charcoal Briquette is made?
        </h2>

        <div className="relative">
          {/* Vertical line in center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-300 hidden md:block"></div>

          <div className="flex flex-col gap-6">
            {[
              "Collection of Raw Materials",
              "Carbonization(Burning in a Drum)",
              "Charcoal Extraction",
              "Crushing & Mixing",
              "Mixing with Natural Binders",
              "Briquette Pressing",
              "Drying",
              "Packaging & Distribution",
            ].map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative w-full md:w-1/2 px-6 py-2 ${
                    isLeft
                      ? "md:ml-0 md:mr-auto text-left"
                      : "md:ml-auto md:mr-0 text-right"
                  }`}
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  <div className="bg-green-50 border border-green-400 p-4 rounded-xl shadow-md">
                    <h3 className="text-lg font-bold text-green-600">
                      Step {index + 1}
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base">{step}</p>
                  </div>
                  {/* Circle marker */}
                  <div
                    className={`absolute top-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white ${
                      isLeft ? "-right-2" : "-left-2"
                    } md:block hidden`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-6 bg-green-100 overflow-hidden">
        <div className="marquee whitespace-nowrap text-lg sm:text-xl text-green-700 font-semibold px-6">
          <span className="inline-block mx-6">
            ♻️ Empowering Sustainability
          </span>
          <span className="inline-block mx-6">🌱 Clean Energy Solutions</span>
          <span className="inline-block mx-6">
            🔥 Eco-Friendly Biomass Fuels
          </span>
          <span className="inline-block mx-6">
            🌿 Join the Green Revolution
          </span>
        </div>
      </section>

      {/* Custom Tailwind Style for Marquee */}
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

export default AboutUs;
