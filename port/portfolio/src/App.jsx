import { useEffect, useState } from 'react'
import Proyectos from './Components/Proyectos'
import styled from 'styled-components'
import head from "../src/assets/head.jpg"
import './App.css'
import imagen from "../src/assets/yo.png";
import  AOS  from 'aos'
import "aos/dist/aos.css"
import CreateDog from './Components/Contacto'
import { BrowserRouter as Router } from 'react-router-dom';
import About from './Components/about'
import colores from './Components/colores'

const Head = styled.div`
margin-top: 1%;
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
background-color:${colores.verde};
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: green;
border-radius: 5%;
height: 200px;
padding: 5%;
margin-top: 5%;
h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 56px;
  text-align: left;
  color: white;
} 
h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 2px;
  text-align: left;
  color: #e9ede2;
  margin-top: 0px;

}
p{
margin-top: 30px;
  background-color: ${colores.amarillo};

color: white

}
` 
const Img = styled.img`
position: absolute;
width: 33%;
display: flex;
top: 0;
right: 1%;
`
const Img2 = styled.img`
width: 800px;
display: flex;
align-tracks: left;
height: 750px;
z-index: -1;
`
const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
height: 100%;
margin-top: 5%;
`
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <><Router>

      <Head data-aos="fade-up">
      <Img src={imagen} alt="yo" />
        <h1>Ariel G. Rogel</h1>
     
        <h2>FULL STACK DEVELOPER</h2>
        <p style={{marginBottom: "-60px"}}>CSS | HTML | React | Redux | Express | Sequelize | PostgreSQL </p>
        </Head>
    <h2 style={{fontSize:"20px", backgroundColor: 'white'}} data-aos="fade-left" >  My Projects </h2>
        <Proyectos/>
     <h2  style={{fontSize:"20px", backgroundColor: 'white'}} data-aos="fade-left"> Tecnologías  </h2>
   <Content>  <Img2 src="../src/assets/dev.gif" alt="" />
<About/>
</Content>
<h2  style={{fontSize:"20px", backgroundColor: 'white'}} data-aos="fade-left"> Contacto </h2>
<CreateDog />
</Router>
    </>
  )
}

export default App
