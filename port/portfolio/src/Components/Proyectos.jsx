import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dogs from '../assets/dogs.png'
import azul from '../assets/azul.png'
import nido from '../assets/nido.png'

const Contenedor = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: #F2F2F2;
` 
const Card = styled.div`
height: auto;
background-color: #ffd700;
border-radius: 10px;
box-shadow: 10px 10px 1px rgba(0, 0, 0, 0.25);
color: #f8f2f2;
padding: 2%;
font-size: small;
margin: 1%;
border: 8px solid black;
&:hover{
  background-color: black;
  border-color: #ffd700;
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
    
<h3 style={{textAlign: "right", marginRight: "50px", fontFamily: "Roboto"}}>My Proyects</h3>
<Contenedor>
  <Card data-aos="flip-left"
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
      
     
     </Card>
     <Card data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <h4>  Azul Lago </h4>
        <img  src={azul} alt="imagen"/>
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
        </Card>
    <Card data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
    <h4>  Nido de Palabras </h4>
    <img style={{width: "200px"}} src={nido} alt="imagen"/>
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
      
    </Card>
    </Contenedor>
    </>
  )
}

export default Proyectos
