import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaChartLine, FaSearch, FaMobileAlt, FaLightbulb, FaThumbsUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../Components/banner';
import lat from '../assets/lat.png';
import latw from '../assets/latw.png';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: audiowide-regular;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  
  @media (max-width: 600px) {
    width: auto;
    margin: auto;
  }
`;

const SeoContainer = styled.div`
  width: 100%;
  z-index: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: audiowide-regular;
  padding: 4%;
  
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  z-index: 0;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 900px) {
    flex-direction: column;
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
  background: ${props => props.currentColor.tercero};
  border-radius: 10px;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;

  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 900px) {
    padding: 1.5rem;
    margin-bottom: 1rem;
    max-width: 100%;
  }
`;

const ServiceTitle = styled.h3`
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
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
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6;
  text-shadow: ${props => props.currentColor.segundo === "#4B4B4B" ? "1px 1px 2px rgba(0,0,0,0.5)" : "none"};

  &:before {
    content: "•";
    color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
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
  background: ${props => props.currentColor.cuarto};
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem 0;
  
  @media (max-width: 900px) {
    padding: 1rem;
    margin: 1rem 0;
  }
`;

const ResultsTitle = styled.h2`
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: audiowide;
  font-size: 20px;
  font-weight: 700;
  text-shadow: ${props => props.currentColor.segundo === "#4B4B4B" ? "2px 2px 4px rgba(0,0,0,0.7)" : "none"};
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ResultCard = styled.div`
  background: ${props => props.currentColor.primero};
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  h3 {
    color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
    font-weight: 700;
    margin: 1rem 0;
    font-size: 1.2rem;
    text-shadow: ${props => props.currentColor.segundo === "#4B4B4B" ? "1px 1px 2px rgba(0,0,0,0.5)" : "none"};
  }
  
  p {
    color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#F0F0F0" : props.currentColor.segundo};
    font-weight: 600;
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

const ResultValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.currentColor.segundo};
  margin: 0.5rem 0;
  font-family: audiowide;
`;

const SeoPage = ({ currentColor, theme }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Content style={{ backgroundColor: currentColor.primero }}>
        <div style={{display: "flex", flexDirection: "row", backgroundColor: currentColor.cuarto, margin: "auto", padding: "4%", marginTop: "3%"}}>
          <Img2 
            data-aos="fade-right"  
            data-aos-duration="300"
            data-aos-offset="50"  
            src={theme === "light" ? latw : lat} 
            style={{ width: '30%', margin: "auto"}} 
            alt='seo-img' 
          />
          <SeoContainer>
            <h1 style={{ 
              color: currentColor.segundo, 
              textAlign: 'center',
              fontSize: '20px',
              fontFamily: "audiowide",
              marginBottom: '2rem',
              backgroundColor: 'white',
              width: '100%',
              height: '100%',
              zIndex: 2,
              margin: '0%'
            }}>
              Servicios Profesionales de SEO
            </h1>

            <p style={{ 
              textAlign: 'center',
              fontSize: '1.2rem',
              marginBottom: '3rem',
              color: currentColor.segundo
            }}>
              Optimización técnica y estratégica para aumentar tu visibilidad y conversiones
            </p>
          </SeoContainer>
        </div>

        <StyledDiv>
          <Div>
            <Img2 data-aos="fade-up" src={theme === "light" ? lat : latw} style={{ width: '30%' }} alt='seo-img' />
          </Div>

          <ServiceCard currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
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
          </ServiceCard>

          <Div>
            <Img2 data-aos="fade-up" src={theme === "light" ? latw : lat} style={{ width: '30%' }} alt='seo-img' />
          </Div>

          <ServiceCard currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
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
          </ServiceCard>

          <Div>
            <Img2 data-aos="fade-up" src={theme === "light" ? latw : lat} style={{ width: '30%' }} alt='seo-img' />
          </Div>

          <ServiceCard currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
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
            </ResultsGrid>
          </ResultsSection>

          <div style={{ textAlign: 'center', margin: '3rem 0' }}>
            <Banner />
          </div>
        </StyledDiv>
      </Content>
    </>
  );
};

SeoPage.propTypes = {
  currentColor: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
};

export default SeoPage;