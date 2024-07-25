// src/Components/Foot.js

import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = styled.footer`
  background-color: ${({ currentColor }) => currentColor.primero};
  color: ${({ currentColor }) => currentColor.cuarto};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  width: 90%;
  margin: auto;
  border-top: ${({ currentColor }) => `2px solid ${currentColor.quinto}`};
  `;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
`;

const Foot = ({ currentColor }) => {
  return (
    <Footer currentColor={currentColor}>
      <p>© 2024 Todos los derechos reservados</p>
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
    </Footer>
  );
};

export default Foot;
