import { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import anime from 'animejs/lib/anime.es.js';
import Proyectos from './Components/Proyectos';
import About from './Components/about';
import colores from './Components/colores';
import Tecnologias from './Components/Teconologias';
import Foot from './Components/Foot';
import Contacto from "./Components/Contacto.jsx";
import yo from "../../portfolio/src/assets/yo.jpg";
import { Image } from 'cloudinary-react';
import dev from "../src/assets/source.gif"
import Nav from './Components/Nav.jsx';




const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  margin:   10%  0 0 0;

  @media (max-width: 800px) {
    flex-direction: column;
 
  
  }
  @media (max-width: 600px) {
    width: 110%;}
`;


const Img2 = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;

  &:hover {
    color: red;
  }

  @media (max-width: 800px) {
    width: 90%;
    height: auto;
  }
`;

const Bola = styled.img`
  width: 20%;
  position: absolute;
  z-index: 0;
  top: 1%;
  left: 50%;
`;

const Bola4 = styled.img`
  width: 1%;
  position: absolute;
  z-index: 1;
  top: 60%;
  left: 50%;
`;

const Bola5 = styled.img`
  width: 14%;
  position: absolute;
  z-index: 0;
  top: 2%;
  left: 50%;
`;

const Bola6 = styled.img`
  width: 12%;
  position: absolute;
  z-index: 0;
  top: 4%;
  left: 50%;
`;

const Bola7 = styled.img`
  width: 10%;
  position: absolute;
  z-index: -100;
  top: 8%;
  left: 50%;
`;

const H1 = styled.h1`
  font-size: 50px;
  width: 20%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${colores.azul};

  &:hover {
    grid-template: 1fr / 1fr var(--innerTrack, 0);
  }
`;

const StyledDiv = styled.div`
  width: 90%;
  z-index: -10;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const StyledDiv2 = styled.div`
  width: 90%;
  z-index: -10;
  margin: auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

function App() {
  const cloudName = 'dx0htqhaq';
  const publicId = '7135d414785984bdd3b3e7fc8753733a';

  useEffect(() => {
   // AOS.init();
    anime({
      targets: '.anim',
      loop: true,
      easing: 'linear',
      duration: 10000,
      direction: 'alternate',
      translateX: [{ value: -400, duration: 20000, delay: 0 }],
      translateY: [{ value: 400, duration: 10000, delay: 0 },
        { value: 2000, duration: 10000, delay: 0 }],
      scale: [{ value: 0.2, easing: 'easeOutSine', duration: 20000 }, { value: 1, duration: 10000 }],
    });

    anime({
      targets: '.anim5',
      loop: true,
      easing: 'linear',
      duration: 10000,
      direction: 'alternate',
      translateX: [{ value: -400, duration: 10000, delay: 0 }],
      translateY: [{ value: 400, duration: 10000, delay: 0 }],
      scale: [{ value: 0.2, easing: 'easeOutSine', duration: 500 }, { value: 0.5, easing: 'easeInOutQuad', duration: 1200 }],
    });

  }, []);

const gif= "https://res.cloudinary.com/dx0htqhaq/image/upload/v1706896494/ymipt3ftutjzkicn7isg.gif"
  return (
    <>
    
      <Router>
      <Nav style={{ width: '90%', margin: "auto"  }}/>   
      <Content>
  
    <img data-aos="fade-up" style={{ width: "90%", margin: "3% 0 0 0", zIndex: "1000" }} src={yo} alt="head" />
    <StyledDiv2 >

    <Img2 className="anime" data-aos="fade-right" src={dev} alt="devimg" />


    <About />
  </StyledDiv2>

  <div style={{ width: '90%',  zIndex: 0  }}>
    <Bola className="anim" src={gif} alt="gif" />
  </div>

  <StyledDiv >

    <h2 style={{ fontSize: "20px", backgroundColor: 'white' }}> Proyectos </h2>
    <Proyectos />
    </StyledDiv >


<StyledDiv >

    <h2 style={{ fontSize: "20px", zIndex: -1, backgroundColor: 'white' }} data-aos="fade-up"> Habilidades </h2>
    <Tecnologias style={{ zIndex: 2 }} />
    </StyledDiv >


  <div style={{ width: '100%', zIndez: 0 }}>
    <Bola5 className="anim5" src={gif}  alt="gif" />
  </div>

  <StyledDiv >

    <h2 style={{ fontSize: "20px", zIndex: 2, backgroundColor: 'white' }} data-aos="fade-up"> Contacto </h2>
    <Contacto />
    </StyledDiv >


    <StyledDiv >

    <Foot />
    </StyledDiv >

</Content>
      </Router>
    </>
  );
}

export default App;
