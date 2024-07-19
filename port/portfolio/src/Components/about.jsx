import { useEffect } from "react";
import styled from "styled-components";
import { colores } from "./colores";
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css';

const Contenedor = styled.div`
  width: auto;
  height: auto;
  padding: 2%;
  text-align: center;
  display: flex;
  margin: auto;
  margin-bottom: 1%;
  margin-top: 10%;
  flex-direction: row;
  font-family: 'Audiowave-Regular';
  z-index: -100;
  color: black;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 90%;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 90%;
  }
`;

const Bloque = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1em;
  height: 90%;
  align-self: center;
  align-items: center;
  align-content: center;
  margin: auto;
  z-index: -10;
  padding: 10%;
  @media only screen and (max-width: 600px) {
    width: 80%;
    flex-direction: column;
  }
`;

const H2 = styled.h2`
  font-size: 40px;
  margin: 0;
  &:hover {
  }
`;

const Estilo = styled.span`
color: ${props => props.currentColor.segundo};
  z-index: 1000;
  height: 150px;
  background-color: ${props => props.currentColor.cuarto};
  font-family: 'Roboto', sans-serif;
  opacity: 1;
  width: 95%;
  text-align: justify;
  margin-top: 3%;
  padding: 5%;
  z-index: 0;
  font-size: large;
padding: 10px; 
text-align: center;
  color: ${props => props.currentColor.primero};

  @media only screen and (max-width: 600px) {
    width: 80%;
    flex-direction: column;
    font-size: small;
  }


  .highlight-tech {
    color: ${props => props.currentColor.primero};
    background: linear-gradient(45deg, "white", "black");
    -webkit-background-clip: text;
    -webkit-text-fill-color: $current;
    animation:shine 7s linear infinite ;
    font-family: 'Audiowide'
  }
  
  @keyframes shine {
    0% {
      font-size: 1rem;
    }
    15% {
      font-size: 6rem;
    }
    30% {
      font-size: 6rem;
    }
    45% {
      font-size: 1rem;
    }
    60% {
      font-size: 1rem;
      color: ${props => props.currentColor.quinto};
    }
    100% {
      font-size: 1rem;
      color: ${props => props.currentColor.quinto};

    }
  `;


function About({ currentColor, theme }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const Img2 = styled.img`
  width: 30px;
  
  &:hover {
    color: red;
  }

  @media (max-width: 900px) {
     }
`;


  return (
    <>
      <Estilo currentColor={currentColor} data-aos="fade-left">
      
      <span className="highlight-tech" > Latitud42 </span> <br />
<div >
  
      evoca la idea de estar en un punto estratégico para desarrollar soluciones tecnológicas avanzadas. <br/>
      Ofrecemos software y aplicaciones web para emprendimientos y emprendedores de la Comarca Andina. </div>    </Estilo>
      </>
  );
}

export default About;
