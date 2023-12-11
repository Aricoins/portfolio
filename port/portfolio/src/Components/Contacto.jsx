import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";
import axios from 'axios'; // Importamos Axios para realizar la solicitud HTTP
import colores from './colores';
import Nav from './Nav';


// Estilos para el contenedor principal
const Caja = styled.div`
  margin-top: 2%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 2%;
  background-color: ${colores.amarillo};
  border-radius: 8px;
  box-shadow: 0 0 10px ${colores.verde};
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10%;
    @media (max-width: 600px) {
    flex-direction: column;
     
  }

    
`;

// Estilos para el botón
const Boton = styled.button`
  background-color: ${colores.verde};
  padding: 10px;
  border: none;
  border-radius: 5%;
  cursor: pointer;
  transition: background-color 0.3s;
  color: ${colores.gris};
  width: 100%;
  font-size: large;
  

  &:hover {
    background-color: ${colores.marron};
    color: ${colores.amarillo};
    width: 100%;
  }
`


// Componente principal
const Contacto = () => {
  useEffect(() => {
    AOS.init()
  }, []);
  

  return (
    <>
      <Caja data-aos="fade-up">
               <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfTbWLso0fsjkZmLKt2fplNL8y1sbIK4ndfh7R5q5XFrzRIQQ/viewform?embedded=true" frameborder="0" >Cargando…</iframe>
        </Caja>        
        </>   )  ;
}
export default Contacto;
