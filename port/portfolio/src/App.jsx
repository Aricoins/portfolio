import { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import Proyectos from './Components/Proyectos';
import About from './Components/about';
import colores from './Components/colores';
import Tecnologias from './Components/Teconologias';
import Foot from './Components/Foot';
import Contacto from "./Components/Contacto.jsx";
import gif from "../../portfolio/src/assets/source.gif";
import yo from "../../portfolio/src/assets/yo.jpg";

const Img2 = styled.img`
  width: 60%;
  height: 100%;
  z-index: -1;

  &:hover {
    color: red;
  }

  @media (max-width: 800px) {
    width: 90%;
    height: auto;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 1%;

  @media (max-width: 800px) {
    flex-direction: column;
      }
      
`;


const Bola = styled.img`
  width: 20%;
  position: absolute;
  z-index: 0;
  top: 1%;
  left: 50%;
`;

const Bola4 = styled.img`
  width: 1%;
  position: absolute;
  z-index: 1;
  top: 60%;
  left: 50%;
`;

const Bola5 = styled.img`
  width: 14%;
  position: absolute;
  z-index: -1;
  top: 2%;
  left: 50%;
`;

const Bola6 = styled.img`
  width: 12%;
  position: absolute;
  z-index: 0;
  top: 4%;
  left: 50%;
`;

const Bola7 = styled.img`
  width: 10%;
  position: absolute;
  z-index: -100;
  top: 8%;
  left: 50%;
`;

const H1 = styled.h1`
  font-size: 50px;
  width: 20%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${colores.azul};

  &:hover {
    grid-template: 1fr / 1fr var(--innerTrack, 0);
  }
`;

function App() {
  useEffect(() => {
    AOS.init();

    anime({
      targets: '.anim',
      loop: true,
      easing: 'linear',
      duration: 10000,
      direction: 'alternate',
      translateX: [{ value: -400, duration: 20000, delay: 0 }],
      translateY: [{ value: 1000, duration: 10000, delay: 0 },
        { value: 2000, duration: 10000, delay: 0 }],
      scale: [{ value: 0.2, easing: 'easeOutSine', duration: 20000 }, { value: 1, duration: 10000 }],
    });

    anime({
      targets: '.anim5',
      loop: true,
      easing: 'linear',
      duration: 10000,
      direction: 'alternate',
      translateX: [{ value: -400, duration: 10000, delay: 0 }],
      translateY: [{ value: 2000, duration: 10000, delay: 0 }],
      scale: [{ value: 0.2, easing: 'easeOutSine', duration: 500 }, { value: 0.5, easing: 'easeInOutQuad', duration: 1200 }],
    });

  }, []);

  return (
    <>
      <Router>
        <Bola className="anim" src="../src/assets/bolaspeed.gif" alt="gif" />
           <img data-aos="fade-up" style={{ width: "100%", marginTop: "3%", zIndex: "1000" }} src={yo} alt="head" />
        <Content>
          <Img2 className="anime" data-aos="fade-right" src={gif} alt="devimg" />
          <About />
        </Content>
        <h2 style={{ fontSize: "20px", backgroundColor: 'white' }}> Proyectos </h2>
        <Proyectos />
        <h2 style={{ fontSize: "20px", zIndex: -1, backgroundColor: 'white' }} data-aos="fade-left"> Habilidades </h2>
        <Tecnologias style={{ zIndex: 2 }} />
       <Bola5 className="anim5" src="../src/assets/bolaspeed.gif" alt="gif" />
        <h2 style={{ fontSize: "20px", zIndex: 2, backgroundColor: 'white' }} data-aos="fade-left"> Contacto </h2>
        <Contacto />
        <Foot />
      </Router>
    </>
  );
}

export default App;
