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
          text: 'Schedule time with me',
          color: '#1000ff',
          textColor: '#140808',
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
