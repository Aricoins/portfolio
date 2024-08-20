// src/Components/Foot.js

import styled, {keyframes} from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import lat from '../../src/assets/lat.png';
import latw from '../../src/assets/latw.png'


const shine = keyframes`
  0% {
    font-size: 1rem;
  }
  15% {
    font-size: 1rem;
  }
  30% {
    font-size: 1.1rem;
  }
  45% {
    font-size: 1.1rem;
  }
  60% {
    font-size: 1 rem;
  }
  100% {
    font-size: 1rem;
  }`

function scrollY(e) {
  e.preventDefault();
  window.scroll(0, 0);
}

const Foot = ({ currentColor, theme }) => {



  const Corazon = styled.p`
  animation: ${shine} 1s infinite;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  align-self: center
  
  ` 
  
  
  const Footer = styled.footer`
    background-color: ${({ currentColor }) => currentColor.primero};
    color: ${({ currentColor }) => currentColor.cuarto};
  
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    width: 90%;
    margin: auto;
    border-top: ${({ currentColor }) => `2px solid ${currentColor.quinto}`};
    `;
  
  const SocialLinks = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30%;
  `;
  
  


  return (
    <Footer currentColor={currentColor}>
      <div  style={{
  fontSize: "small", 
  margin: "10%",   
  display: "grid",
  gridGap: "10px",
  gridTemplateColumns: "repeat(4, [col] 100px )" ,
  gridTemplateRows: "repeat(3, [row] auto  )",
  backgroundColor: "#fff",
  color: "#444"}}>
<p width="100px" style= {{ gridColumn: "col / span 2",
  gridRow: "row", display: "flex", justifyContent: "center"}}> Todos los derechos reservados | 2024 <br /> 
<a href="https://github.com/Aricoins/portfolio" 
style={{fontSize: "x-small"}}> Repositorio Open Source </a> </p>
</div>
<div  >
   <SocialLinks style={{ gridColumn: "col  / span 2",
    gridRow: "row 2"}}  >
        <a href="https://github.com/Aricoins" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/aegr/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://x.com/latitud42_tech" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
      </SocialLinks>
      </div>
     <div style={{gridColumn: "col  / span 4",
      gridRow: "row 3"}}>
 
      <img src={theme === "light" ? lat : latw} style={{width: "80px"}}/>
       <p> desarollo con latidos </p>
       </div>
       <div style={{widht: "80px", height: "80px", position: "absolute", marginLeft: "43%" }}>
       <Corazon onClick={scrollY} > ❤️ </Corazon> 
       </div>
       </Footer>
  );
};


export default Foot;
