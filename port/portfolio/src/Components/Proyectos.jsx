import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
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
width: 300px;
margin: 20px;
height: 300px;
background-color: #FFFFFF;
border-radius: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
p {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #000000;
}
`


const Proyectos = () => {
    useEffect(() => {
        AOS.init()
    })
  return (<>
    
<h3 style={{textAlign: "right", marginRight: "50px", fontFamily: "Roboto"}}>My Proyects</h3>
<Contenedor>
  <Card data-aos="fade-up"
     data-aos-anchor-placement="center-center">
     <p> Dogs App </p>
     <img style={{width: "200px"}} src={dogs} alt="imagen"/>
     </Card>
     <Card data-aos="fade-left"
     data-aos-anchor-placement="center-center">
        <p>  Azul Lago </p>
        <img style={{width: "200px"}} src={azul} alt="imagen"/>
        </Card>
    <Card data-aos="fade-right"
     data-aos-anchor-placement="center-center">
    <p>  Nido de Palabras </p>
    <img style={{width: "200px"}} src={nido} alt="imagen"/>
    </Card>
    </Contenedor>
    </>
  )
}

export default Proyectos
