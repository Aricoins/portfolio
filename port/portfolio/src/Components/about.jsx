import { useEffect } from "react";
import styled from "styled-components";
import { colores } from "./colores";
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css';
import lat from '../assets/lat.png';
import latw from '../assets/latw.png'
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
  border-color: red;
  &:hover {
  }
`;

const Estilo = styled.span`
  color: ${props => props.currentColor.segundo};
  z-index: 1000;
  background-color: ${props => props.currentColor.cuarto};
  font-family: 'Audiowide';
  opacity: 1;
  width: 95%;
  text-align: justify;
  margin-top: 3%;
  padding: 5%;
  z-index: 0;
  font-size: x-large;
  color: ${props => props.currentColor.primero};

  @media only screen and (max-width: 600px) {
    width: 80%;
    flex-direction: column;
  }

  .highlight-latitud {
    color: ${colores.tercero};
    font-weight: bold;
    background: linear-gradient(45deg, ${colores.primero}, ${colores.segundo});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 5s ease-in-out infinite alternate;
  }

  .highlight-tech {
    color: ${colores.primero};
    background: linear-gradient(45deg, ${colores.primero}, ${colores.quinto});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation:shine 1s ease-in-out infinite alternate;
  }

  @keyframes shine {
    from {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
    to {
      text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.8), 1px 1px 10px rgba(0, 0, 0, 0.5);
    }
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
      
      {/* <Img2 data-aos="fade-down"  
        src={theme === "light" ? lat : latw} 

        style={{ width: '30%', margin: "auto"}} alt='devimg' /> */}
      <span className="highlight-tech"> Latitud42 </span> evoca la idea de estar en un punto estratégico para desarrollar soluciones tecnológicas avanzadas. <br/>
      Ofrecemos software y aplicaciones web para empresas, comercios, servicios y profesionales en la Comarca Andina.     </Estilo>
    </>
  );
}

export default About;
