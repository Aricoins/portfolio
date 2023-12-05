import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import colores from './colores'
import linkedin from "../assets/likedin.webp"
import github from "../assets/GITHUB.png"

const Contenedor = styled.footer`
    width:100%;
    background-color: #003140; 
    display: flex;
    flex-direction: column;

    `

export default function Foot (props){

    return(
        <>
      
    <Contenedor>
        <a href="https://www.linkedin.com/in/aegr/">
        <img 
        style={{width: "10%"}}
        src={linkedin}  alt="devimg" />
        </a>
        <a href="https://github.com/Aricoins">

        <img 
        style={{width: "10%" }}
        src={github}  alt="devimg"
        />
</a>

<h3 style={{color: `${colores.azul}`}}>arielgarcia79@gmail.com</h3>
    </Contenedor>
   
     </>
              )
}