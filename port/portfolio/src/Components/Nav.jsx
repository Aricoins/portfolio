import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import pdf from '../assets/cv.pdf';

const Navigator = styled.div`
  position: fixed;
  z-index: 10000000;
  top: 0%;
  width: 100%;
  margin: auto;
  height: 9%;
  background-color: ${(props) => props.$currentColor.primero};
  opacity: 1;
  display: flex;
  justify-content: stretch;
  align-items: center;
  align-content: center;

  @media screen and (max-width: 700px) {
    top: 100%;
    width: 90%;
    margin: auto;
  }
`;

const Botones = styled.button`
  border: ${(props) => props.$currentColor.primero} solid 4px;
  color: ${(props) => props.$currentColor.cuarto};
  background: ${(props) => props.$currentColor.cuarto};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 2px;
  border-radius: 0% 0% 0% 10%;
  transition-duration: 0.5s;
  z-index: 70000000;
  padding: 0px;
  transition-duration: 1s;
  width: 100%;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.$currentColor.cuarto};
  background-color: ${(props) => props.$currentColor.cuarto};
  width: 35%;
  display: inline-block;
  border-radius: 8%;
  transition-duration: 1s;
  z-index: 7;

  &.active {
    background-color: ${(props) => props.$currentColor.verde};
    font-weight: bold;
    color: ${(props) => props.$currentColor.marron};
  }

  &:hover {
    align-self: center;
    width: 60%;
    color: red;
  }

  button {
    background-color: ${(props) => props.$currentColor.primero};
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    color: ${(props) => props.$currentColor.cuarto}; 
      &:hover {
      background-color: ${(props) => props.$currentColor.marron};
      color: ${(props) => props.$currentColor.amarillo};
      font-size: 110%;
    }
  }

  &:active {
    background-color: ${(props) => props.$currentColor.primero};
    color: ${(props) => props.$currentColor.marron};
  }
`;

function scroll(e) {
  e.preventDefault();
  window.scroll(0, 900);
}
function scrollF(e) {
  e.preventDefault();
  window.scroll(0, 4100);
}
function scrollO(e) {
  e.preventDefault();
  window.scroll(0, 0);
}

export default function Nav({ currentColor }) {
  return (
    <>
     <Navigator $currentColor={currentColor}>
    <StyledLink to="/home" $currentColor={currentColor}>
        <Botones onClick={scrollO} $currentColor={currentColor}>
            Inicio
        </Botones>
    </StyledLink>
    <StyledLink to="/form" $currentColor={currentColor}>
        <Botones onClick={scroll} $currentColor={currentColor}>
            Proyectos
        </Botones>
    </StyledLink>
    <StyledLink to="/about" $currentColor={currentColor}>
        <Botones onClick={scrollF} $currentColor={currentColor}>
            Redes
        </Botones>
    </StyledLink>
    <a href={pdf} download="cv.pdf">
        <button style={{ width: '300px', backgroundColor: `${(props) => props.$currentColor.marron}` }}>Mi CV</button>
    </a>
</Navigator>

    </>
  );
}
