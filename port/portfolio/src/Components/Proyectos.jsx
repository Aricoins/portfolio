import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dogs from '../assets/dogs.png'
import azul from '../assets/azul.png'
import nido from '../assets/nido.png'
import colores from './colores';

const Contenedor = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: rgb(242, 242, 242, 0.3);
  @media (max-width: 600px) {
    flex-direction: column;
    width: 90%;
  
  }
  @media (max-width: 400px) {
    flex-direction: column;
    width: 100%;
  
  }
`;
 
const Card = styled.div`
height: auto;
background-color: ${colores.amarillo};
border-radius: 10px;
box-shadow: 10px 10px 1px rgba(0, 0, 0, 0.25);
color: #f8f2f2;
padding: 2%;
font-size: small;
margin: 1%;
border: 8px solid black;
&:hover{
  background-color: ${colores.verde};
  border-color: ${colores.amarillo};
  transition: 2s;
  
}
p {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #000000;
}
ul{
  list-style-type: none
}
img{
  width: 200px;
}
`


const Proyectos = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (<>
<Contenedor>
  <a href="https://nuevamascota.vercel.app/" target='_blank' >
  <Card 
  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
     <h4> Dogs App </h4>
     <img style={{width: "200px"}} src={dogs} alt="imagen"/>
     <ul>
          <li>Diseño UX/UI planeado y consistente en todas las rutas.</li>
          <li>Filtros y ordenamientos combinados</li>
          <li>Formulario controlado. Submit condicional.</li>
          <li>Maneja diferentes estados de Redux.</li>
          <li>Paginación, deploy y testing.</li>
          <li>Código modularizado con responsabilidades bien definidas.</li>
          <li>Sigue buenas prácticas de API Rest.</li>
          <li> DB normalizada, validaciones y restricciones en modelos.</li>
        </ul>
     </Card></a>
     <a href="https://azullago.netlify.app/" target='_blank'
      >
<Card data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <h4>  Azul Lago Coop</h4>
    <img  src={azul} alt="imagen"/>
    <ul>
        <li>Sitio web responsivo</li>
        <li>HTML5 y CSS3 válidos</li>
        <li>Framework Bootstrap v5</li>
        <li>Código 100% amigable para desarrolladores y SEO</li>
        <li>Compatible con todos los navegadores web modernos</li>
        <li>Navbar desplegable y amigable para móviles</li>
        <li>Encabezado elegante y receptivo con carrusel</li>
        <li>Animaciones al desplazarse por la página</li>
        <li>Contador de números animado</li>
        <li>Mapa de Google</li>
    </ul>
</Card> </a>

<a href="https://nidodepalabras.netlify.app/" target='_blank'>
    <Card data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
    <h4>  Nido de Palabras </h4>
    <img style={{width: "200px"}} src={nido} alt="imagen"/>
    <ul>
          <li>Migración de Wordpress a ReactJS </li>
          <li>Creación de contenidos</li>
          <li>Animacion web con Styled-Components y Javascript </li>
          <li> Randerizado condicional y loading </li>
          <li> Navbar dinámica </li>
          <li>Sitio en construcción</li>

           </ul>
      
    </Card></a>
    </Contenedor>
    </>
  )
}

export default Proyectos
