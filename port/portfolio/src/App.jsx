import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import anime from 'animejs/lib/anime.es.js';
import { FaSun, FaMoon, FaWhatsapp } from 'react-icons/fa'; 
import Nav from './Components/Nav';
import Proyectos from './Components/Proyectos';
import About from './Components/about';
import Tecnologias from './Components/Teconologias';
import Foot from './Components/Foot';
import Contacto from './Components/Contacto';
import Yo from './Components/Yo';
import yo from '../../portfolio/src/assets/yo.jpg';
import dev from '../src/assets/source.gif';
import BannerAnimado from './Components/banner';
import lat from '../src/assets/lat.png';
import latw from '../src/assets/latw.png'
import  './App.css'
import Banner from './Components/banner';
import { colores, coloresBlack } from './Components/colores';
import Calendly from './Components/calendly.tsx';
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: audiowide-regular;
  
  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: "10%";
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

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const WhatsappButton = styled.a`
  position: fixed;
  bottom: 2%;
  right: 2%;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-decoration: none;

  &:hover {
    background-color: #128C7E;
  }
`;

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

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
    <>

<Router> 


      <button onClick={toggleTheme} style={{position: "fixed", zIndex: "10000", bottom: "18%", right: "2%", border: "black 1px solid"}}>
        {currentColor === colores ?  <FaMoon /> : <FaSun />}  
      </button>
     
      <div>
      <Nav currentColor={currentColor} toggleTheme={toggleTheme} style={{ width: '50%', margin: 'auto' }} />
      </div>

      <div style={{display: "flex", flexDirection: "row", backgroundColor: currentColor.cuarto, margin: "auto", padding: "4%", marginTop: "3%"}}>
 
        <Img2 data-aos="fade-up"  
        src={theme === "light" ? latw : lat} 

        style={{ width: '30%', margin: "auto"}} alt='devimg' />
             <About currentColor={currentColor} theme={theme} />
       </div>
     
        <Content style={{ backgroundColor: currentColor.primero }}>
       
            <Div>
              <Img2 data-aos="fade-up"  src={theme === "light" ? lat : latw} style={{ width: '30%' }} alt='devimg' />
         
            </Div>
              <StyledDiv>
            <h2 style={{ fontSize: '20px', fontFamily: " audiowide", zIndex: -1, backgroundColor: 'white', width: '100%', height: '100%', zIndex: 2, margin: '0%', textAlign: 'center' }}>
              Proyectos
            </h2>
            <Proyectos currentColor={currentColor} />
          </StyledDiv>
          <Div>
              <Img2 data-aos="fade-up"  src={theme === "light" ? lat : latw} style={{ width: '30%' }} alt='devimg' />
         
            </Div>
          <StyledDiv>
            <h2 style={{ fontFamily: "audiowide", fontSize: '20px', zIndex: -1, backgroundColor: 'white', width: '100%', height: '100%', zIndex: 2, margin: '0%', textAlign: 'center' }}>
              Tecnologías
            </h2>
            <Tecnologias currentColor={currentColor} />
          </StyledDiv>
          <Div>
              <Img2 data-aos="fade-up"  src={theme === "light" ? lat : latw} style={{ width: '30%' }} alt='devimg' />
         
            </Div>
      


          <StyledDiv>
   
         
            <h2 style={{ fontFamily: "audiowide", fontSize: '20px', zIndex: -1, backgroundColor: 'white', width: '100%', height: '100%', zIndex: 2, margin: '0%', textAlign: 'center' }}>
              Contacto
            </h2>
            <div style={{margin: "5%"}}>
            <Banner currentColor={currentColor} />
            </div>
            <Contacto currentColor={currentColor} />
          </StyledDiv>
  
          <StyledDiv>
            <Foot currentColor={currentColor} />
          </StyledDiv>
           <button onClick={()=> toggleTheme()} style={{position: "fixed", zIndex: "10000", marginBottom: "10%"}}> {currentColor === colores ? <FaSun /> : <FaMoon />}  </button>
   <div style= {{margin: "10%"}}>  <Calendly />
    </div>
        </Content>
  
        <WhatsappButton href="https://wa.me/+5492945907975" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </WhatsappButton>
 

</Router>      
    </>
  );
}

export default App;
