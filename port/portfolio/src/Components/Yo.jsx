import React, { useEffect } from 'react';
import styled from 'styled-components';
import perfil from "../assets/perfil.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Desktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: 5%;
  padding: 0px;
  box-shadow: 0 0 5px #000000;
  background-color: ${({ currentColor }) => currentColor.segundo};
  @media (max-width: 768px) {
    flex-direction: column;
  }
 `

const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  width: 90%;
  background-color: ${({ currentColor }) => currentColor.primero};
box-shadow: 0 0 5px #000000;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ currentColor }) => currentColor.cuarto};
  text-align: center;
  background-color: ${({ currentColor }) => currentColor.primero};
  border-radius: 10px;
padding: 5%;
border-radius:   10px 0   10px 0;
box-shadow: 0 0 5px #000000;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.h4`
  font-size: 24px;
  color: ${({ currentColor }) => currentColor.cuarto};
  text-align: center;
  background-color: ${({ currentColor }) => currentColor.primero};
  border-radius: 10px;
  padding: 1%;
  box-shadow: 0 0 5px #000000;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: ${({ currentColor }) => currentColor.cuarto};
  text-align: center;
  background-color: ${({ currentColor }) => currentColor.primero};
  border-radius: 10px;
  padding: 1%;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Image = styled.img`
  width: 25%;
  opacity: 0.2;
  border-radius: 50%;
  margin: 5%;
  box-shadow: 0 0 5px #000000;
  border: 2px solid #656262;
  @media (max-width: 768px) {
    width: 20%;

  }
`;

const Yo = ({ currentColor }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  
  return (
 <Desktop currentColor ={currentColor}>

<Container data-aos="fade-left" currentColor={currentColor}>
      <Title  currentColor={currentColor}>Ariel G. Rogel</Title>
      <Subtitle currentColor={currentColor}>Full Stack Web Developer</Subtitle>
      <Description currentColor={currentColor}>
        Javascript | React | NextJS | TailwindCSS | NodeJS | SQL
      </Description>
      </Container>

      <Image data-aos="fade-rigth" src={perfil} alt="yo" />
      </Desktop>
  );
};

export default Yo;