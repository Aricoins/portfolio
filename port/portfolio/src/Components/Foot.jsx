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
    flex-direction: row;
    align-items: center;
    `

const Img = styled.img`
width: 150px;

@media (max-width: 600px) {
    width: 50px;
    height: auto;
    flex-direction: column;
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
`
export default function Foot (props){

    return(
        <>
        <Contenedor>
        <figure> 
        <img src={favicon} alt="icono" style={{width:"50%", borderRadius: "50%"}} /> 
        <figcaption style={{color: "white", margin: "2%"}}>Ariel G Rogel </figcaption>
        </figure>
        <span style={{color: "white", margin: "2%", flexDirection: "column"}}>© 2024 - All right reserved </span>
              
        <Ancla href="https://www.linkedin.com/in/aegr/" >
        <Img 
        src={linkedin} 
        alt="devimg"
         /> 
        </Ancla>

   
         <Ancla href="https://github.com/Aricoins">
            <Img 
        src={github}  alt="devimg"
         /></Ancla>
       </Contenedor>
   
     </>
              )
}