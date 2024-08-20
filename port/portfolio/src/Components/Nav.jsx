import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
const Navigator = styled.div`
  position: fixed;
  z-index: 10000000;
  top: 0%;
  width: 100%;
  margin: auto;
  height: 9%;
  background-color: ${(props) => props.$currentcolor.primero};
  opacity: 1;
  display: flex;
  justify-content: stretch;
  align-items: center;
  align-content: center;

  @media screen and (max-width: 700px) {
    top: 0%;
    width: 100%;
    margin: auto;
  }
`;

const Botones = styled.button`
  border: ${(props) => props.$currentcolor.primero} solid 4px;
  color: ${(props) => props.$currentcolor.cuarto};
  background: ${(props) => props.$currentcolor.cuarto};
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
  color: ${(props) => props.$currentcolor.cuarto};
  background-color: ${(props) => props.$currentcolor.cuarto};
  width: 35%;
  display: inline-block;
  border-radius: 8%;
  transition-duration: 1s;
  z-index: 7;

  &.active {
    background-color: ${(props) => props.$currentcolor.verde};
    font-weight: bold;
    color: ${(props) => props.$currentcolor.marron};
  }

  &:hover {
    align-self: center;
    width: 60%;
    color: red;
  }

  button {
    background-color: ${(props) => props.$currentcolor.primero};
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    color: ${(props) => props.$currentcolor.cuarto}; 
      &:hover {
      background-color: ${(props) => props.$currentcolor.marron};
      color: ${(props) => props.$currentcolor.amarillo};
      font-size: 110%;
    }
  }

  &:active {
    background-color: ${(props) => props.$currentcolor.primero};
    color: ${(props) => props.$currentcolor.marron};
  }
`;

function scroll(e) {
  e.preventDefault();
  window.scroll(0, 400);
}
function scrollF(e) {
  e.preventDefault();
  const scrollPosition = window.innerWidth <= 700 ? 7000 : 4000; // Ajusta según sea necesario
  window.scroll(0, scrollPosition);
  console.log(e, "scrol");
}
function scrollO(e) {
  e.preventDefault();
  window.scroll(0, 0);
}

export default function Nav({ currentcolor }) {
  return (
    <>
     <Navigator $currentcolor={currentcolor}>
    <StyledLink to="/home" $currentcolor={currentcolor}>
        <Botones onClick={scrollO} $currentcolor={currentcolor}>
            <FaHome style= {{fontSize: "x-large"}} />
        </Botones>
    </StyledLink>
    <StyledLink to="/form" $currentcolor={currentcolor}>
        <Botones onClick={scroll} $currentcolor={currentcolor}>
            Proyectos
        </Botones>
    </StyledLink>
    <StyledLink to="/about" $currentcolor={currentcolor}>
        <Botones onClick={scrollF} $currentcolor={currentcolor}>
            Contacto
        </Botones>
    </StyledLink>
    {/* <a href={pdf} download="cv.pdf">
        <button style={{ width: '300px', backgroundColor: `${(props) => props.$currentcolor.marron}` }}>Mi CV</button>
    </a> */}
</Navigator>

    </>
  );
}
