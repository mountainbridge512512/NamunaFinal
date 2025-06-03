// src/components/CustomCursor.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div className="w-6 h-6 bg-green-500 rounded-full opacity-80 mix-blend-difference" />
    </motion.div>
  );
};

export default CustomCursor;
