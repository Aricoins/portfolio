import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import lat from '../assets/lat.png';

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

const grow = keyframes`
  0% {
    font-size: 2rem;
  }
  100% {
    font-size: 10rem;
  }
`;

// Color palette
const colors = {
  primary: "#1a1625",
  secondary: "#575757",
  tertiary: "#908d96",
  quaternary: "#7a5af5",
  quinary: "#ba9ffb",
  white: "#ffffff",
};

// Styled-components outside the functional component
const BannerWrapper = styled.div`
  position: relative;
  width: 300px; /* Fixed banner width */
  height: 250px; /* Fixed banner height */
  overflow: hidden; /* Hide text overflowing the frame */
  cursor: pointer; /* Change cursor to pointer */
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
  white-space: nowrap; /* Prevent text from wrapping */
  animation: ${(props) =>
    props.active
      ? css`
     
          ${props.lastScene ? grow : 'none'} 1s ease-out forwards
        `
      : 'none'};
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Ensure the logo is not behind the enlarged text */
  object-fit: contain; /* Adjust the size of the logo while maintaining aspect ratio */
  animation: ${(props) =>
    props.active
      ? css`
          ${fadeIn} 1s ease-out,
          ${slideIn} 1s ease-out
        `
      : 'none'};
`;

const Banner = () => {
  const scenes = [
    { text: 'click!', 
        textColor: colors.secondary, 
        bgColor: colors.secondary, 
        duration: 1.5 },
    { text: 'DESARROLLO', 
        textColor: colors.white, 
        bgColor: colors.primary, 
        duration: 0.8 },
    { text: 'DISEÑO', 
        textColor: colors.primary, 
        bgColor: colors.white, 
        duration: 0.8 },
    { text: 'WEB', 
        textColor: colors.white, 
        bgColor: colors.primary, 
        duration: 0.8 },
    { text: 'APP', 
        textColor: colors.primary, 
        bgColor: colors.white, 
        duration: 0.8 },
    { text: 'AI', 
        textColor: colors.white, 
        bgColor: colors.quaternary, 
        duration: 0.8 },
    { text: 'ACELERÁ', 
        bgText: colors.quaternary, 
        textColor: colors.white, 
        bgColor: colors.primary, 
        duration: 0.7 },
    { text: 'TU', 
        bgText: colors.quaternary, 
        textColor: colors.white, 
        bgColor: colors.primary, 
        duration: 0.6 },
    { text: 'EMPRESA', 
        bgText: colors.secondary, 
        textColor: colors.white, 
        bgColor: colors.primary, 
        duration: 0.3 },
    { text: 'C0N', 
        bgText: colors.quaternary, 
        textColor: colors.white, 
        bgColor: colors.primary, 
        duration: 0.3 },
    { text: 'TECNOLOGÍA', 
        bgText: colors.quaternary, 
        textColor: colors.white, 
        bgColor: colors.primary, 
        duration: 0.3 },
    { text: 'AVANZADA', 
        bgText: colors.quaternary, 
        textColor: colors.white, 
        bgColor: colors.primary, 
        duration: 0.3 },
    { text: '', 
        bgColor: colors.white, 
        duration: 2 }, // Final scene with white background
    { text: 'ingesá acá', 
        textColor: colors.white, 
        bgColor: colors.quinary, 
        duration: 1.5 }, // Final scene with text
  ];

  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, scenes[currentScene].duration * 1000);

    return () => clearInterval(interval);
  }, [currentScene]);

  return (
    <BannerWrapper>
      {scenes.map((scene, index) => (
        <SceneWrapper
          key={index}
          bgColor={scene.bgColor}
          duration={scene.duration}
          active={index === currentScene}
        >
          <Text bgText={scene.bgText} textColor={scene.textColor} lastScene={index === scenes.length - 1}>{scene.text}</Text>
        </SceneWrapper>
      ))}
      {currentScene === scenes.length - 2 && (
        <Logo
          src={lat}
          alt="Latitud42 Logo"
          active={true}
        />
      )}
    </BannerWrapper>
  );
};

export default Banner;
