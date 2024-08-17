// src/Components/Foot.js

import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import lat from '../../src/assets/lat.png';
import latw from '../../src/assets/latw.png'


const shine = keyframes`
  0% {
    font-size: 1rem;
  }
  15% {
    font-size: 1rem;
  }
  30% {
    font-size: 1.3rem;
  }
  45% {
    font-size: 1.3rem;
  }
  60% {
    font-size: 1 rem;
  }
  100% {
    font-size: 1rem;
  }`

const Corazon = styled.p`
animation: ${shine} 1s infinite;
cursor: pointer;
text-align: center;
justify-content: center;
align-self: center

` 


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


function scrollY(e) {
  e.preventDefault();
  window.scroll(0, 0);
}

const Foot = ({ currentColor }) => {
  return (
    <Footer currentColor={currentColor}>
      <p>© 2024 Todos los derechos reservados</p>
      <div>
<p width="100px" style={{fontSize: "small", margin: "10%"}}> Todos los derechos reservados | 2024 <br /> 
<a href="https://github.com/Aricoins/portfolio" 
style={{fontSize: "x-small"}}> Repositorio Open Source </a> </p>
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
      <Corazon onClick={scrollY} > ❤️ </Corazon> 
      <img src={theme === "light" ? lat : latw} style={{width: "80px"}}/>
       <p> desarollo con latidos </p>
    </Footer>
  );
};


export default Foot;
