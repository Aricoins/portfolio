import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { 
  FaShieldAlt, 
  FaLock, 
  FaEye, 
  FaBug, 
  FaCloud, 
  FaUserSecret, 
  FaNetworkWired, 
  FaDatabase,
  FaMobile,
  FaDesktop,
  FaServer,
  FaCode,
  FaChartLine,
  FaExclamationTriangle,
  FaCheckCircle
} from 'react-icons/fa';
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

const CyberContainer = styled.div`
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
  border-radius: 15px;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  border: 2px solid ${props => props.currentColor.segundo};
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.25);
    border-color: ${props => props.currentColor.quinto};
  }
  
  @media (max-width: 900px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
  }
`;

const ServiceTitle = styled.h3`
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: audiowide;
  font-weight: 700;
  text-shadow: ${props => props.currentColor.segundo === "#4B4B4B" ? "2px 2px 4px rgba(0,0,0,0.7)" : "1px 1px 2px rgba(0,0,0,0.1)"};
  
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`;

const TechItem = styled.div`
  background: ${props => props.currentColor.primero};
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid ${props => props.currentColor.segundo};
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.2s ease;
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
  font-weight: 600;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  }
`;

const TechIcon = styled.div`
  font-size: 1.2rem;
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
`;

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ServiceFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 0;
  line-height: 1.6;
  text-shadow: ${props => props.currentColor.segundo === "#4B4B4B" ? "1px 1px 2px rgba(0,0,0,0.5)" : "none"};

  &:before {
    content: "✓";
    color: #4CAF50;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  @media (max-width: 900px) {
    font-size: 0.9rem;
    padding: 0.6rem 0;
  }
`;

const ThreatSection = styled.div`
  background: linear-gradient(135deg, #ff4444, #cc0000);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  color: white;
  text-align: center;
  
  @media (max-width: 900px) {
    padding: 1.5rem;
    margin: 1rem 0;
  }
`;

const ThreatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ThreatItem = styled.div`
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const StatsSection = styled.div`
  background: ${props => props.currentColor.cuarto};
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  
  @media (max-width: 900px) {
    padding: 1rem;
    margin: 1rem 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatCard = styled.div`
  background: ${props => props.currentColor.primero};
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
  font-weight: 600;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
  margin: 0.5rem 0;
  font-family: audiowide;
  text-shadow: ${props => props.currentColor.segundo === "#4B4B4B" ? "2px 2px 4px rgba(0,0,0,0.7)" : "none"};
`;

const MethodologySection = styled.div`
  background: ${props => props.currentColor.tercero};
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  
  @media (max-width: 900px) {
    padding: 1rem;
    margin: 1rem 0;
  }
`;

const MethodologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const MethodologyCard = styled.div`
  background: ${props => props.currentColor.primero};
  padding: 1.5rem;
  border-radius: 10px;
  border-top: 4px solid ${props => props.currentColor.segundo};
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
  font-weight: 600;
`;

const PricingSection = styled.div`
  background: ${props => props.currentColor.cuarto};
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  
  @media (max-width: 900px) {
    padding: 1rem;
    margin: 1rem 0;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PricingCard = styled.div`
  background: ${props => props.currentColor.primero};
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  position: relative;
  border: 2px solid ${props => props.featured ? props.currentColor.segundo : 'transparent'};
  transform: ${props => props.featured ? 'scale(1.05)' : 'scale(1)'};
  color: ${props => props.currentColor.segundo === "#4B4B4B" ? "#FFFFFF" : props.currentColor.segundo};
  font-weight: 600;
  
  ${props => props.featured && `
    &:before {
      content: "MÁS POPULAR";
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      background: ${props.currentColor.segundo};
      color: ${props.currentColor.primero};
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
    }
  `}
`;

const CiberseguridadPage = ({ currentColor, theme }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cybersecurityThreats = [
    { icon: <FaBug />, name: "Malware & Ransomware", severity: "Critical" },
    { icon: <FaUserSecret />, name: "Phishing & Social Engineering", severity: "High" },
    { icon: <FaNetworkWired />, name: "Ataques DDoS", severity: "High" },
    { icon: <FaDatabase />, name: "Violaciones de Datos", severity: "Critical" },
    { icon: <FaLock />, name: "Vulnerabilidades Zero-Day", severity: "Critical" },
    { icon: <FaCloud />, name: "Ataques Cloud", severity: "High" }
  ];

  const technologies = [
    { category: "Análisis de Vulnerabilidades", tools: [
      { name: "Nessus Professional", icon: <FaShieldAlt /> },
      { name: "OpenVAS", icon: <FaEye /> },
      { name: "Qualys VMDR", icon: <FaServer /> },
      { name: "Rapid7 Nexpose", icon: <FaNetworkWired /> }
    ]},
    { category: "Pentesting", tools: [
      { name: "Metasploit Framework", icon: <FaBug /> },
      { name: "Burp Suite Professional", icon: <FaCode /> },
      { name: "OWASP ZAP", icon: <FaDesktop /> },
      { name: "Cobalt Strike", icon: <FaUserSecret /> }
    ]},
    { category: "Análisis de Código", tools: [
      { name: "SonarQube", icon: <FaCode /> },
      { name: "Checkmarx", icon: <FaEye /> },
      { name: "Veracode", icon: <FaShieldAlt /> },
      { name: "Fortify Static", icon: <FaLock /> }
    ]},
    { category: "Seguridad Cloud", tools: [
      { name: "AWS Security Hub", icon: <FaCloud /> },
      { name: "Azure Security Center", icon: <FaCloud /> },
      { name: "Google Cloud Security", icon: <FaCloud /> },
      { name: "Prisma Cloud", icon: <FaShieldAlt /> }
    ]},
    { category: "Monitoreo y SIEM", tools: [
      { name: "Splunk Enterprise", icon: <FaChartLine /> },
      { name: "IBM QRadar", icon: <FaEye /> },
      { name: "Microsoft Sentinel", icon: <FaServer /> },
      { name: "LogRhythm", icon: <FaDatabase /> }
    ]},
    { category: "Seguridad Móvil", tools: [
      { name: "MobSF", icon: <FaMobile /> },
      { name: "Lookout", icon: <FaEye /> },
      { name: "Zimperium", icon: <FaShieldAlt /> },
      { name: "NowSecure", icon: <FaLock /> }
    ]}
  ];

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
            alt='cyber-img' 
          />
           
          <CyberContainer>
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
              Servicios Avanzados de Ciberseguridad
            </h1>

            <p style={{ 
              textAlign: 'center',
              fontSize: '1.2rem',
              marginBottom: '3rem',
              color: currentColor.segundo
            }}>
              Protección integral contra amenazas cibernéticas con tecnologías de vanguardia
            </p>
          </CyberContainer>
        </div>
   <video
          src="https://res.cloudinary.com/dx0htqhaq/video/upload/v1742692289/gmvxffwy94p0mljpvvmp.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', maxWidth: '640px', height: 'auto' }}
        />
        <StyledDiv>
          {/* Sección de Amenazas Actuales */}
          <ThreatSection data-aos="fade-up" data-aos-duration="300">
            <h2 style={{ fontFamily: "audiowide", fontSize: '1.8rem', marginBottom: '1rem' }}>
              <FaExclamationTriangle /> Amenazas Cibernéticas Actuales
            </h2>
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
              El panorama de amenazas evoluciona constantemente. Protege tu organización contra los vectores de ataque más críticos.
            </p>
            <ThreatGrid>
              {cybersecurityThreats.map((threat, index) => (
                <ThreatItem key={index}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    {threat.icon}
                  </div>
                  <h4>{threat.name}</h4>
                  <span style={{ 
                    background: threat.severity === 'Critical' ? '#ff1744' : '#ff9800',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    {threat.severity}
                  </span>
                </ThreatItem>
              ))}
            </ThreatGrid>
          </ThreatSection>

          <Div>
            <Img2 data-aos="fade-up" src={theme === "light" ? lat : latw} style={{ width: '30%' }} alt='cyber-img' />
          </Div>

          {/* Servicios de Auditoría */}
          <ServiceCard currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
            <ServiceTitle currentColor={currentColor}>
              <FaShieldAlt /> Auditoría de Seguridad Integral
            </ServiceTitle>
            <ServiceList>
              <ServiceFeature currentColor={currentColor}>
                Análisis de vulnerabilidades con Nessus, OpenVAS y Qualys
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Evaluación de cumplimiento (ISO 27001, NIST, PCI-DSS)
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Revisión de arquitectura de seguridad
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Auditoría de configuraciones y hardening
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Evaluación de políticas y procedimientos
              </ServiceFeature>
            </ServiceList>
          </ServiceCard>

          <Div>
            <Img2 data-aos="fade-up" src={theme === "light" ? latw : lat} style={{ width: '30%' }} alt='cyber-img' />
          </Div>

          {/* Pentesting */}
          <ServiceCard currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
            <ServiceTitle currentColor={currentColor}>
              <FaBug /> Pentesting y Red Team
            </ServiceTitle>
            <ServiceList>
              <ServiceFeature currentColor={currentColor}>
                Pentesting de aplicaciones web con Burp Suite y OWASP ZAP
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Pruebas de infraestructura con Metasploit y Cobalt Strike
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Análisis de código fuente (SAST) con SonarQube y Checkmarx
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Ingeniería social y phishing controlado
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Purple team exercises y simulacros de incidentes
              </ServiceFeature>
            </ServiceList>
          </ServiceCard>

          <Div>
            <Img2 data-aos="fade-up" src={theme === "light" ? lat : latw} style={{ width: '30%' }} alt='cyber-img' />
          </Div>

          {/* Seguridad Cloud */}
          <ServiceCard currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
            <ServiceTitle currentColor={currentColor}>
              <FaCloud /> Seguridad en la Nube
            </ServiceTitle>
            <ServiceList>
              <ServiceFeature currentColor={currentColor}>
                Auditoría de AWS, Azure y Google Cloud Platform
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Configuración de CSPM (Cloud Security Posture Management)
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Implementación de SIEM en la nube con Splunk y Sentinel
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Container security con Docker y Kubernetes
              </ServiceFeature>
              <ServiceFeature currentColor={currentColor}>
                Zero Trust Architecture implementation
              </ServiceFeature>
            </ServiceList>
          </ServiceCard>

          {/* Tecnologías Utilizadas */}
          <MethodologySection currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
            <h2 style={{ 
              color: currentColor.segundo, 
              textAlign: 'center', 
              marginBottom: '1.5rem',
              fontFamily: "audiowide",
              fontSize: '20px'
            }}>
              <FaCode /> Stack Tecnológico Enterprise
            </h2>
            <MethodologyGrid>
              {technologies.map((category, index) => (
                <MethodologyCard key={index} currentColor={currentColor}>
                  <h4 style={{ marginBottom: '1rem', color: currentColor.segundo }}>
                    {category.category}
                  </h4>
                  {category.tools.map((tool, toolIndex) => (
                    <TechItem key={toolIndex} currentColor={currentColor}>
                      <TechIcon currentColor={currentColor}>{tool.icon}</TechIcon>
                      <span>{tool.name}</span>
                    </TechItem>
                  ))}
                </MethodologyCard>
              ))}
            </MethodologyGrid>
          </MethodologySection>

          {/* Estadísticas */}
          <StatsSection currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
            <h2 style={{ 
              color: currentColor.segundo, 
              textAlign: 'center', 
              marginBottom: '1.5rem',
              fontFamily: "audiowide",
              fontSize: '20px'
            }}>
              Impacto de Nuestros Servicios
            </h2>
            <StatsGrid>
              <StatCard currentColor={currentColor}>
                <FaShieldAlt size={24} />
                <h3>Reducción de Riesgo</h3>
                <StatValue currentColor={currentColor}>85%</StatValue>
                <p>Vulnerabilidades críticas mitigadas</p>
              </StatCard>

              <StatCard currentColor={currentColor}>
                <FaEye size={24} />
                <h3>Detección Temprana</h3>
                <StatValue currentColor={currentColor}>99.2%</StatValue>
                <p>Precisión en detección de amenazas</p>
              </StatCard>

              <StatCard currentColor={currentColor}>
                <FaChartLine size={24} />
                <h3>Tiempo de Respuesta</h3>
                <StatValue currentColor={currentColor}>{"< 30min"}</StatValue>
                <p>Respuesta a incidentes críticos</p>
              </StatCard>

              <StatCard currentColor={currentColor}>
                <FaCheckCircle size={24} />
                <h3>Cumplimiento</h3>
                <StatValue currentColor={currentColor}>100%</StatValue>
                <p>Certificaciones conseguidas</p>
              </StatCard>
            </StatsGrid>
          </StatsSection>

          {/* Precios */}
          <PricingSection currentColor={currentColor} data-aos="fade-up" data-aos-duration="300">
            <h2 style={{ 
              color: currentColor.segundo, 
              textAlign: 'center', 
              marginBottom: '1.5rem',
              fontFamily: "audiowide",
              fontSize: '20px'
            }}>
              Planes de Ciberseguridad
            </h2>
            <PricingGrid>
              <PricingCard currentColor={currentColor}>
                <h3>Auditoría Básica</h3>
                <StatValue currentColor={currentColor}>$2,500</StatValue>
                <p style={{ marginBottom: '1rem' }}>Evaluación inicial</p>
                <ServiceList>
                  <ServiceFeature currentColor={currentColor}>Scan de vulnerabilidades</ServiceFeature>
                  <ServiceFeature currentColor={currentColor}>Reporte ejecutivo</ServiceFeature>
                  <ServiceFeature currentColor={currentColor}>Plan de remediación</ServiceFeature>
                </ServiceList>
              </PricingCard>

              <PricingCard currentColor={currentColor} featured>
                <h3>Pentesting Completo</h3>
                <StatValue currentColor={currentColor}>$8,500</StatValue>
                <p style={{ marginBottom: '1rem' }}>Evaluación integral</p>
                <ServiceList>
                  <ServiceFeature currentColor={currentColor}>Pentesting web y red</ServiceFeature>
                  <ServiceFeature currentColor={currentColor}>Análisis de código</ServiceFeature>
                  <ServiceFeature currentColor={currentColor}>Social engineering</ServiceFeature>
                  <ServiceFeature currentColor={currentColor}>Reporte detallado</ServiceFeature>
                  <ServiceFeature currentColor={currentColor}>Re-testing incluido</ServiceFeature>
                </ServiceList>
              </PricingCard>

              <PricingCard currentColor={currentColor}>
                <h3>Programa Anual</h3>
                <StatValue currentColor={currentColor}>$25,000</StatValue>
                <p style={{ marginBottom: '1rem' }}>Protección continua</p>
                <ServiceList>
                  <ServiceFeature currentColor={currentColor}>Monitoreo 24/7</ServiceFeature>
                  <ServiceFeature currentColor={currentColor}>Pentesting trimestral</ServiceFeature>
                  <ServiceFeature currentColor={currentColor}>Respuesta a incidentes</ServiceFeature>
                  <ServiceFeature currentColor={currentColor}>Compliance management</ServiceFeature>
                  <ServiceFeature currentColor={currentColor}>Training del equipo</ServiceFeature>
                </ServiceList>
              </PricingCard>
            </PricingGrid>
          </PricingSection>

          <div style={{ textAlign: 'center', margin: '3rem 0' }}>
            <Banner />
          </div>
        </StyledDiv>
      </Content>
    </>
  );
};
CiberseguridadPage.propTypes = {
  currentColor: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
};

CiberseguridadPage.propTypes = {
  currentColor: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
};

export default CiberseguridadPage;
