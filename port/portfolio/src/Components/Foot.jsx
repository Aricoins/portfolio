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
    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
       }
    `
  const Span = styled.span`
  color: white;
  align-self: start;
  transform: rotate(90deg);
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
width: 100px;
@media (max-width: 600px) {
    width: 80px;
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
      
        <figure> 
        <img src={favicon} alt="icono" style={{width:"50%", borderRadius: "50%"}} /> 
        <figcaption style={{color: "white", 
                    margin: "1%"}}>
                      Ariel G Rogel 
                      </figcaption>
        </figure>
               
        <Ancla href="https://www.linkedin.com/in/aegr/" >
       <figure>
        <Img 
        src={linkedin} 
        alt="devimg"
         /> 
         <figcaption > Linkedin</figcaption>
         </figure>
        </Ancla>

   
         <Ancla href="https://github.com/Aricoins">
            <figure>
            <Img 
        src={github}  alt="devimg"
         />
         <figcaption>GitHub</figcaption>
         </figure>
         
         </Ancla>
   <Span>© 2024 - All right reserved </Span>
      
       </Contenedor>
   
     </>
              )
}