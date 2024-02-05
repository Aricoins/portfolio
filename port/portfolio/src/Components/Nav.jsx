import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import colores from './colores'
import pdf from "../assets/cv.pdf"

const Navigator= styled.div`
 position: fixed;
z-index: 10000000;
top: 0%;
width:100%;
margin: auto;
height: 9%;
background-color: ${colores.amarillo};
opacity: 1;
display: flex;
justify-content: stretch;
align-items: center;
align-content: center;

 @media screen and (max-width : 700px) {
top: 100%;
  width: 90%;
  margin: auto;
}
`
const Botones = styled.button`
    border: ${colores.verde} solid 4px ;
    color:  ${colores.verde};
    background:  ${colores.azul};
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;  
    align-content: center;
    margin: 2px;
      border-radius: 0% 0% 0% 10%;
      transition-duration: 0.5s;
      z-index: 70000000;
      padding: 0px;
        transition-duration: 1s;
        width: 100%;
        cursor: pointer;
   :hover{
  width: 60%;
  cursor:pointer;
} @media screen and (max-width : 700px) {

  font-size: 10px;
}

`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-decoration: none;
    color: ${colores.marron};
  background-color:  ${colores.marron};
  width:35%;
  display: inline-block;
  border-radius: 8%;
  transition-duration: 1s;
  z-index: 7;
   &active{
    background-color: ${colores.verde};
    font-weight: bold;
    color: ${colores.marron};
    
  }
  &:hover{
    align-self: center;
    width: 60%;
    color:red
  }
  button {
      background-color: ${colores.verde};
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
      color: ${colores.gris}; /* Cambiado a color más claro */

      &:hover {
        background-color: ${colores.marron};
        color: ${colores.amarillo};
        font-size: 110%;
      }
    }
    &:active{ 
     background-color: ${colores.verde};
color: ${colores.marron}; }

 
  `

export default function Nav (props){

function scroll (e){
  e.preventDefault()
  window.scroll(0, 900)
}
function scrollF (e){
  e.preventDefault()
  window.scroll(0, 4100)
}
function scrollO (e){
  e.preventDefault()
  window.scroll(0, 0)
}
    return(
        <>
      
     <Navigator>
       <StyledLink to="/home"> <Botones onClick= {scrollO}> Inicio </Botones> </StyledLink>
       <StyledLink to="/form"> <Botones onClick= {scroll}> Proyectos </Botones> </StyledLink>
       <StyledLink to="/about"> <Botones onClick= {scrollF} > Redes </Botones> </StyledLink>
       <a href={pdf} download="cv.pdf"><button style={{width: "300px"}}>Mi CV</button></a>
      </Navigator>
     </>
              )
}