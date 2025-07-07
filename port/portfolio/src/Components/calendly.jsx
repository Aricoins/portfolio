// src/components/CalendlyBadge.jsx
import { useEffect } from 'react';

const CalendlyBadge = () => {
  useEffect(() => {
    // Verificar si ya existe el link para evitar duplicados
    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    // Verificar si ya existe el script para evitar duplicados
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]') && !window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/arielgarcia79/latitud42',
            text: 'Agendá una charla!',
            color: '#7a5af5',
            textColor: '#ffffff',
            branding: undefined,
          });
        }
      };

      document.body.appendChild(script);
      
      // Cleanup function mejorada
      return () => {
        const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        
        if (existingLink) {
          document.head.removeChild(existingLink);
        }
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
        
        // Limpiar el widget de Calendly
        if (window.Calendly && window.Calendly.closePopupWidget) {
          window.Calendly.closePopupWidget();
        }
      };
    }
  }, []);

  return null;
};

export default CalendlyBadge;