import { useEffect } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import colores from "./colores";
import Nav from "./Nav";
import AOS from "aos";
import "aos/dist/aos.css"

const Contenedor = styled.div`
background-color: ${colores.amarillo};
opacity: 0.2;
width: 80%;
padding: 2%;
text-align: center;
display: flex;
color: ${colores.azul};
margin: auto;
margin-top:10%;
margin-bottom: 10%;
font-family: 'Roboto', sans-serif;
 @media only screen and (max-width : 400px) {
  width: 80%;
 } 
`
const Bloque= styled.div`
margin-top: 2%;
background-color:${colores.black};
display: flex;
flex-direction: column ;
justify-content: center;
border-radius: 1em;
align-self: center;
align-items: center;
align-content: center;
width: 80%;
margin: auto;
@media only screen and (max-width : 600px) {
  width: 80%;
 }`;

const Estilo = styled.span`
background-color: ${colores.verde};
opacity: 0.6;
width: 80%;
color: ${colores.black}; 
text-align: justify;
margin-top: 3%;
padding: 5%;
align-: right;
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
     <H2>¡Hola!</H2>   
       <Estilo >   
 Mi nombre es Ariel y soy Full Stack Developer con experiencia en bases de datos, gestión documental  y diseño organizacional. <br/><br/>
   
 Tengo conocimientos en metodologías ágiles, GIT flow, estructura de datos, algoritmos y diseño de servidores con ExpressJS, Sequelize, PostgreSQL y NodeJS. 
 Estoy permanentemente incoporando nuevas herramientas. <br/><br/>


Disfruto el diseño web con Styled-Components, Bootstrap y Tailwind CSS, el desarrollo front end con ReactJS, Vite y NextJS y la gestión y puesta en valor de datos. 
  <br/><br/>

    </Estilo>
    </Bloque>
    </Contenedor>
    <Nav/>
    </>
    )
}

export default About