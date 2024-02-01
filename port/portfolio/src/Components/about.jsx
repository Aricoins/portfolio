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
width: 50%;
height: 40%;
padding: 2%;
text-align: center;
display: flex;
color: ${colores.azul};
margin: auto;
margin-bottom: 1%;
margin-top: 2%;
font-family: 'Roboto', sans-serif;
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
align-self: center;
align-items: center;
align-content: center;
margin: auto;
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
              I am Ariel, a seasoned Full Stack Developer distinguished by my proficiency in databases, document management, and strategic organizational design. My professional journey is fortified by a keen understanding of agile methodologies, GIT flow, advanced data structures, algorithms, and robust server design utilizing ExpressJS, Sequelize, PostgreSQL, and NodeJS. I exhibit an unwavering commitment to remaining at the forefront of technological advancements, continually integrating cutting-edge tools into my repertoire.

In addition to my technical acumen, I derive immense satisfaction from the artistic nuances of web design. I am adept at crafting visually arresting interfaces through the adept use of technologies such as Styled-Components, Bootstrap, and Tailwind CSS. My prowess in front-end development extends to ReactJS, Vite, and NextJS, where I seamlessly amalgamate functionality with aesthetic appeal.

A burgeoning facet of my specialization lies in the dynamic realm of animations. Actively engaged in exploring and implementing avant-garde animation libraries and techniques, I introduce an extra dimension of interactivity and engagement to the digital landscapes I shape.

I invite collaboration to transform conceptualizations into visually stunning and interactively enriched web solutions. Let's embark on a journey of digital innovation and elevate your projects to unparalleled heights.
<br/><br/>  <br/><br/>

    </Estilo>
    </Bloque>
    </Contenedor>
    <Nav/>
    </>
    )
}

export default About