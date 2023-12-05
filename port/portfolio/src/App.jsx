import { useEffect, useState } from 'react'
import Proyectos from './Components/Proyectos'
import styled from 'styled-components'
import head from "../src/assets/head2.jpg"
import './App.css'
import imagen from "../src/assets/yo.png";
import  AOS  from 'aos'
import "aos/dist/aos.css"
import CreateDog from './Components/Contacto'
import { BrowserRouter as Router } from 'react-router-dom';
import About from './Components/about'
import colores from './Components/colores'
import Tecnologias from './Components/Teconologias'

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
width: 26.5%;
display: flex;
top: 0;
right: 0%;
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
<img style={{width: "100%", marginTop: "3%"}} src={head} alt="" />
<h2  style={{fontSize:"20px", backgroundColor: 'white'}} data-aos="fade-left"> Proyectos  </h2>
        <Proyectos/>
        <h2  style={{fontSize:"20px", backgroundColor: 'white'}} data-aos="fade-left"> Hablilidades  </h2>
   <Content>  <Img2 src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" alt="" />
<About/>
</Content>
<Tecnologias/>
<h2  style={{fontSize:"20px", backgroundColor: 'white'}} data-aos="fade-left"> Contacto </h2>
<CreateDog />

</Router>
    </>
  )
}

export default App
