import { useEffect } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import {colores} from "./colores";
import Nav from "./Nav";
import AOS from "aos";
import "aos/dist/aos.css"
import '../App.css'

const Contenedor = styled.div`
width: auto;
height: auto;
padding: 2%;
text-align: center;
display: flex;
margin: auto;
margin-bottom: 1%;
margin-top: 10%;
flex-direction: row;
font-family: audiowave-regular;
z-index: -100;
color: black;
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

const H2= styled.h2`

font-size: 40px;
margin:0;
border-color: red;
&:hover{
}
`


function About ({currentColor}){
 
    useEffect(() => {
        AOS.init();
      }, []);
      
const Estilo = styled.span`
color:  ${props => props.currentColor.segundo};
z-index: 1000;
background-color:  ${props => props.currentColor.cuarto};; 
font-family: audiowide;
opacity: 1;
width: 95%;
text-align: justify;
margin-top: 3%;
padding: 5%;
z-index: 0;
font-size: x-large;

@media only screen and (max-width : 600px) {
  width: 80%;
  flex-direction: column;
 } 
`

    return(<>
<Estilo currentColor={ currentColor} data-aos="fade-left">
 Latitud42.tech evoca la idea de estar en un punto estratégico (latitud) para desarrollar soluciones tecnológicas avanzadas (tech), aprovechando la ubicación geográfica única en la Comarca Andina del Paralelo 42.  
    </Estilo>

    </>
    )
}

export default About