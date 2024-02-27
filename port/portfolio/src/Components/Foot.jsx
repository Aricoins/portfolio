import React from 'react';
import styled from 'styled-components';
import colores from './colores';import { SiGithub, SiLinkedin } from "react-icons/si";
import favicon from '../assets/descarga.png'
import AOS from 'aos';
import "aos/dist/aos.css";
import talent from "../assets/image.png"

const Contenedor = styled.footer`
  width: 100%;
  border-radius: 5%;
  background-color: #003140;
  margin-top: 2%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .icono {	
    opacity: 0.8;
    padding: 0%;
    transition: 1s;
    font-size: 6em;
    padding: 10%;
    justify-content: flex-start;
    cursor: pointer;
}
  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  padding: 0%;
  margin: 0%;
  width: 80%;
  z-index: 100;
  @media (max-width: 600px) {
    width: 80px;
    align-self: center;
  }
`;

const Ancla = styled.a`
  text-decoration: none;
  color: ${colores.marron};
  display: flex;
  border-radius: 8%;
  transition-duration: 2s;

  :hover {
    opacity: 0.8;
    
    transition: 1s;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 80px;
    align-self: center;
  }
`;

const Span = styled.span`
  color: white;
  margin-top: 7%;
  margin-right: -5%;
  font-size: small;

  @media (max-width: 600px) {
    transform: rotate(0deg);
    font-size: x-small;
    align-self: center;
  }
`;

export default function Foot(props) {

  const scrollO = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <>
      <Contenedor>
     
        <div style={{ display: 'flex',  justifyContent: "center", alignItems: "center"  }}>
          <Ancla href="https://www.linkedin.com/in/aegr/">
          <SiLinkedin className='icono'/>
          </Ancla>
          
        <Img className='icono '  data-aos="flip-up" src={favicon} onClick= {scrollO} alt="icono" />
        <Ancla href="https://web.archive.org/web/20230202010104/https://creativecommons.org/licenses/by/4.0/">
         </Ancla>
          <Ancla href="https://github.com/Aricoins">
         <SiGithub className='icono'/> 

          </Ancla>
<Ancla>
<a href="https://www.talent.soyhenry.com/candidate/17489"> 
         <img style={{width: "50%", padding:"100%"}} 
              src={talent}   
              alt="icono" />
              </a>
          </Ancla>
        </div>
        </Contenedor>
   
      <Span > © 2024 - Ariel G Rogel </Span>
   
    </>
  );
}
