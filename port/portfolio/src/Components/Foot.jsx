import React from 'react';
import styled from 'styled-components';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {colores} from './colores';
import favicon from '../assets/descarga.png';
import talent from '../assets/image.png';

const Contenedor = styled.footer`
  width: 100%;
  border-radius: 5%;
  background-color: ${props => props.currentColor.primero};
   border: 2px ;
  margin: 2%;
  margin-top: 8%;
  display: flex;
  flex-direction: row;
  justify-content: center;
display: grid;
  grid-template-columns: repeat(12, 6fr);
  .icono {

    font-size: 6rem;
    padding-right: 3%;
    padding-left: 3% ;
    justify-content: center;
    cursor: pointer;
    transition: 1s;
    margin-left: 10%;

   
    @media (max-width: 700px) {
      font-size: 3em;
      justify-content: start;
    }
  }
`;

// const Img = styled.img`
//   border-radius: 50%;
//   margin: auto;
//   width: 20%;
  

//   @media (max-width: 600px) {
//     width: 80px;
//   }
// `;

// const Img2 = styled.img`
//  background-color: rgb(0, 0, 0, 0.6);
//  padding: 2%;
//  border-radius: 5px;
//   width: 180px;
//   margin-left: 30%;
//   text-shadow: 5px 2px 10px 5px rgba(0, 0, 0, 0.8);
// box-shadow: 1px 2px 3px 5px  rgba(0, 0, 0, 0);
//   @media (max-width: 900px) {
//     width: 80px;
//     margin-right: 0;
//   }

//   @media (max-width: 600px) {
//     width: 60px;
//     margin-left: 10px;
//   }
// `;

// const Ancla = styled.a`
//   text-decoration: none;
//   color: ${colores.marron};
//   display: flex;
//   border-radius: 8%;
//   transition-duration: 0.3s;

//   :hover {
//     opacity: 0.8;
//     transition: 0.3s;
//     cursor: pointer;
//   }

//   @media (max-width: 600px) {
//     width: 80px;
//   }
// `;

// const Span = styled.span`
//   color: white;
//   font-size: small;

//   @media (max-width: 600px) {
//     transform: rotate(0deg);
//     font-size: x-small;
//   }
// `;

// const Piso = styled.div`
//   background-color: rgba(255, 0, 0, 0);
//   width: 50%;
//   display: flex;
//   align-items: center;
//   height: auto;
// `;
 export default function Foot(currentColor) {

//   const scrollO = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }
  return (
    <>
    <Contenedor>
      
    
    <div>
            <Span > © 2024 - Ariel G Rogel </Span>
      </div>
      <div>
            <Span > © 2024 - Ariel G Rogel </Span>
      </div>
      <div>
            <Span > © 2024 - Ariel G Rogel </Span>
      </div><div>
    
      <Span > © 2024 - Ariel G Rogel </Span>
      </div><div>
      
      <Span > © 2024 - Ariel G Rogel </Span>
      </div>
      <div>
            <Span > © 2024 - Ariel G Rogel </Span>
      </div>
      
      
       </Contenedor>
            </>
  );
}

