import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaChartLine, FaSearch, FaMobileAlt, FaLightbulb, FaThumbsUp, FaTrophy } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../Components/banner';
import CalendlyBadge from '../Components/calendly.jsx';
import lat from '../assets/lat.png';
import latw from '../assets/latw.png';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
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

const SeoContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  z-index: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: audiowide-regular;
  padding: 4%;
  box-sizing: border-box;
  
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;
  z-index: 10;
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

const ServiceCard = styled.div`
  background: ${props => 
    props.currentColor.primero === "#FFFFFF" 
      ? "rgba(255, 255, 255, 0.80)"  // Tema claro: semi-transparente
      : "rgba(26, 22, 37, 0.85)"     // Tema oscuro: semi-transparente
  };
  backdrop-filter: blur(15px);
  border-radius: 15px;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: ${props => 
    props.currentColor.primero === "#FFFFFF"
      ? "0 6px 12px rgba(0, 0, 0, 0.1)"
      : "0 6px 12px rgba(0, 0, 0, 0.3)"
  };
  transition: all 0.3s ease;
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  gap: 3rem;
  border: 2px solid ${props => 
    props.currentColor.primero === "#FFFFFF"
      ? "rgba(0, 0, 0, 0.1)"
      : props.currentColor.segundo
  };

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => 
      props.currentColor.primero === "#FFFFFF"
        ? "0 12px 24px rgba(0, 0, 0, 0.15)"
        : "0 12px 24px rgba(153, 90, 152, 0.4)"
    };
    border-color: ${props => props.currentColor.quinto};
  }
  
  @media (max-width: 900px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    background: ${props => 
      props.currentColor.primero === "#FFFFFF" 
        ? "rgba(255, 255, 255, 0.90)"  // Más opaco en mobile
        : "rgba(26, 22, 37, 0.95)"
    };
  }
`;

const ServiceContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 900px) {
    order: 2;
  }
`;

const ServiceImage = styled.img`
  width: 280px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  flex-shrink: 0;
  transition: transform 0.3s ease;
  order: 2;

  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 900px) {
    width: 100%;
    max-width: 350px;
    height: 220px;
    order: 1;
  }
`;

const ServiceTitle = styled.h3`
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : "#000000"};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: audiowide;
  font-weight: 700;
  text-shadow: ${props => props.currentColor.segundo === "#4B4B4B" ? "2px 2px 4px rgba(0,0,0,0.7)" : "none"};
  
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : "#000000"};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6;
  text-shadow: ${props => props.currentColor.segundo === "#4B4B4B" ? "1px 1px 2px rgba(0,0,0,0.5)" : "none"};

  &:before {
    content: "•";
    color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : "#000000"};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    font-size: 1.2rem;
  }
  
  @media (max-width: 900px) {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
  }
`;

const ResultsSection = styled.div`
  background: ${props => 
    props.currentColor.primero === "#FFFFFF" 
      ? "rgba(0, 0, 0, 0.05)"        // Tema claro: fondo muy sutil
      : "rgba(153, 90, 152, 0.25)"   // Tema oscuro: violeta semi-transparente
  };
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  border: 1px solid ${props => 
    props.currentColor.primero === "#FFFFFF"
      ? "rgba(0, 0, 0, 0.1)"
      : "rgba(153, 90, 152, 0.3)"
  };
  
  @media (max-width: 900px) {
    padding: 1rem;
    margin: 1rem 0;
    background: ${props => 
      props.currentColor.primero === "#FFFFFF" 
        ? "rgba(0, 0, 0, 0.08)"      // Más visible en mobile
        : "rgba(153, 90, 152, 0.35)"
    };
  }
`;

const ResultsTitle = styled.h2`
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : "#000000"};
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: audiowide;
  font-size: 20px;
  font-weight: 700;
  text-shadow: ${props => props.currentColor.segundo === "#4B4B4B" ? "2px 2px 4px rgba(0,0,0,0.7)" : "none"};
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  @media (min-width: 901px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1201px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ResultCard = styled.div`
  background: ${props => 
    props.currentColor.primero === "#FFFFFF" 
      ? "rgba(255, 255, 255, 0.75)"  // Tema claro: semi-transparente
      : "rgba(26, 22, 37, 0.80)"     // Tema oscuro: semi-transparente
  };
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : "#000000"};
  box-shadow: ${props => 
    props.currentColor.primero === "#FFFFFF"
      ? "0 2px 8px rgba(0, 0, 0, 0.1)"
      : "0 2px 8px rgba(0, 0, 0, 0.3)"
  };
  border: 1px solid ${props => 
    props.currentColor.primero === "#FFFFFF"
      ? "rgba(0, 0, 0, 0.1)"
      : "rgba(153, 90, 152, 0.3)"
  };
  
  h3 {
    color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : "#000000"};
    font-weight: 700;
    margin: 1rem 0;
    font-size: 1.2rem;
    text-shadow: ${props => props.currentColor.segundo === "#4B4B4B" ? "1px 1px 2px rgba(0,0,0,0.5)" : "none"};
  }
  
  p {
    color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#F0F0F0" : "#000000"};
    font-weight: 600;
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

const ResultValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : "#000000"};
  margin: 0.5rem 0;
  font-family: audiowide;
`;

const SeoPage = ({ currentColor, theme }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Content style={{ 
        backgroundColor: 'transparent'
      }}>
        <div style={{
          display: "flex", 
          flexDirection: "row", 
          backgroundColor: currentColor.primero === "#FFFFFF" 
            ? "rgba(255, 255, 255, 0.80)"
            : "rgba(26, 22, 37, 0.85)",
          backdropFilter: "blur(15px)",
          border: `1px solid ${currentColor.primero === "#FFFFFF" 
            ? "rgba(0, 0, 0, 0.1)" 
            : "rgba(153, 90, 152, 0.3)"}`,
          borderRadius: "20px",
          boxShadow: currentColor.primero === "#FFFFFF"
            ? "0 8px 32px rgba(0, 0, 0, 0.1)"
            : "0 8px 32px rgba(0, 0, 0, 0.3)",
          margin: "auto", 
          padding: "4%", 
          marginTop: "3%"
        }}>
          <Img2 
            data-aos="fade-right"  
            data-aos-duration="300"
            data-aos-offset="50"  
            src={theme === "light" ? lat : latw} 
            style={{ width: '30%', margin: "auto"}} 
            alt='seo-img' 
          />
          <SeoContainer>
            <h1 style={{ 
              color: currentColor.segundo === "#A8E0E4" ? "#1A1A1A" : currentColor.segundo, 
              textAlign: 'center',
              fontSize: '20px',
              fontFamily: "audiowide",
              marginBottom: '2rem',
              backgroundColor: 'white',
              width: '100%',
              height: '100%',
              zIndex: 2,
              margin: '0%',
              fontWeight: '700'
            }}>
              Servicios Profesionales de SEO
            </h1>

            <p style={{ 
              textAlign: 'center',
              fontSize: '1.5rem',
              marginBottom: '3rem',
              color: currentColor.quinto,
              lineHeight: 1.6,
              fontFamily: 'Verdana'
            }}>
              Especialistas en optimización técnica con experiencia en Core Web Vitals, structured data y arquitectura SEO enterprise. Combinamos análisis técnico profundo con estrategias data-driven utilizando herramientas como Screaming Frog, Ahrefs y Google Search Console para maximizar ROI y mejorar rankings orgánicos.
            </p>
          </SeoContainer>
        </div>

            <Img2 data-aos="fade-left" src={theme === "light" ? lat : latw} style={{ width: '10%' }} alt='seo-img' />
          
        
       <StyledDiv>
          <ServiceCard currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
            <ServiceImage src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="SEO Analytics" />
            <ServiceContent>
              <ServiceTitle currentColor={currentColor}>
                <FaSearch /> Auditoría SEO Completa
              </ServiceTitle>
              <ServiceList>
                <ServiceItem currentColor={currentColor}>Análisis técnico (rendimiento, indexabilidad, estructura)</ServiceItem>
                <ServiceItem currentColor={currentColor}>Revisión de contenido y estrategia de palabras clave</ServiceItem>
                <ServiceItem currentColor={currentColor}>Optimización de metaetiquetas y schema markup</ServiceItem>
                <ServiceItem currentColor={currentColor}>Diagnóstico de Core Web Vitals (LCP, FID, CLS)</ServiceItem>
                <ServiceItem currentColor={currentColor}>Reporte detallado con acciones prioritarias</ServiceItem>
              </ServiceList>
            </ServiceContent>
          </ServiceCard>


            <Img2 data-aos="fade-left" src={theme === "light" ? lat : latw} style={{ width: '10%' }} alt='seo-img' />

          <ServiceCard currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
            <ServiceImage src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Mobile Optimization" />
            <ServiceContent>
              <ServiceTitle currentColor={currentColor}>
                <FaMobileAlt /> Optimización Móvil
              </ServiceTitle>
              <ServiceList>
                <ServiceItem currentColor={currentColor}>Mejora de Largest Contentful Paint (LCP) para móviles</ServiceItem>
                <ServiceItem currentColor={currentColor}>Diseño responsive y experiencia de usuario</ServiceItem>
                <ServiceItem currentColor={currentColor}>Reducción de Cumulative Layout Shift (CLS)</ServiceItem>
                <ServiceItem currentColor={currentColor}>Optimización de First Input Delay (FID)</ServiceItem>
                <ServiceItem currentColor={currentColor}>Pruebas en dispositivos reales</ServiceItem>
              </ServiceList>
            </ServiceContent>
          </ServiceCard>

            <Img2 data-aos="fade-left" src={theme === "light" ? lat : latw} style={{ width: '10%' }} alt='seo-img' />
        
          <ServiceCard currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
            <ServiceImage src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Conversion Strategy" />
            <ServiceContent>
              <ServiceTitle currentColor={currentColor}>
                <FaChartLine /> Estrategia de Conversión
              </ServiceTitle>
              <ServiceList>
                <ServiceItem currentColor={currentColor}>Diseño y optimización de CTAs efectivos</ServiceItem>
                <ServiceItem currentColor={currentColor}>Pruebas A/B para maximizar conversiones</ServiceItem>
                <ServiceItem currentColor={currentColor}>Análisis de funnel y puntos de fricción</ServiceItem>
                <ServiceItem currentColor={currentColor}>Segmentación de audiencia</ServiceItem>
                <ServiceItem currentColor={currentColor}>Integración con herramientas de analítica</ServiceItem>
              </ServiceList>
            </ServiceContent>
          </ServiceCard>

          <ResultsSection currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
            <ResultsTitle currentColor={currentColor}>
              Resultados que puedes esperar
            </ResultsTitle>
            <ResultsGrid>
              <ResultCard currentColor={currentColor}>
                <FaSearch size={24} />
                <h3>Visibilidad</h3>
                <ResultValue currentColor={currentColor}>+50%</ResultValue>
                <p>Tráfico orgánico en 3 meses</p>
              </ResultCard>

              <ResultCard currentColor={currentColor}>
                <FaThumbsUp size={24} />
                <h3>Conversiones</h3>
                <ResultValue currentColor={currentColor}>+15-25%</ResultValue>
                <p>Mejora en tasa de conversión</p>
              </ResultCard>

              <ResultCard currentColor={currentColor}>
                <FaLightbulb size={24} />
                <h3>Performance</h3>
                <ResultValue currentColor={currentColor}>90+</ResultValue>
                <p>Puntuación Lighthouse</p>
              </ResultCard>

              <ResultCard currentColor={currentColor}>
                <FaTrophy size={24} />
                <h3>Ranking</h3>
                <ResultValue currentColor={currentColor}>Top 3</ResultValue>
                <p>Posiciones en Google</p>
              </ResultCard>

              <ResultCard currentColor={currentColor}>
                <FaChartLine size={24} />
                <h3>ROI</h3>
                <ResultValue currentColor={currentColor}>300%</ResultValue>
                <p>Retorno de inversión</p>
              </ResultCard>
            </ResultsGrid>
          </ResultsSection>

          <div style={{ textAlign: 'center', margin: '3rem 0' }}>
            <Banner />
          </div>
        </StyledDiv>
        
        <CalendlyBadge />
      </Content>
    </>
  );
};

SeoPage.propTypes = {
  currentColor: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
};

export default SeoPage;