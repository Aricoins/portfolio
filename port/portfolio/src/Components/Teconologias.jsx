import { useEffect } from "react";
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


const Galeria = styled.div`
  display: grid; 
  grid-template-columns: repeat(4);
  grid-template-rows: repeat(3, 5fr);
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1000%;
margin: auto;
.tech{
  padding: 1%;
  grid-column-start: 2;
  width: 50%;
  padding: 5%;
  height: auto;
  margin: auto;
  color: #e1b505;
  font-size: 1400%;
  }
&:hover{
  color: #b70d0d;
}
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
    width: 96%;
    height: 10%;
    opacity: 0.9;
    text-align: center;
    color: ${colores.white};
    background-color: ${colores.amarillo };
    padding: 2%;   
  `


const Tecnologias = () => {

    useEffect(() => {
        AOS.init();
      }, []);





    return( 

        <Tecnologi style={{color: "white", width: "100%", height: "100%", padding: "2%", margin: "auto"}}
        data-aos= "fade-left">
        <h3> Javascript, Typescipt, CSS, Tailwind, HTML, React, Router, Redux.
        <br/> Express, Postgress, Sequelize & MySQL. </h3>
         <h3> Git, GitHub, Trello, Slack. </h3>
       <Galeria className="tech"> 
        <FaReact style= {{gridColumnStart: "1"}} className="tech"/>
         <SiCss3 style= {{gridColumnStart: "1"}} className="tech"/> 
         <SiHtml5 style= {{gridColumnStart: "1"}} className="tech"/> 
         <SiJavascript style= {{gridColumnStart: "2", gridRowStart: "1"}}className="tech"/>
         <SiMysql style= {{gridColumnStart: "2", gridRowStart: "2"}} className="tech"/> 
         <SiPostgresql style= {{gridColumnStart: "2",  gridRowStart: "3"}}
        
         className="tech"/> 
         <SiSequelize style= {{gridColumnStart: "1",  gridRowStart: "4"}}className="tech"/> 
         <SiGit style= {{gridColumnStart: "3",  gridRowStart: "1"}} className="tech"/>
         <SiGithub style= {{gridColumnStart: "3" , gridRowStart: "2"}} className="tech"/> 
         <SiTrello style= {{gridColumnStart: "3"}} className="tech"/> 
         <SiSlack  style= {{gridColumnStart: "3"}} className="tech"/> 
         <SiReactrouter style= {{gridColumnStart: "1"}}className="tech"/>
         <SiRedux style= {{gridColumnStart: "2" , gridRowStart: "4"}} className="tech"/>
         <SiTypescript style= {{gridColumnStart: "2", gridRowStart: "5"}} className="tech"/>
         <SiTailwindcss style= {{gridColumnStart: "3", gridRowStart: "5"}} className="tech"/>
         </Galeria>
   </Tecnologi>
   ) 
}


export default Tecnologias