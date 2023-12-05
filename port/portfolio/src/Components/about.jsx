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

/* @media only screen and (max-width : 400px) {
border-color:  ${colores.amarillo};
margin-top: 80%;
 border: 20%;
 display: grid;
 grid-template-columns: 80%; 
 grid-template-rows: 80%;
 
} */
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
border-color:  ${colores.amarillo};
margin-top: 30%;
 border: 20%;
 display: grid;
 grid-template-columns: 80%; 
 grid-template-rows: 80%;
 
}    `;


const Estilo = styled.span`
background-color: ${colores.verde};
  opacity: 0.6;
  width: 50%;
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
<Contenedor data-aos="fade-down">
<Bloque>
     <H2>¡Hola!</H2>   
       <Estilo >   
       Soy Full Stack Developer con experiencia en bases de datos, gestión documental  y diseño organizacional. Con conocimientos en metodologías ágiles, GIT, estructura de datos, algoritmos, Express, Sequelize, PostgreSQL y NodeJS. 
Disfruto el diseño, el desarrollo web y la gestión de datos. 
<br/>
       </Estilo>
    </Bloque>
    </Contenedor>
    <Nav/>
    </>
    )
}

export default About