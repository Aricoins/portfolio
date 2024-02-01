import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import colores from './colores'
import linkedin from "../assets/likedin.webp"
import github from "../assets/GITHUB.png"
import favicon from "../assets/descarga.png"


const Contenedor = styled.footer`
    width:100%;
    background-color: #003140; 
    margin-top: 2%;
    display: flex;
    @media (max-width: 600px) {
        flex-direction: row;
        justify-content: strech;
        align-items: left;
       }
    `
  const Span = styled.span`
  color: white;
  align-self: start;
width: 100%;
  margin-top: 7%;
  margin-right: -5%;
  font-size: small;
  @media (max-width: 600px) {
    transform: rotate(0deg);
    font-size: x-small;
    align-self: center;
  }
`;


const Img = styled.img`

width: 500%; 
height: 100%; 
border-radius: 50%;
@media (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    align-self: center;

  }
  ` 

const Ancla = styled.a`
    text-decoration: none;
    color: ${colores.marron};
    display: flex;
    border-radius: 8%;
    transition-duration: 2s;
    margin: auto;
    width:10%;
    padding: 1% 2% 1% 1% ;
    :hover{
       opacity: 0.8;
       width: 100%;
       padding: 0% ;
       transition: 1s;
       cursor:pointer;
       
      }
      @media (max-width: 600px) {
    width: 80px;
    align-self: self-start;
  }
`

export default function Foot (props){

    return(
        
        <>
        <Contenedor>
        <ul  style={{display: "grid", gridTemplateColumns: "33% 33% 33%", gridTemplateRows: "60% 40%" }}>
        <li style={{gridColumnStart: "1", gridRowStart: "1", gridRowEnd: "1"}}>
           <Img src={favicon} alt="icono" style={{width:"30%", borderRadius: "50%"}} />              
           <p style={{color: "white"}}> Ariel G Rogel </p> 
</li>
<li style={{gridColumnStart: "2", }}>
        <Ancla href="https://www.linkedin.com/in/aegr/" >
          
       <Img 
        src={linkedin} 
        alt="devimg"
         /> 
         </Ancla>
</li>
<li style={{gridColumnStart: "3"}}> 
         <Ancla href="https://github.com/Aricoins">
            <Img 
            src={github} 
            alt="devimg"
            />
                   </Ancla> </li>
<li style={{gridColumnStart:"2", }}>
   
  <Ancla style={{gridColumStart: "1", gridColumnEnd: "3" }} href= "https://web.archive.org/web/20230202010104/https://creativecommons.org/licenses/by/4.0/">
   <Span> © 2024 - Licencia Opensource </Span>

   </Ancla>
     </li>
     </ul> 

</Contenedor>
   
     </>
              )
}