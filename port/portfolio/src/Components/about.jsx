import { useEffect } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import {colores} from "./colores";
import Nav from "./Nav";
import AOS from "aos";
import "aos/dist/aos.css"

const Contenedor = styled.div`
width: auto;
height: auto;
padding: 2%;
text-align: center;
display: flex;
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
  color: ${props => props.currentColor.cuarto};
  
opacity: 1;
width: 80%;
text-align: justify;
margin-top: 3%;
padding: 5%;
z-index: 0;

@media only screen and (max-width : 600px) {
  width: 80%;
  flex-direction: column;
 } 
`

    return(<>
<Contenedor data-aos="fade-left">
<Bloque>
<H2 >Hola!</H2>
       <Estilo currentColor={currentColor} >   

       Soy full stack developer y programar es lo que más me gusta.  <br/> <br/>
Me especializo en Javascript, lenguaje con el que me gradué en el bootcamp de Henry como desarrollador web. <br/> <br/>  
       <br/>  Vivo en Bariloche, Argentina, donde puedo conjugar mi pasión con el trekking en la montaña, mi principal hobby. <br/> <br/>        
       `<br/>Mis últimos trabajos usan Typescript, TailwindCSS y NextJS aunque naturalmente incorporo tecnologías nuevas<br/><br/>
    </Estilo>
    </Bloque>
    </Contenedor>

    </>
    )
}

export default About