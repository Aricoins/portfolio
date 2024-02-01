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
import gif from "../../portfolio/src/assets/source.gif"
import yo from "../../portfolio/src/assets/yo.jpg"
import anime from 'animejs/lib/anime.es.js';

const Img2 = styled.img`
width: 50%;
  height: 100%;
  z-index: -1;
  flex-direction: row;
  &:hover {
  color: red 
  };

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

  const Bola = styled.img`
    
    width: 20%;
    position: absolute;
    z-index: 1000;
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
    grid-template: 1fr / 1fr var(--innerTrack, 0)};
  `


function App() {
 let animation 

  useEffect(() => {
    AOS.init();
anime({
            targets: '.anim ',
            easing: '',
                direction: 'linear',
               duration: 10000,
               easing: 'linear',
                loop: false,
                scale: [
                  { value: 1, duration: 4000, delay: 0 },
                  { value: 1, duration: 4000, delay: 0 },
          
                  { value: .1, duration: 4000, delay: 0 },
                ]
   , 
              translateX: [ 
                { value: -10, duration: 4000, delay: 0 },
                { value: -10, duration: 4000, delay: 0 },
          
                { value: 500, duration: 4000, delay: 0 },
    //          { value: -9000, duration: 10000, delay: 0 },
    
             //         { value: -700, duration: 2000, delay: 0 },
    //         { value: -700, duration: 2000, delay: 0 },
             //  { value: 500, duration: 2000, delay: 0 },
    //         { value: 700, duration: 2000, delay: 0 },
    //         { value: 750, duration: 2000, delay: 0 },
    //         { value: 750, duration: 2000, delay: 0 },
    //         { value: 750, duration: 10000, delay: 0 },
    //         { value: 750, duration: 20000, delay: 0 },
    //         { value: -500, duration: 15000, delay: 0 },
     //   { value: -500, duration: 2000, delay: 0 },
    ],
    //       translateY: [ 
    //        { value: 1000, duration: 3000, delay: 0 },
    // //       { value: 0, duration: 2000, delay: 0 },
    // //       { value: 0, duration: 2000, delay: 0 },
    // //       { value: 500, duration: 2000, delay: 0 },
    // //       { value: 500, duration: 2000, delay: 0 },
    // //       { value: 500, duration: 500, delay: 0 },
    // //       { value: 500, duration: 500, delay: 0 },
    // //       { value: 500, duration: 500, delay: 0 },
    // //       { value: 500, duration: 5000, delay: 0 },
    // //       { value: 600, duration: 2000, delay: 0 },
    // //       { value: 700, duration: 3000, delay: 0 },
    // //       { value: 900, duration: 5000, delay: 0 },
    // //       { value: 1200, duration: 5000, delay: 0 },
    // //       { value: 1500, duration: 13000, delay: 0 },
    // //       { value: 2600, duration: 2000, delay: 0 },
    // //       { value: 2600, duration: 5000, delay: 0 },
    

    //      ],

    //    // { value: 4, duration: 600, delay: 0 },
    // //   { value: 8, duration: 6000, delay: 0 },
    // // { value: 18, duration: 20000, delay: 0 },
    // //   { value: 5, duration: 12000, delay: 0 }
       // { value: 0, duration: 500, delay: 0 },
    // //   ,
    //    opacity: [
    //       { value: 0, duration: 2000, delay: 0 },
    //       { value: 0.9, duration: 100, delay: 0 },
    //     ]
   
   
 });
    }, [] );

          //           points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
//           direction: 'alternate',
//           easing: 'easeInOutExpo',
//           duration: 200,
//          translateX: [
//     { value: 800, duration: 1000, delay: 500 },
//     { value: 200, duration: 1000, delay: 500 },
//     { value: 0, duration: 1000, delay: 500 },
//     { value: 800, duration: 1000, delay: 500 },
   
//   ],
//   scale: [
//     {value: .1, easing: 'easeOutSine', duration: 500},
//     {value: 1, easing: 'easeInOutQuad', duration: 1200}
//   ],
//   delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
  
// backgroundColor: [
//   { value: 'F1948A', duration: 1000, delay: 500 },
//   { value: ' 241, 196, 15, 09', duration: 1000, delay: 500 },
// ], });
//     anime({
//       targets: '.animacion2',

// borderRadius: ['06%', '300%'],
// easing: 'easeInOutQuad',
// loop: true,
// points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
// direction: 'alternate',
// easing: 'easeInOutExpo',
// duration: 200,
// opacity: [
// { value: .8, duration: 1000, delay: 500 },
// { value: 1, duration: 1000, delay: 500 },
// { value: 0.6, duration: 1000, delay: 500 },
// { value: 1, duration: 1000, delay: 500 },

// ],
// backgroundColor: [
// { value: 'green', duration: 1000, delay: 500 },
// { value: 'red', duration: 1000, delay: 500 },
// { value: 'red', duration: 1000, delay: 500 },
// { value: 'red', duration: 1000, delay: 500 },

// ],
// width: [
// { value: '10px', duration: 1000, delay: 500 },
// { value: '100%', duration: 1000, delay: 500 },

// ],
// background: [
// { value: '#F08080', duration: 1000, delay: 500 },
// { value: 'red', duration: 1000, delay: 500 },
// { value: '#FFC300 ', duration: 1000, delay: 500 },
// { value: 'red', duration: 1000, delay: 500 }
// ],
// padding: [
// { value: '10px', duration: 1000, delay: 500 },

// { value: '40px', duration: 1000, delay: 500 },
// ],
// content: [
// { value: 'Front End', duration: 1000, delay: 500 },
// { value: 'Full Stack', duration: 1000, delay: 500 },
// { value: 'Back End', duration: 1000, delay: 500 },
// { value: 'Front End', duration: 1000, delay: 500 },
// ],
// translateX: [
// { value: 80, duration: 1000, delay: 500 },
// { value: 20, duration: 1000, delay: 500 },
// { value: 60, duration: 1000, delay: 500 },
// { value: 800, duration: 1000, delay: 500 },

// ],

// delay: anime.stagger(200, {grid: [14, 5], from: 'center'

anime({
  targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  baseFrequency: 0,
  scale: 1,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutExpo'
});



  return (
    <>


      <Router>
        <Bola className="anim" src="../src/assets/bolaspeed.gif" alt="gif"  />
        <img  data-aos="fade-up" style={{width: "100%", marginTop: "3%", zIndex: "1000"}} src={yo} alt="head" />
      <Content> 
     
      <Img2 className= "anime" data-aos="fade-right"  src={gif} alt="devimg" /> 
      <About />
      
      </Content>
     

      <h2  style={{fontSize:"20px", backgroundColor: 'white'}} > Proyectos  </h2>
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
