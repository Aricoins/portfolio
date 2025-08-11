import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import anime from 'animejs/lib/anime.es.js';
import { FaSun, FaMoon, FaWhatsapp, FaCode, FaSearch, FaShieldAlt } from 'react-icons/fa';
import Nav from './Components/Nav';
import Proyectos from './Components/Proyectos';
import About from './Components/about.jsx';
import Tecnologias from './Components/Teconologias';
import Foot from './Components/Foot';
import Contacto from './Components/Contacto';
import lat from '../src/assets/lat.png';
import latw from '../src/assets/latw.png';
import Banner from './Components/banner';
import { colores, coloresBlack } from './Components/colores';
import CalendlyBadge from './Components/calendly.jsx';
import SeoPage from './pages/SEO.jsx';
import CiberseguridadPage from './pages/Ciberseguridad.jsx';



const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  font-family: audiowide-regular;
  position: relative;
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Img2 = styled.img`
  height: 100%;
  z-index: 0;
  
  width: 50vh;

  &:hover {
    color: red;
  }

  @media (max-width: 900px) {
    width: 95%;
    margin: auto;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;
  z-index: 0;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0 0.5rem;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;


const WhatsappButton = styled.a`
  position: fixed;
  bottom: 35%;
  right: 2%;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-decoration: none;

  &:hover {
    background-color: #128C7E;
  }
`;

// Styled components para la sección de servicios
const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4% 2%;
  margin: 2rem 0;
  
  @media (max-width: 900px) {
    padding: 2rem 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 100%;
  }
`;

const ServiceButton = styled.button`
  background: ${props => props.currentColor.tercero};
  border: 2px solid ${props => props.currentColor.segundo};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: audiowide;
  color: ${props => props.theme === 'dark' ? '#FFFFFF' : '#000000'};
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  min-height: 80px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-5px);
    background: ${props => props.currentColor.segundo};
    color: ${props => props.currentColor.primero};
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }

  &:active {
    transform: translateY(-2px);
  }
  
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1.5rem;
    font-size: 0.9rem;
    min-height: 120px;
    gap: 0.5rem;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
  flex-shrink: 0;
  
  @media (max-width: 900px) {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

const ServiceTitle = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size: 1rem;
  
  @media (max-width: 900px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const ServiceDescription = styled.p`
  margin: 0;
  font-size: 0.85rem;
  font-weight: 500;
  opacity: 0.9;
  line-height: 1.4;
  
  @media (max-width: 900px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

// Componente para resetear scroll al cambiar de ruta
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    // Solo resetear scroll si cambiamos a una página diferente (no para scroll interno)
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  
  return null;
}

function HomePage({ currentColor, theme }) {
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    if (service === 'seo') {
      navigate('/seo');
    } else if (service === 'ciberseguridad') {
      navigate('/ciberseguridad');
    } else if (service === 'desarrollo') {
      // Por ahora solo scroll a proyectos
      document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sección About */}
      <div id="about" style={{
        display: "flex", 
        flexDirection: "row", 
        backgroundColor: currentColor.primero === "#FFFFFF" 
          ? "rgba(255, 255, 255, 0.60)"  // Tema claro: muy transparente
          : "rgba(0, 0, 0, 0.70)",       // Tema oscuro: semi-transparente negro
        backdropFilter: "blur(15px)",
        border: `1px solid ${currentColor.primero === "#FFFFFF" 
          ? "rgba(0, 0, 0, 0.05)" 
          : "rgba(255, 255, 255, 0.1)"}`,
        borderRadius: "20px",
        boxShadow: currentColor.primero === "#FFFFFF"
          ? "0 8px 32px rgba(0, 0, 0, 0.05)"
          : "0 8px 32px rgba(0, 0, 0, 0.4)",
        margin: "auto", 
        padding: "2%", 
        marginTop: "1%"
      }}>
        <Img2 data-aos="fade-left" data-aos-duration="30" data-aos-offset="50"  
          src={theme === "light" ? lat : latw} 
          style={{ width: '25%', margin: "auto"}} alt='devimg' />
        <About currentColor={currentColor} theme={theme} />
      </div>
      <Content style={{ backgroundColor: 'transparent' }}>
        <Div>
          <Img2 data-aos="fade-left" src={theme === "light" ? lat : latw} style={{ width: '10%' }} alt='devimg' />
        </Div>
        
        <StyledDiv id="proyectos">
          <h2 style={{ 
            fontSize: '20px', 
            fontFamily: "audiowide", 
            backgroundColor: currentColor.primero === "#FFFFFF" 
              ? "rgba(255, 255, 255, 0.70)" 
              : "rgba(0, 0, 0, 0.70)",
            backdropFilter: "blur(10px)", 
            color: '#000000',
            width: '100%', 
            height: 'auto', 
            margin: '0%', 
            textAlign: 'center',
            padding: '1rem',
            borderRadius: '10px',
            fontWeight: '700',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Proyectos
          </h2>
          <Proyectos currentColor={currentColor} />
        </StyledDiv>
        
        <Div>
          <Img2 data-aos="fade-left" src={theme === "light" ? lat : latw} style={{ width: '10%' }} alt='devimg' />
        </Div>
              <ServicesSection id="servicios" style={{ 
                backgroundColor: currentColor.primero === "#FFFFFF" 
                  ? "rgba(255, 255, 255, 0.60)"  // Tema claro: muy transparente
                  : "rgba(0, 0, 0, 0.70)",       // Tema oscuro: semi-transparente negro
                backdropFilter: "blur(15px)",
                border: `1px solid ${currentColor.primero === "#FFFFFF" 
                  ? "rgba(0, 0, 0, 0.05)" 
                  : "rgba(255, 255, 255, 0.1)"}`,
                borderRadius: "20px",
                boxShadow: currentColor.primero === "#FFFFFF"
                  ? "0 8px 32px rgba(0, 0, 0, 0.05)"
                  : "0 8px 32px rgba(0, 0, 0, 0.4)"
              }}>
        <h2 style={{ 
          fontFamily: "audiowide", 
          fontSize: '20px', 
          backgroundColor: 'white', 
          width: '100%', 
          textAlign: 'center',
          margin: '0% 0% 2% 0%',
          padding: '1rem',
          borderRadius: '10px',
          color: '#000000',
          fontWeight: '700',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
        }}>
          Servicios
        </h2>
        
        <ServicesGrid>
          <ServiceButton 
            currentColor={currentColor}
            theme={theme}
            onClick={() => handleServiceClick('desarrollo')}
            data-aos="fade-up" 
            data-aos-duration="300"
          >
            <ServiceIcon>
              <FaCode />
            </ServiceIcon>
            <ServiceContent>
              <ServiceTitle>Desarrollo Apps & Webs</ServiceTitle>
              <ServiceDescription>
                Desarrollo completo de aplicaciones web y móviles con tecnologías modernas
              </ServiceDescription>
            </ServiceContent>
          </ServiceButton>

          <ServiceButton 
            currentColor={currentColor}
            theme={theme}
            onClick={() => handleServiceClick('seo')}
            data-aos="fade-up" 
            data-aos-duration="400"
          >
            <ServiceIcon>
              <FaSearch />
            </ServiceIcon>
            <ServiceContent>
              <ServiceTitle>Optimización SEO</ServiceTitle>
              <ServiceDescription>
                Mejora tu visibilidad online y aumenta el tráfico orgánico de tu sitio web
              </ServiceDescription>
            </ServiceContent>
          </ServiceButton>

          <ServiceButton 
            currentColor={currentColor}
            theme={theme}
            onClick={() => handleServiceClick('ciberseguridad')}
            data-aos="fade-up" 
            data-aos-duration="500"
          >
            <ServiceIcon>
              <FaShieldAlt />
            </ServiceIcon>
            <ServiceContent>
              <ServiceTitle>Ciberseguridad</ServiceTitle>
              <ServiceDescription>
                Protege tu negocio con auditorías y soluciones de seguridad avanzadas
              </ServiceDescription>
            </ServiceContent>
          </ServiceButton>
        </ServicesGrid>
      </ServicesSection>
  
        <Div>
          <Img2 data-aos="fade-left" src={theme === "light" ? lat : latw} style={{ width: '10%' }} alt='devimg' />
        </Div>

        <StyledDiv id="tecnologias">
          <h2 style={{ 
            fontFamily: "audiowide",
            fontSize: '20px',
            backgroundColor: currentColor.primero === "#FFFFFF" 
              ? "rgba(255, 255, 255, 0.70)" 
              : "rgba(0, 0, 0, 0.70)",
            backdropFilter: "blur(10px)",
            color: '#000000',
            width: '100%', 
            height: '100%',
            margin: '0%',
            textAlign: 'center',
            padding: '1rem',
            borderRadius: '10px',
            fontWeight: '700',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Tecnologías
          </h2>
          <Tecnologias currentColor={currentColor} />
        </StyledDiv>
        
        <Div>
          <Img2 data-aos="fade-left" src={theme === "light" ? lat : latw} style={{ width: '10%' }} alt='devimg' />
        </Div>

        <StyledDiv id="contacto">
          <h2 style={{ 
            fontFamily: "audiowide", 
            fontSize: '20px', 
            backgroundColor: currentColor.primero === "#FFFFFF" 
              ? "rgba(255, 255, 255, 0.70)" 
              : "rgba(0, 0, 0, 0.70)",
            backdropFilter: "blur(10px)", 
            color: '#000000',
            width: '100%', 
            margin: '0%', 
            textAlign: 'center',
            padding: '1rem',
            borderRadius: '10px',
            fontWeight: '700',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Contacto
          </h2>
          <div style={{marginTop: "10%"}}>
            <Banner/>
          </div>
          <Contacto currentColor={currentColor} />
        </StyledDiv>
        
        <CalendlyBadge />
      </Content>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  const isDesktop = () => {
    return !/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

    const href = isDesktop()
      ? 'https://web.whatsapp.com/send?phone=5492945907975'
      : 'https://wa.me/+5492945907975';
  
  const currentcolor = theme === 'light' ? colores : coloresBlack;

  useEffect(() => {
    AOS.init();
    anime({
      targets: '.anim',
      loop: true,
      easing: 'linear',
      duration: 10000,
      direction: 'alternate',
      translateX: [{ value: -400, duration: 20000, delay: 0 }],
      translateY: [{ value: 400, duration: 10000, delay: 0 }, { value: 2000, duration: 10000, delay: 0 }],
      scale: [{ value: 0.2, easing: 'easeOutSine', duration: 20000 }, { value: 1, duration: 10000 }],
    });

    anime({
      targets: '.anim5',
      loop: true,
      easing: 'linear',
      duration: 10000,
      direction: 'alternate',
      translateX: [{ value: -400, duration: 10000, delay: 0 }],
      translateY: [{ value: 400, duration: 10000, delay: 0 }],
      scale: [{ value: 0.2, easing: 'easeOutSine', duration: 500 }, { value: 0.5, easing: 'easeInOutQuad', duration: 1200 }],
    });
  }, []);

  return (
    <>
      <Router> 
        {/* Fondo realista: Cielo nocturno profundo / Amanecer dorado */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: currentcolor === coloresBlack 
            ? `radial-gradient(ellipse at 30% 20%, #1a1a2e 0%, #0f0f23 25%),
               linear-gradient(
                 180deg,
                 #000011 0%,
                 #001122 8%,
                 #112244 18%,
                 #1a1a2e 35%,
                 #2d1b69 47%,
                 #16213e 49.5%,
                 #0f2460 50%,
                 #1a1810 50.5%,
                 #2a1810 55%,
                 #1a0a0a 70%,
                 #0d0505 85%,
                 #000000 100%
               )`
            : `radial-gradient(ellipse at 75% 25%, #fff8dc 0%, transparent 35%),
               radial-gradient(ellipse at 60% 35%, #f0f8ff 0%, transparent 50%),
               linear-gradient(
                 180deg,
                 #f8f8ff 0%,
                 #f0f8ff 12%,
                 #e6f3ff 25%,
                 #ddeeff 38%,
                 #d6e9ff 47%,
                 #b8d4f0 49.2%,
                 #5f9ea0 49.8%,
                 #4682b4 50%,
                 #4169e1 50.2%,
                 #6495ed 50.8%,
                 #87ceeb 52%,
                 #b0c4de 60%,
                 #c0c0c0 75%,
                 #d3d3d3 90%,
                 #e6e6e6 100%
               )`,
          zIndex: -1000,
          transition: 'background 2s ease-in-out'
        }}></div>
        
        {/* Capa de atmósfera y profundidad */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: currentcolor === coloresBlack 
            ? `radial-gradient(ellipse at 20% 80%, rgba(25, 25, 112, 0.3) 0%, transparent 60%),
               radial-gradient(ellipse at 80% 20%, rgba(72, 61, 139, 0.2) 0%, transparent 50%),
               radial-gradient(ellipse at 60% 60%, rgba(75, 0, 130, 0.15) 0%, transparent 70%)`
            : `radial-gradient(ellipse at 30% 70%, rgba(240, 248, 255, 0.3) 0%, transparent 60%),
               radial-gradient(ellipse at 70% 30%, rgba(255, 250, 240, 0.2) 0%, transparent 50%),
               radial-gradient(ellipse at 50% 50%, rgba(135, 206, 235, 0.15) 0%, transparent 70%)`,
          zIndex: -999,
          animation: 'atmosphereFloat 12s ease-in-out infinite alternate',
          transition: 'background 2s ease-in-out'
        }}></div>
        
        {/* Horizonte realista con bruma atmosférica */}
        <div style={{
          position: 'fixed',
          top: 'calc(50% - 3px)',
          left: 0,
          width: '100%',
          height: '6px',
          background: currentcolor === coloresBlack 
            ? 'linear-gradient(90deg, transparent 0%, rgba(30, 30, 50, 0.4) 20%, rgba(50, 50, 80, 0.6) 50%, rgba(30, 30, 50, 0.4) 80%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(70, 130, 180, 0.4) 20%, rgba(95, 158, 160, 0.7) 50%, rgba(70, 130, 180, 0.4) 80%, transparent 100%)',
          zIndex: -998,
          filter: 'blur(1px)',
          transition: 'all 2s ease-in-out'
        }}></div>
        
        {/* Bruma del horizonte */}
        <div style={{
          position: 'fixed',
          top: 'calc(50% - 15px)',
          left: 0,
          width: '100%',
          height: '30px',
          background: currentcolor === coloresBlack 
            ? 'linear-gradient(180deg, transparent 0%, rgba(30, 30, 60, 0.2) 50%, transparent 100%)'
            : 'linear-gradient(180deg, transparent 0%, rgba(176, 196, 222, 0.3) 30%, rgba(192, 192, 192, 0.4) 50%, rgba(211, 211, 211, 0.3) 70%, transparent 100%)',
          zIndex: -997,
          filter: 'blur(3px)',
          animation: 'mistFloat 8s ease-in-out infinite alternate',
          transition: 'background 2s ease-in-out'
        }}></div>
        
        {/* Efectos realistas de playa/costa (solo tema claro) */}
        {currentcolor !== coloresBlack && (
          <>
            {/* Olas principales */}
            <div style={{
              position: 'fixed',
              top: '51.5%',
              left: 0,
              width: '100%',
              height: '5px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(70, 130, 180, 0.4) 20%, rgba(95, 158, 160, 0.7) 35%, rgba(65, 105, 225, 0.8) 50%, rgba(100, 149, 237, 0.7) 65%, rgba(70, 130, 180, 0.4) 80%, transparent 100%)',
              zIndex: -996,
              filter: 'blur(0.3px)',
              animation: 'oceanWave 4s ease-in-out infinite',
              borderRadius: '50%',
              boxShadow: '0 0 3px rgba(95, 158, 160, 0.5)'
            }}></div>
            
            {/* Espuma de olas */}
            <div style={{
              position: 'fixed',
              top: '53%',
              left: 0,
              width: '100%',
              height: '3px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 25%, rgba(240, 248, 255, 0.8) 40%, rgba(248, 248, 255, 0.9) 50%, rgba(240, 248, 255, 0.8) 60%, rgba(255, 255, 255, 0.5) 75%, transparent 100%)',
              zIndex: -995,
              animation: 'wavefoam 2.5s ease-in-out infinite',
              filter: 'blur(0.8px)',
              boxShadow: '0 0 2px rgba(255, 255, 255, 0.3)'
            }}></div>
            
            {/* Ondas secundarias */}
            <div style={{
              position: 'fixed',
              top: '56%',
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(95, 158, 160, 0.4) 30%, rgba(72, 61, 139, 0.5) 45%, rgba(128, 128, 128, 0.6) 50%, rgba(72, 61, 139, 0.5) 55%, rgba(95, 158, 160, 0.4) 70%, transparent 100%)',
              zIndex: -994,
              animation: 'oceanWave 6s ease-in-out infinite reverse',
              filter: 'blur(0.7px)',
              boxShadow: '0 0 2px rgba(128, 128, 128, 0.3)'
            }}></div>
            
            {/* Silver shimmer effect */}
            <div style={{
              position: 'fixed',
              top: '49.5%',
              left: 0,
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(192, 192, 192, 0.6) 30%, rgba(211, 211, 211, 0.8) 50%, rgba(192, 192, 192, 0.6) 70%, transparent 100%)',
              zIndex: -997,
              filter: 'blur(0.5px)',
              animation: 'silverShimmer 3.5s ease-in-out infinite',
              boxShadow: '0 0 3px rgba(211, 211, 211, 0.4)'
            }}></div>
            
            {/* Reflexos de arena húmeda */}
            <div style={{
              position: 'fixed',
              top: '59%',
              left: 0,
              width: '100%',
              height: '10px',
              background: 'linear-gradient(180deg, rgba(192, 192, 192, 0.3) 0%, rgba(210, 180, 140, 0.25) 30%, rgba(244, 164, 96, 0.15) 60%, rgba(255, 228, 196, 0.1) 80%, transparent 100%)',
              zIndex: -993,
              filter: 'blur(1.5px)',
              animation: 'sandReflection 5s ease-in-out infinite alternate',
              boxShadow: '0 0 4px rgba(192, 192, 192, 0.2)'
            }}></div>
          </>
        )}
        
        {/* Sol/Luna realista con efectos atmosféricos */}
        <div style={{
          position: 'fixed',
          top: currentcolor === coloresBlack ? '15%' : '20%',
          right: currentcolor === coloresBlack ? '15%' : '12%',
          width: currentcolor === coloresBlack ? '90px' : '110px',
          height: currentcolor === coloresBlack ? '90px' : '110px',
          borderRadius: '50%',
          background: currentcolor === coloresBlack 
            ? `radial-gradient(circle at 35% 25%, #fffff0 0%, #f5f5dc 20%, #e6e6fa 45%, #d3d3d3 70%, #c0c0c0 85%, rgba(169, 169, 169, 0.4) 100%)`
            : `radial-gradient(circle at 30% 30%, #ffff99 0%, #ffd700 15%, #ffb347 35%, #ff8c00 60%, #ff6347 80%, rgba(255, 69, 0, 0.6) 100%)`,
          boxShadow: currentcolor === coloresBlack
            ? `0 0 30px rgba(248, 248, 255, 0.4), 
               0 0 60px rgba(230, 230, 250, 0.2), 
               0 0 90px rgba(211, 211, 211, 0.1),
               inset -15px -15px 30px rgba(169, 169, 169, 0.3)`
            : `0 0 40px rgba(255, 215, 0, 0.8), 
               0 0 80px rgba(255, 140, 0, 0.5), 
               0 0 120px rgba(255, 69, 0, 0.3),
               inset -8px -8px 20px rgba(255, 69, 0, 0.2)`,
          zIndex: -990,
          animation: currentcolor === coloresBlack ? 'moonGlow 8s ease-in-out infinite alternate' : 'sunPulse 6s ease-in-out infinite alternate',
          transition: 'all 2s ease-in-out',
          filter: currentcolor === coloresBlack ? 'contrast(1.1) brightness(0.9)' : 'contrast(1.2) brightness(1.1)'
        }}></div>
        
        {/* Halo atmosférico del sol/luna */}
        <div style={{
          position: 'fixed',
          top: currentcolor === coloresBlack ? '12%' : '17%',
          right: currentcolor === coloresBlack ? '12%' : '9%',
          width: currentcolor === coloresBlack ? '150px' : '170px',
          height: currentcolor === coloresBlack ? '150px' : '170px',
          borderRadius: '50%',
          background: currentcolor === coloresBlack 
            ? 'radial-gradient(circle, rgba(248, 248, 255, 0.1) 0%, rgba(230, 230, 250, 0.05) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, rgba(255, 140, 0, 0.1) 40%, rgba(255, 69, 0, 0.05) 70%, transparent 100%)',
          zIndex: -991,
          animation: currentcolor === coloresBlack ? 'moonHalo 10s ease-in-out infinite alternate' : 'sunHalo 8s ease-in-out infinite alternate',
          transition: 'all 2s ease-in-out',
          filter: 'blur(8px)'
        }}></div>

        {/* Constelaciones realistas y nubes volumétricas */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -992,
          overflow: 'hidden'
        }}>
          {currentcolor === coloresBlack 
            ? // Estrellas realistas con diferentes intensidades
              [...Array(40)].map((_, i) => {
                const brightness = Math.random();
                const size = brightness > 0.7 ? Math.random() * 3 + 2 : Math.random() * 2 + 0.5;
                return (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 45}%`,
                      width: `${size}px`,
                      height: `${size}px`,
                      backgroundColor: brightness > 0.8 ? '#ffffff' : brightness > 0.6 ? '#f0f8ff' : '#e6e6fa',
                      borderRadius: '50%',
                      animation: `starTwinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 3}s`,
                      boxShadow: brightness > 0.7 
                        ? `0 0 ${size * 3}px rgba(255, 255, 255, ${brightness}), 0 0 ${size * 6}px rgba(255, 255, 255, ${brightness * 0.5})`
                        : `0 0 ${size * 2}px rgba(240, 248, 255, ${brightness})`,
                      opacity: brightness
                    }}
                  />
                );
              })
            : // Nubes volumétricas realistas
              [...Array(12)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${Math.random() * 120 - 10}%`,
                    top: `${Math.random() * 35 + 5}%`,
                    width: `${Math.random() * 80 + 60}px`,
                    height: `${Math.random() * 35 + 25}px`,
                    background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 0.1) 100%)',
                    borderRadius: `${Math.random() * 30 + 40}px`,
                    animation: `cloudsFloat ${Math.random() * 25 + 20}s linear infinite`,
                    animationDelay: `${Math.random() * 8}s`,
                    filter: 'blur(2px)',
                    transform: `scale(${Math.random() * 0.5 + 0.8})`,
                    boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.2)'
                  }}
                />
              ))
          }
        </div>

        <button onClick={toggleTheme} style={{position: "fixed", zIndex: "10000",  bottom: "18%", right: "2%", border: "white 1px solid"}}>
          {currentcolor === colores ? <FaMoon /> : <FaSun />}  
        </button>
       
        <div>
          <Nav currentcolor={currentcolor} toggleTheme={toggleTheme} style={{ width: '50%', margin: 'auto' }} />
        </div>

     
        <Routes>
          <Route path="/" element={<HomePage currentColor={currentcolor} theme={theme} />} />
          <Route path="/seo" element={<SeoPage currentColor={currentcolor} theme={theme} />} />
          <Route path="/ciberseguridad" element={<CiberseguridadPage currentColor={currentcolor} theme={theme} />} />
        </Routes>

        <div style={{position: "fixed", top: "10%", padding: "20px", zIndex: 2}}>
          <WhatsappButton href={href} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </WhatsappButton>
        </div>
        
        <Foot currentColor={currentcolor} theme={theme} />
      </Router>      
    </>
  );
}

    
HomePage.propTypes = {
  currentColor: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
};

export default App;
