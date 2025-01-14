// src/components/CalendlyBadge.jsx
import React, { useEffect } from 'react';

const CalendlyBadge = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/arielgarcia79/latitud42',
          text: 'Agendá una charla!',
          color: '#ffffff',
          textColor: '#7a5af5',
          branding: undefined,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default CalendlyBadge;