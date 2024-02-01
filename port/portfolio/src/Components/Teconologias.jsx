import { useEffect } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import colores from "./colores";
import Nav from "./Nav";
import AOS from "aos";
import "aos/dist/aos.css"
import  {SiRedux} from "react-icons/si"

const Galeria = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Tecnologi = styled.div`
    position: relative; 
    background-color: rgb(4, 79, 72, .6);
    width: 96%;
    height: 10%;
    opacity: 0.9;
    text-align: center;
    color: ${colores.white};
    background-color: ${colores.amarillo };
    padding: 2%; 
  
  
  
  `
const Tecnologias = () => {

    useEffect(() => {
        AOS.init();
      }, []);


    return( 

        <Tecnologi style={{color: "white" }}
        data-aos= "fade-left">
        <h3> Javascript, CSS, HTML, React, Router, Redux.
        <br/> Express, Postgress, Sequelize & MySQL. </h3>
         <h3> Git, GitHub, Trello, Slack, Zoom, Google Meet. </h3>
         <SiRedux size="3em" color="white"/>
   </Tecnologi>) 
}


export default Tecnologias