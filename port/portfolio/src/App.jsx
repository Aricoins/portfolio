import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import anime from 'animejs/lib/anime.es.js';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import Nav from './Components/Nav';
import Proyectos from './Components/Proyectos';
import About from './Components/about';
import Tecnologias from './Components/Teconologias';
import Foot from './Components/Foot.jsx';
import Contacto from "./Components/Contacto.jsx";
import Yo from './Components/Yo';
import yo from '../../portfolio/src/assets/yo.jpg';
import dev from '../src/assets/source.gif';

import { colores, coloresBlack } from './Components/colores';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
  
  @media (max-width: 600px) {
    width: auto;
    margin: auto;
  }
`;

const Img2 = styled.img`
  height: 100%;
  z-index: 0;
  margin: 2%;
  width: 50vh;


  &:hover {
    color: red;
  }

  @media (max-width: 900px) {
    width: 95%;
    margin: auto;
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
  margin: auto;
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledDiv2 = styled.div`
  width: 100%;
  z-index: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 25%;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
background-color: ${colores.azul};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

function App() {
  // Define el estado del tema (claro por defecto)
  const [theme, setTheme] = useState('light');

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Selecciona los colores según el estado del tema
  const currentColor = theme === 'light' ? colores : coloresBlack;

  useEffect(() => {
    AOS.init();
    anime({
      targets: '.anim',
      loop: true,
      easing: 'linear',
      duration: 10000,
      direction: 'alternate',
      translateX: [{ value: -400, duration: 20000, delay: 0 }],
      translateY: [{ value: 400, duration: 10000, delay: 0 }, { value: 2000, duration: 10000, delay: 0 }],
      scale: [{ value: 0.2, easing: 'easeOutSine', duration: 20000 }, { value: 1, duration: 10000 }],
    });

    anime({
      targets: '.anim5',
      loop: true,
      easing: 'linear',
      duration: 10000,
      direction: 'alternate',
      translateX: [{ value: -400, duration: 10000, delay: 0 }],
      translateY: [{ value: 400, duration: 10000, delay: 0 }],
      scale: [{ value: 0.2, easing: 'easeOutSine', duration: 500 }, { value: 0.5, easing: 'easeInOutQuad', duration: 1200 }],
    });
  }, []);

  return (
    <>   <button onClick={()=> toggleTheme()} style={{position: "fixed", zIndex: "10000", marginTop: "10%"}}> {currentColor === colores ? <FaSun /> : <FaMoon />}  </button>
      <Router>
        <Nav currentColor={currentColor} toggleTheme={toggleTheme} style={{ width: '90%', margin: 'auto' }} />
        <Content style={{ backgroundColor: currentColor.primero }}>
          <StyledDiv2 style={{ backgroundColor: currentColor.azul }}>
            <Yo currentColor={currentColor} />
            <Div>
              <Img2 data-aos="fade-up" src={dev} style={{ width: '50%' }} alt='devimg' />
              <About currentColor={currentColor} />
            </Div>
          </StyledDiv2>

          <StyledDiv>
            <h2 style={{ fontSize: '20px', zIndex: -1, backgroundColor: 'white', width: '100%', height: '100%', zIndex: 2, margin: '0%', textAlign: 'center' }}>
              Proyectos
            </h2>
            <Proyectos currentColor={currentColor} />
          </StyledDiv>

          <StyledDiv>
            <h2 style={{ fontSize: '20px', zIndex: -1, backgroundColor: 'white', width: '100%', height: '100%', zIndex: 2, margin: '0%', textAlign: 'center' }}>
              Habilidades
            </h2>
            <Tecnologias currentColor={currentColor} />
          </StyledDiv>

          <StyledDiv>
            <h2 style={{ fontSize: '20px', zIndex: -1, backgroundColor: 'white', width: '100%', height: '100%', zIndex: 2, margin: '0%', textAlign: 'center' }}>
              Contacto
            </h2>
            <Contacto currentColor={currentColor} />
          </StyledDiv>

          <StyledDiv>
            <Foot currentColor={currentColor} />
          </StyledDiv>
        </Content>
      </Router>
    </>
  );
}

export default App;
