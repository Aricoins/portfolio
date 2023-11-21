import { useState } from 'react'
import Proyectos from './Components/Proyectos'
import styled from 'styled-components'
import './App.css'

const Head = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
background-color: #F2F2F2;

h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  text-align: left;
  color: #000000;
} 
h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 2px;
  text-align: left;
  color: #9de020;
  margin-top: 0px;
}
` 



function App() {


  return (
    <>
      <Head >
        <h1>Ariel García Rogel</h1>
        <h2>Full Stack Developer</h2>
        <p>AI | React | Redux | Node | JS | Bootstrap | jQuery | Figma | Wordpress</p>
        <Proyectos/>

      </Head>
      
    </>
  )
}

export default App
