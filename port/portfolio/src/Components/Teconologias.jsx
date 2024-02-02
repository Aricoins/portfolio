import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import colores from "./colores";
import Nav from "./Nav";
import AOS from "aos";
import "aos/dist/aos.css"
import  {SiRedux} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiTrello } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { SiZoom } from "react-icons/si";
import { SiGooglemeet } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiTypescript } from "react-icons/si";	
import { SiTailwindcss } from "react-icons/si";

const Bola2 = styled.img`
            
width: 15%;
position: absolute;
z-index: 0;
top: 5%;
left: 50%;

`;

const Bola3 = styled.img`
width: 12%;
position: absolute;
z-index: 0;
top: 5%;
left: 50%;

`;

const Bola8 = styled.img`
   
width: 5%;
position: absolute;
z-index: 0;
top: 1%;
left: 50%;

`;
const Bola9 = styled.img`
   
width: 2%;
position: absolute;
z-index: -2;
top: 1%;
left: 50%;

`;
const Galeria = styled.div`
  display: grid; 
  grid-template-columns: repeat(4);
  grid-template-rows: repeat(3, 5fr);
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 90%;
  height: 1200px;
  color: white;
  font-size: 1000%;
margin: auto;

@media (max-width: 600px) {
    width: 100%;



}
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const Tecnologi = styled.div`
    position: relative; 
    background-color: rgb(4, 79, 72, .6);
    width: 100px;
    height: auto;
    opacity: 0.9;
    text-align: center;
    color: ${colores.white};
    background-color: ${colores.amarillo };
    padding: 2%;   
    z-index: 0;
  `
      const Icono = styled.div`
      position: relative;
      z-index: 2000;
      width: 20%;
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      grid-template-rows: 20% 20% 20% 20% 20%;
      width: 90%;
      height: 100%;
      gap: 5%;
      margin: auto;
      grid-auto-flow: column;



&:hover{
  transition: 3s;
 color: #f7a605;
 width: 90%;
height: 100%;
gap: 5%;
margin: auto;
grid-auto-flow: column;

}`;




const Tecnologias = () => {

    useEffect(() => {
        AOS.init();

      anime({
        targets: '.anim8 ',
        loop: true,
        easing: 'easeInOutQuad',
        duration: 10000,
        direction: 'alternate',
        translateX: [
          { value: 500, duration: 5700, delay: 0 },
          { value: -500, duration: 2500, delay: 0 },
          { value: -1000, duration: 2500, delay: 0 },
       
        ],
        translateY: [
          { value: 200, duration: 5700, delay: 0 },
          { value: 500, duration: 2500, delay: 0 },
          { value: 700, duration: 2500, delay: 0 },
        ],
        scale: [
          { value: 0.1, duration: 4700, delay: 0 },
          { value: 3, duration: 2500, delay: 0 },
          { value: 0, duration: 2500, delay: 0 },
          { value: 0, duration: 5000, delay: 0 },
          
        ],
  
    }
    );
    anime({
      targets: '.anim2, ',
      loop: true,
      easing: 'easeInOutQuad',
      duration: 10000,
      direction: 'alternate',
      translateX: [
        { value: 500, duration: 5700, delay: 0 },
        { value: -500, duration: 2500, delay: 0 },
        { value: -1000, duration: 2500, delay: 0 },
     
      ],
      translateY: [
        { value: 200, duration: 5700, delay: 0 },
        { value: 500, duration: 2500, delay: 0 },
        { value: 700, duration: 2500, delay: 0 },
      ],
      scale: [
        { value: 0.1, duration: 4700, delay: 0 },
        { value: 3, duration: 2500, delay: 0 },
        { value: 0, duration: 2500, delay: 0 },
        { value: 0, duration: 5000, delay: 0 },
        
      ],

  }
  );


      anime({
        targets: '.anim3',
        loop: true,
        easing: 'linear',
          easing: 'easeInOutQuad',
        duration: 10000,
        direction: 'alternate',
        translateX: [
          { value: 100, duration: 5700, delay: 0 },
          { value: -500, duration: 2500, delay: 0 },
          { value: -1000, duration: 2500, delay: 0 },
       
        ],
        translateY: [
          { value: 200, duration: 5700, delay: 0 },
          { value: 500, duration: 2500, delay: 0 },
          { value: 700, duration: 2500, delay: 0 },
        ],
        scale: [
          { value: 1, duration: 5700, delay: 0 },
          { value: 3, duration: 2500, delay: 0 },
          { value: 1, duration: 2500, delay: 0 },
          { value: 0, duration: 5000, delay: 0 },
          
        ],
  
    }
      );



      anime({
        targets: '.anim9',
 
        loop: true,
        easing: 'easeInOutQuad',
        
        direction: 'alternate',
        translateX: [
          { value: 500, duration: 5000, delay: 0 },
          { value: -1000, duration: 5000, delay: 0 },
       
        ],
        scale: [
          { value: 3, duration: 5000, delay: 0 },
          { value: 1, duration: 5000, delay: 0 },
          
        ],
  
    }
      );
    }, []);
      

    return( 

        <Tecnologi style={{color: "white",   width: "80%", height: "100%", padding: "2%", margin: "auto"}}
        data-aos= "fade-left">
 <Bola8 className="anim8" src="../src/assets/bolaspeed.gif" alt="gif"  />
 <Bola9 className="anim3" src="../src/assets/bolaspeed.gif" alt="gif"  />
             
        <h3> Javascript, Typescipt, CSS, Tailwind, HTML, React, Router, Redux.
        <br/> Express, Postgress, Sequelize & MySQL. </h3>
         <h3> Git, GitHub, Trello, Slack. </h3>
{/* {hover?( 
       <Galeria className="tech">
        
          <Icono>
          <Icono><SiCss3 style= {{gridColumnStart: "1", zIndex: 50000000,}} className="tech"/> </Icono>
          <Icono> <SiHtml5 style= {{gridColumnStart: "1", zIndex: 50000000,}} className="tech"/> </Icono>
          <Icono>  <SiJavascript style= {{gridColumnStart: "1", zIndex: 50000000, gridRowStart: "3"}}className="tech"/></Icono>
          <Icono>     <SiMysql style= {{gridColumnStart: "1", zIndex: 50000000, gridRowStart: "4"}} className="tech"/> </Icono>
          <Icono>     <SiPostgresql style= {{gridColumnStart: "2",  zIndex: 50000000, gridRowStart: "1"}} className="tech"/> </Icono> 
          <Icono> <SiSequelize style= {{gridColumnStart: "2",  gridRowStart: "2"}}className="tech"/> </Icono>
        <Icono> <SiGit style= {{gridColumnStart: "2", zIndex: 50000000,  gridRowStart: "3"}} className="tech"/></Icono>
        <Icono> <SiGithub style= {{gridColumnStart: "2" , gridRowStart: "4"}} className="tech"/> </Icono>
        <Icono><SiTrello style= {{gridColumnStart: "3", gridRowStart: "1"}} className="tech"/> </Icono>
        <Icono><SiSlack  style= {{gridColumnStart: "3", gridRowStart: "2", zIndex: 50000000}} className="tech"/></Icono> 
        <Icono> <SiReactrouter style= {{gridColumnStart: "3", gridRowStart:"3", zIndex: 50000000}}className="tech"/></Icono>
        <Icono><SiRedux style= {{gridColumnStart: "3" , gridRowStart: "4"}} className="tech"/></Icono>
        <Icono> <SiTypescript style= {{gridColumnStart: "4", gridRowStart: "1"}} className="tech"/></Icono>
        <Icono> <SiTailwindcss style= {{gridColumnStart: "4", gridRowStart: "2"}} className="tech"/></Icono>
        </Icono> </Galeria>): */}
         <Galeria className="tech">
        
         <Icono>
         <Icono><SiCss3 
         style= {{gridColumnStart: "1", zIndex: 5, gridRowStart: "1"}} 
         className="tech"/> </Icono>
         <Icono> <SiHtml5 style= {{gridColumnStart: "1", zIndex: 2, gridRowStart: "2"}} className="tech"/> </Icono>
         <Icono>  <SiJavascript style= {{gridColumnStart: "1", zIndex: 2, gridRowStart: "3"}}className="tech"/></Icono>
         <Icono>     <SiMysql style= {{gridColumnStart: "1", zIndex: 2, gridRowStart: "4"}} className="tech"/> </Icono>
         <Icono>     <SiPostgresql style= {{gridColumnStart: "1",  zIndex: 2, gridRowStart: "5"}} className="tech"/> </Icono> 
         <Icono> <SiSequelize style= {{gridColumnStart: "2",  gridRowStart: "1"}}className="tech"/> </Icono>
       <Icono> <SiGit style= {{gridColumnStart: "2", zIndex: 5,  gridRowStart: "2"}} className="tech"/></Icono>
       <Icono> <SiGithub style= {{gridColumnStart: "2" , gridRowStart: "3", zIndex: 200 }} className="tech"/> </Icono>
       <Icono><SiTrello style= {{gridColumnStart: "2", gridRowStart: "4"}} className="tech"/> </Icono>
       <Icono><SiSlack  style= {{gridColumnStart: "2", gridRowStart: "5", zIndex: 5}} className="tech"/></Icono> 
       <Icono> <SiReactrouter style= {{gridColumnStart: "3", gridRowStart:"1", zIndex: 5}}className="tech"/></Icono>
       <Icono><SiRedux style= {{gridColumnStart: "3" , gridRowStart: "2"}} className="tech"/></Icono>
       <Icono> <SiTypescript style= {{gridColumnStart: "3", gridRowStart: "3"}} className="tech"/></Icono>
       <Icono> <SiTailwindcss style= {{gridColumnStart: "3", gridRowStart: "4"}} className="tech"/></Icono>
       </Icono> </Galeria>
   </Tecnologi>

   ) 
}


export default Tecnologias