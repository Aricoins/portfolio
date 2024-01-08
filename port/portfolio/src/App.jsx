import { useEffect, useState } from 'react'
import Proyectos from './Components/Proyectos'
import styled from 'styled-components'
import head from "../src/assets/head2.jpg"
import './App.css'
import imagen from "../src/assets/yo.png";
import  AOS  from 'aos'
import "aos/dist/aos.css"
import { BrowserRouter as Router } from 'react-router-dom';
import About from './Components/about'
import colores from './Components/colores'
import Tecnologias from './Components/Teconologias'
import Foot from './Components/Foot'
import Contacto from "./Components/Contacto.jsx"



const Img2 = styled.img`
width: 50%;
  height: 100%;
  z-index: -1;
  flex-direction: row;
  @media (max-width: 800px) {
    width: 90%;
    height: auto;
    flex-direction: column;
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

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
      <img  data-aos="fade-up" style={{width: "100%", marginTop: "3%"}} src={head} alt="head" />
      <Content> 
      <Img2 data-aos="fade-right" src="https://giphy.com/gifs/dommespace-domme-space-programador-qgQUggAC3Pfv687qPC" alt="devimg" />
      <About />

      </Content>
      <h2  style={{fontSize:"20px", backgroundColor: 'white'}} data-aos="fade-left"> Proyectos  </h2>
      <Proyectos/>
      <h2  style={{fontSize:"20px", backgroundColor: 'white'}} data-aos="fade-left"> Hablilidades  </h2>
      <Tecnologias/>
      <h2  style={{fontSize:"20px", backgroundColor: 'white'}} data-aos="fade-left"> Contacto </h2>
      <Contacto />
 

      <Foot/>
        
      </Router>
    </>
  )
}

export default App
