import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// AOS styles (already added)
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
