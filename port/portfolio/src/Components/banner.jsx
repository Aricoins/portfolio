import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import lat from '../assets/lat.png';
//import { useInView } from '@researchgate/react-intersection-observer';

// Define the animations using keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Animación para hacer crecer el texto
const grow = keyframes`
  0% {
    font-size: 2rem;
  }
  100% {
    font-size: 10rem;
    opacity: 0; /* Ajuste para desvanecer el texto al crecer */
  }
`;

// Styled-components outside the functional component
const BannerWrapper = styled.div`
  position: relative;
  width: 300px; /* Ancho fijo del banner */
  height: 250px; /* Alto fijo del banner */
  overflow: hidden; /* Para ocultar el texto que se sale del marco */
  cursor: pointer; /* Cambiar cursor a mano */
`;

const SceneWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity ${(props) => props.duration}s ease-in-out;
`;

const Text = styled.span`
  font-size: 2rem;
  font-family: 'Audiowide', cursive;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgText};
  padding: 1rem;
  border-radius: 10%;
  white-space: nowrap; /* Evita que el texto se ajuste automáticamente */
  animation: ${(props) =>
    props.active
      ? css`
          ${fadeIn} 0.5s ease-out,
          ${slideIn} 1s ease-out,
          ${props.lastScene ? grow : 'none'} 1s ease-out forwards
        `
      : 'none'};
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 5%;
  width: 90%;
  height: 90%;
  justify-content: center;
  z-index: 1; /* Ajuste para que el logo no esté detrás del texto crecido */
  object-fit: contain; /* Ajusta el tamaño del logo manteniendo la proporción */
  animation: ${(props) =>
    props.active
      ? css`
          ${fadeIn} 1s ease-out,
          ${slideIn} 1s ease-out
        `
      : 'none'};
`;

const Banner = () => {
  const coloresBlack = {
    primero: "#1a1625",
    segundo: "#575757",
    tercero: "#908d96",
    cuarto: "#7a5af5",
    quinto: "#ba9ffb",
    sexto: "#ffffff", // Agregamos el sexto color para el texto
  };

  const scenes = [
    { text: 'click!', textColor: coloresBlack.segundo, bgColor: coloresBlack.segundo, duration: 1.5 }, 
    { text: 'DESARROLLO', textColor: coloresBlack.sexto, bgColor: coloresBlack.primero, duration: 0.8 },
    { text: 'DISEÑO', textColor: coloresBlack.primero,  bgColor: coloresBlack.sexto, duration: 0.8 },
    { text: 'WEB', textColor: coloresBlack.sexto,  bgColor: coloresBlack.primero, duration: 0.8 },
    { text: 'APP', textColor: coloresBlack.primero, bgColor: coloresBlack.sexto, duration: 0.8 },
    { text: 'AI', textColor: coloresBlack.sexto, bgColor: coloresBlack.cuarto, duration: 0.8 },
    { text: 'Acelerá', bgText: coloresBlack.cuarto, textColor: coloresBlack.sexto, bgColor: coloresBlack.primero, duration: 0.7 },
    { text: 'tu', bgText: coloresBlack.cuarto, textColor: coloresBlack.sexto, bgColor: coloresBlack.primero, duration: 0.6 },
    { text: 'producto', bgText: coloresBlack.cuarto, textColor: "yellow", bgColor: coloresBlack.primero, duration: 0.3 },
    { text: 'idea', bgText: coloresBlack.cuarto, textColor: "yellow", bgColor: coloresBlack.primero, duration: 0.3 },
    { text: 'empresa', bgText: coloresBlack.cuarto, textColor: "yellow", bgColor: coloresBlack.primero, duration: 0.3 },
    { text: 'con', bgText: coloresBlack.cuarto, textColor: coloresBlack.sexto, bgColor: coloresBlack.primero, duration: 0.4 },
    { text: 'tecnologia', bgText: coloresBlack.cuarto, textColor: coloresBlack.sexto, bgColor: coloresBlack.primero, duration: 0.3 },
    { text: 'avanzada', bgText: coloresBlack.cuarto, textColor: coloresBlack.sexto, bgColor: coloresBlack.primero, duration: 0.3 },
    { text: '', bgColor: '#ffffff', duration: 2 }, // Escena final con pantalla en blanco
    { text: 'ingesá acá', textColor: coloresBlack.cuarto, bgColor: coloresBlack.sextp, duration: 1.5 }, // Escena final con pantalla en blanco
  ];

  const [currentScene, setCurrentScene] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (inView) => {
    if (inView) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  };

  const options = {
    onChange: handleChange,
    triggerOnce: false,
  };



  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setCurrentScene((prev) => (prev + 1) % scenes.length);
      }, scenes[currentScene].duration * 1000);

      return () => clearInterval(interval);
    }
  }, [currentScene, isAnimating]);

  return (
    <BannerWrapper >
      {scenes.map((scene, index) => (
        <SceneWrapper
          key={index}
          bgColor={scene.bgColor}
          duration={scene.duration}
          active={index === currentScene && isAnimating}
        >
          <Text bgText={scene.bgText} textColor={scene.textColor} lastScene={index === scenes.length - 1}>
            {scene.text}
          </Text>
        </SceneWrapper>
      ))}
      {currentScene === scenes.length - 2 && (
        <Logo
          src={lat}
          alt="Latitud42 Logo"
          active={isAnimating}
        />
      )}
    </BannerWrapper>
  );
};

export default Banner;