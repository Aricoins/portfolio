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


const Tecnologi = styled.div`
    position: relative; 
    background-color: rgb(0, 128, 0, 0.3);
  
    width: 80%;
    height: 100%;
    opacity: 0.9;
    text-align: center;
    font-size: 4em;
    color: ${colores.white};
    padding: 20%;   
    z-index: 0;
   justify-content: space-around;

    `

const Galeria = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 7%;
  background-color: ${colores.amarillo} ;

  &:hover{
    transition: 3s;
    color: #f7a605;
    width: 90%;

  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    font-size: 1em;}
`;

const Icono = styled.div`
grid-auto-flow: column;
position: relative;
z-index: 2000;
 display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-template-rows: max-content 1fr;
      justify-content:center;
      text-align: start;
font-size: 1.5em;
padding: 5%;
gap: 25%;
width: 25%;

&:hover{
  transition: 3s;
 color: #f7a605;

}

@media (max-width: 1200px) {
  display: flex;
  flex-direction: column;
font-size: 1.5em;

}`;




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
  z-index: 0;
  top: 1%;
  left: 50%;

  `;


const Tecnologias = () => {

    useEffect(() => {
        AOS.init();

      anime({ targets: '.anim8 ',
        loop: true,
        easing: 'easeInOutQuad',
        duration: 10000,
        direction: 'alternate',
        translateX: [
          { value: 400, duration: 5700, delay: 0 },
          { value: -300, duration: 2500, delay: 0 },
          { value: -200, duration: 2500, delay: 0 },
       
        ],
        translateY: [
          { value: 2200, duration: 5700, delay: 0 },
          { value: 800, duration: 2500, delay: 0 },
          { value: 1800, duration: 2500, delay: 0 },
        ],
        scale: [
          { value: 0.1, duration: 4700, delay: 0 },
          { value: 3, duration: 2500, delay: 0 },
          { value: 0, duration: 2500, delay: 0 },
          { value: 0, duration: 5000, delay: 0 },
          
        ],
  
    }
    );
    anime({      targets: '.anim2, ',
      loop: true,
      easing: 'easeInOutQuad',
      duration: 10000,
      direction: 'alternate',
      translateX: [
        { value: 400, duration: 5700, delay: 0 },
        { value: -400, duration: 2500, delay: 0 },
        { value: -400, duration: 2500, delay: 0 },
     
      ],
      translateY: [
        { value: 2200, duration: 5700, delay: 0 },
        { value: 1000, duration: 2500, delay: 0 },
        { value: 400, duration: 2500, delay: 0 },
      ],
      scale: [
        { value: 0.1, duration: 4700, delay: 0 },
        { value: 2, duration: 2500, delay: 0 },
        { value: 0.6, duration: 2500, delay: 0 },
        { value: 0, duration: 5000, delay: 0 },
        
      ],

  }
  );


      anime({ targets: '.anim3',
        loop: true,

          easing: 'easeInOutQuad',
        duration: 10000,
        direction: 'alternate',
        translateX: [
          { value: 100, duration: 5700, delay: 0 },
          { value: -400, duration: 2500, delay: 0 },
          { value: -400, duration: 2500, delay: 0 },
       
        ],
        translateY: [
          { value: 2500, duration: 5700, delay: 0 },
          { value: 1000, duration: 2500, delay: 0 },
          { value: 400, duration: 2500, delay: 0 },
        ],
        scale: [
          { value: 1, duration: 5700, delay: 0 },
          { value: 2, duration: 2500, delay: 0 },
          { value: 1, duration: 2500, delay: 0 },
          { value: 0, duration: 5000, delay: 0 },
          
        ],
  
    }
      );



      anime({ targets: '.anim9',
 
        loop: true,
        easing: 'easeInOutQuad',
        
        direction: 'alternate',
        translateX: [
          { value: 400, duration: 5000, delay: 0 },
          { value: -400, duration: 5000, delay: 0 },
       
        ],
        translateY: [
          { value: 0, duration: 5000, delay: 0 },
          { value: -1500, duration: 5000, delay: 0 },
       
        ],
        scale: [
          { value: 2, duration: 5000, delay: 0 },
          { value: 1, duration: 5000, delay: 0 },
          
        ],
  
    }
      );
    }, []);
      
    const bola = "https://res.cloudinary.com/dx0htqhaq/image/upload/v1706896494/ymipt3ftutjzkicn7isg.gif"
    
    return( 
        <Tecnologi 
        data-aos= "fade-left">
 <Bola8 className="anim8" src={bola} alt="gif"  />
 <Bola9 className="anim3" src={bola} alt="gif"  />
             
        <h3> Javascript, Typescipt, CSS, Tailwind, HTML, React, Router, Redux.
        <br/> Express, Postgress, Sequelize & MySQL. </h3>
         <h3> Git, GitHub, Trello, Slack. </h3>
         <Galeria className="tech">
        
         <Icono>
         <Icono><SiCss3 
         style= {{gridColumnStart: "1", zIndex: 5, gridRowStart: "1"}} 
         className="tech"/> </Icono>
         <Icono> <SiHtml5  className="tech"/> </Icono>
         <Icono>  <SiJavascript className="tech"/></Icono>
         <Icono>     <SiMysql className="tech"/> </Icono>
         <Icono>     <SiPostgresql  className="tech"/> </Icono> 
         <Icono> <SiSequelize className="tech"/> </Icono>
       <Icono> <SiGit className="tech"/></Icono>
       <Icono> <SiGithub className="tech"/> </Icono>
       <Icono><SiTrello className="tech"/> </Icono>
       <Icono><SiSlack  className="tech"/></Icono> 
       <Icono> <SiReactrouter className="tech"/></Icono>
       <Icono><SiRedux className="tech"/></Icono>
       <Icono> <SiTypescript  className="tech"/></Icono>
       <Icono> <SiTailwindcss className="tech"/></Icono>
       </Icono> </Galeria>
   </Tecnologi>

   ) 
}


export default Tecnologias