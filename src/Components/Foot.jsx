"use client"
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import PropTypes from 'prop-types';
import lat from '../../src/assets/lat.png';
import latw from '../../src/assets/latw.png';

const shine = keyframes`
  0%, 15%, 60%, 100% {
    font-size: 1rem;
  }
  30%, 45% {
    font-size: 1.1rem;
  }
`;

const scrollY = (e) => {
  e.preventDefault();
  window.scroll(0, 0);
};

const Foot = ({ currentColor, theme }) => {
  const Corazon = styled.p`
    animation: ${shine} 1s infinite;
    cursor: pointer;
    text-align: center;
    margin: 0;
  `;

  const Footer = styled.footer`
    background-color: ${({ currentColor }) => currentColor.primero};
    color: ${({ currentColor }) => currentColor.cuarto};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 100%;
    margin: auto;
    border-top: ${({ currentColor }) => `2px solid ${currentColor.quinto}`};
    position: relative;
    z-index: 0;
  `;

  const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  `;

  return (
    <Footer currentColor={currentColor}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <p style={{ margin: 0 }}>
          Todos los derechos reservados | 2025<br />
          <a href="https://github.com/Aricoins/portfolio" style={{ fontSize: 'small' }}>
            Repositorio Open Source
          </a>
        </p>
      </div>

      <SocialLinks>
        <a href="https://github.com/Aricoins" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/aegr/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://x.com/latitud42_tech" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
      </SocialLinks>
      <img src={theme === 'light' ? lat : latw} alt="Logo" style={{ width: '80px', marginTop: "10%" }} />
            <div style={{ textAlign: 'center', fontSize: "xx-small", margin: "0.5rem" }}>
        <p style={{ margin: 0 }}>Desarrollo con latidos</p>
      </div>
      <div style={{ position: 'absolute', bottom: '0.1rem', left: '50%', transform: 'translateX(-50%)', scale: 2 }}>
        <Corazon onClick={scrollY}>❤️</Corazon>
      </div>

     
    </Footer>
  );
};
Foot.propTypes = {
  currentColor: PropTypes.shape({
    primero: PropTypes.string.isRequired,
    cuarto: PropTypes.string.isRequired,
    quinto: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.string.isRequired,
};

export default Foot;