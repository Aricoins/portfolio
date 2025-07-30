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
      <div id="about" style={{display: "flex", flexDirection: "row", backgroundColor: currentColor.cuarto, margin: "auto", padding: "4%", marginTop: "3%"}}>
        <Img2 data-aos="fade-left" data-aos-duration="30" data-aos-offset="50"  
          src={theme === "light" ? latw : lat} 
          style={{ width: '33%', margin: "auto"}} alt='devimg' />
        <About currentColor={currentColor} theme={theme} />
      </div>
      <Content style={{ backgroundColor: currentColor.primero }}>
        <Div>
          <Img2 data-aos="fade-left" src={theme === "light" ? lat : latw} style={{ width: '10%' }} alt='devimg' />
        </Div>
        
        <StyledDiv id="proyectos">
          <h2 style={{ 
            fontSize: '20px', 
            fontFamily: "audiowide", 
            backgroundColor: 'white', 
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
              <ServicesSection id="servicios" style={{ backgroundColor: currentColor.primero }}>
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
          Nuestros Servicios
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
            backgroundColor: 'white',
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
            backgroundColor: 'white', 
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
        <button onClick={toggleTheme} style={{position: "fixed", zIndex: "10000", bottom: "18%", right: "2%", border: "black 1px solid"}}>
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
