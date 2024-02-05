import { useEffect } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import colores from "./colores";
import Nav from "./Nav";
import AOS from "aos";
import "aos/dist/aos.css"

const Contenedor = styled.div`
background-color: ${colores.amarillo};
opacity: 0.9;
width: auto;
height: auto;
padding: 2%;
text-align: center;
display: flex;
color: ${colores.azul};
margin: auto;
margin-bottom: 1%;
flex-direction: row;
font-family:'Roboto', sans-serif;
z-index: -100;
@media only screen and (max-width : 800px) {
 flex-direction: column;
 width: 90%
 } 
 @media only screen and (max-width : 600px) {
 flex-direction: column;
 width: 90%
 } 
`
const Bloque= styled.div`
background-color:${colores.black};
display: flex;
flex-direction: column ;
justify-content: center;
border-radius: 1em;
height: 90%;
align-self: center;
align-items: center;
align-content: center;
margin: auto;
z-index: -10;
padding: 10%;
@media only screen and (max-width : 600px) {
  width: 80%;
 flex-direction: column;
 } `;

const Estilo = styled.span`
background-color: ${colores.verde};
opacity: 0.6;
width: 80%;
color: ${colores.black}; 
text-align: justify;
margin-top: 3%;
padding: 5%;
z-index: 0;

@media only screen and (max-width : 600px) {
  width: 80%;
  flex-direction: column;
 } 
`
const H2= styled.h2`
color:  ${colores.marron}; 
font-size: 40px;
margin:0;
&:hover{
color:  ${colores.verde}; ; 
}
`

function About (){

    useEffect(() => {
        AOS.init();
      }, []);

    return(<>
<Contenedor data-aos="fade-left">
<Bloque>
<H2>Greetings!</H2>
       <Estilo >   

       Ariel, full stack developer skilled in databases, document management, and organizational design. Proficient in JavaScript, ReactJS, ExpressJS, and more. Specializing in crafting concise, visually appealing web solutions with a keen interest in dynamic animations.
       <br/>  <br/>Currently exploring the realms of web animation and machine learning in programming.<br/><br/>
       I am always learning...
    </Estilo>
    </Bloque>
    </Contenedor>
    <Nav/>
    </>
    )
}

export default About