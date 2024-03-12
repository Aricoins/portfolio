import React from 'react';
import styled from 'styled-components';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

import colores from './colores';
import favicon from '../assets/descarga.png';
import talent from '../assets/image.png';

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
    font-size: 5vh;
    padding: 5%;
    justify-content: center;
    cursor: pointer;
    transition: 1s;

    @media (max-width: 700px) {
      font-size: 3em;
      justify-content: start;
    }
  }
`;

const Img = styled.img`
  border-radius: 50%;
  margin: auto;

  @media (max-width: 600px) {
    width: 80px;
  }
`;

const Img2 = styled.img`
  width: 160px;
  margin: 30%;

  @media (max-width: 900px) {
    width: 80px;
    margin-right: 0;
  }

  @media (max-width: 600px) {
    width: 60px;
    margin-left: 10px;
  }
`;

const Ancla = styled.a`
  text-decoration: none;
  color: ${colores.marron};
  display: flex;
  border-radius: 8%;
  transition-duration: 0.3s;

  :hover {
    opacity: 0.8;
    transition: 0.3s;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 80px;
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
  }
`;

const Piso = styled.div`
  background-color: rgba(255, 0, 0, 0);
  width: 50%;
  display: flex;
  align-items: center;
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
     
       <Piso>
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
         <Img2
          src={talent}   
              alt="icono" />
              </a>
          </Ancla>
        </Piso>
        </Contenedor>
   
      <Span > © 2024 - Ariel G Rogel </Span>
   
    </>
  );
}
