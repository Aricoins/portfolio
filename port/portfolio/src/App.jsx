import { useEffect, useState } from 'react'
import Proyectos from './Components/Proyectos'
import styled from 'styled-components'
import './App.css'
import imagen from "../src/assets/yo.png"
import  AOS  from 'aos'
import "aos/dist/aos.css"
import CreateDog from './Components/Contacto'
import { BrowserRouter as Router } from 'react-router-dom';
import About from './Components/about'

const Head = styled.div`
margin-top: 1%;
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
background-color: #080c01;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: green;
border-radius: 5%;
height: 200px;
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
  background-color: #ffd700;

color: white

}
` 
const Img = styled.img`
position:absolute;
width: 25%;
align-self: flex-end;
height: 200px;
`

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <><Router>
      <Head data-aos="fade-up">
        <h1>Ariel G. Rogel</h1>
        <Img src={imagen} alt="yo" />
        <h2>FULL STACK DEVELOPER</h2>
        <p style={{marginBottom: "-60px"}}>CSS | HTML | React | Redux | Express | Sequelize | Postgress | MySQL</p>
        </Head>
      
        <Proyectos/>
<About/>
<CreateDog />
</Router>
    </>
  )
}

export default App
