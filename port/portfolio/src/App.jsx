import { useEffect, useState } from 'react'
import Proyectos from './Components/Proyectos'
import styled from 'styled-components'
import './App.css'
import imagen from "../src/assets/yo.png"
import { AOS } from 'aos'
import "aos/dist/aos.css"

const Head = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
background-color: #0d1302;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: green;
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
margin-bottom: -px;
color: white

}
` 
const Img = styled.img`
position:absolute;
width: 35%;
align-self: flex-end;
height:50%;
`

function App() {


  return (
    <>
      <Head >
        <h1>ARIEL GARCIA ROGEL</h1>
        <Img src={imagen} alt="yo" />
        <h2>FULL STACK DEVELOPER</h2>
        <p>CSS | HTML | React | Redux | Express | Sequelize | Postgress | MySQL</p>
       
        <Proyectos/>

      </Head>
      
    </>
  )
}

export default App
