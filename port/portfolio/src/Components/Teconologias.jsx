import React, { useEffect } from "react";
import styled from "styled-components";
import anime from 'animejs/lib/anime.es.js';
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiPostgresql, SiSequelize, SiGit, SiGithub, SiTrello, SiSlack, SiReactrouter, SiRedux, SiTypescript, SiTailwindcss } from 'react-icons/si';
import AOS from 'aos';


// const Bola8 = styled.img`
//   width: 40%;
//   position: absolute;
//   z-index: 2;
//   bottom: 50%;
//   left: 30%;
//   z-index: 0;
// `;

const Tecnologi = styled.div`
  position: relative;
  background-color: ${({ currentColor }) => currentColor.green};
  width: 100%;
  height: 100%;
  opacity: 0.9;
  text-align: center;
  font-size: 3em;
  color: ${({ currentColor }) => currentColor.quinto};
  text-decoration: solid 1px ${({ currentColor }) => currentColor.cuarto};
  padding: 1%;   
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  @media (max-width: 800px) {
    margin: 0;
    font-size: 0.8em;
  }
`;

const Galeria = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  width: 80%;
  background-color: ${({ currentColor }) => currentColor.green};
  z-index: 1;
  font-size: 1.5em  ;

  &:hover {
    transition: 3s;
    color: ${({ currentColor }) => currentColor.highlight};
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    font-size: 1em;
  }
`;

const Icono = styled.div`
  grid-auto-flow: column;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: max-content 1fr;
  font-size: 1.5em;
  padding: 10%;
  gap: 5%;
  margin: auto;
  transition: 2s;
  color: ${({ currentColor }) => currentColor.cuarto};

  &:hover {
    transition: 1s;
scale: 1.5;

    color: ${({ currentColor }) => currentColor.quinto};
  }

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    font-size: 1em;
    gap: 3%;
  }

  @media (max-width: 800px) {
    grid-template-columns: 15% 15% 15% 15% 15% 15% 15%;
    grid-template-rows: 50% 50%;
    font-size: xx-large;
    gap: 1%;
  }
`;

const Bola9 = styled.img`
  width: 2%;
  position: absolute;
  z-index: 1;
  top: 1%;
  left: 50%;
`;

const Tecnologias = ({ currentColor }) => {
    useEffect(() => {
        AOS.init();

        anime({
            targets: '.anim8',
            loop: true,
            easing: 'easeInOutQuad',
            duration: 100000,
            direction: 'alternate',
            translateX: [{ value: 200, duration: 10000, delay: 0 }, { value: -200, duration: 30000, delay: 0 }],
            translateY: [{ value: 200, duration: 10000, delay: 0 }, { value: 6000, duration: 30000, delay: 0 }],
            scale: [{ value: 0.1, duration: 10000, delay: 0 }, { value: 0.6, duration: 20000, delay: 0 }, { value: 0.1, duration: 10000, delay: 0 }],
        });

        anime({
            targets: '.anim2',
            loop: true,
            easing: 'easeInOutQuad',
            duration: 10000,
            direction: 'alternate',
            translateX: [{ value: 400, duration: 5700, delay: 0 }, { value: -400, duration: 2500, delay: 0 }],
            translateY: [{ value: 2200, duration: 5700, delay: 0 }, { value: 1000, duration: 2500, delay: 0 }, { value: 400, duration: 2500, delay: 0 }],
            scale: [{ value: 0.1, duration: 4700, delay: 0 }, { value: 2, duration: 2500, delay: 0 }, { value: 0.6, duration: 2500, delay: 0 }],
        });

        anime({
            targets: '.anim3',
            loop: true,
            easing: 'easeInOutQuad',
            duration: 10000,
            direction: 'alternate',
            translateX: [{ value: 100, duration: 5700, delay: 0 }, { value: -400, duration: 2500, delay: 0 }, { value: -400, duration: 2500, delay: 0 }],
            translateY: [{ value: 2500, duration: 5700, delay: 0 }, { value: 1000, duration: 2500, delay: 0 }, { value: 400, duration: 2500, delay: 0 }],
            scale: [{ value: 1, duration: 5700, delay: 0 }, { value: 2, duration: 2500, delay: 0 }, { value: 1, duración: 2500, delay: 0 }]
        });

        anime({
            targets: '.anim9',
            loop: true,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            translateX: [{ value: 400, duration: 5000, delay: 0 }, { value: -400, duration: 5000, delay: 0 }],
            translateY: [{ value: 0, duration: 5000, delay: 0 }, { value: -1500, duration: 5000, delay: 0 }],
            scale: [{ value: 2, duration: 5000, delay: 0 }, { value: 1, duración: 5000, delay: 0 }],
        });
    }, []);

    const bola = "https://res.cloudinary.com/dx0htqhaq/image/upload/v1706896494/ymipt3ftutjzkicn7isg.gif";

    return (
        <>
            <Tecnologi currentColor={currentColor} data-aos="fade-up">
                <h3>Javascript, Typescript, Tailwind, HTML, React Router, Redux, Next.js, Express, Postgres, Sequelize, SQL, Git</h3>
                <Galeria currentColor={currentColor} className="tech">
                    <Icono currentColor={currentColor}><SiCss3 className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiHtml5 className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiJavascript className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiMysql className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiPostgresql className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiSequelize className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiGit className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiGithub className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiTrello className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiSlack className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiReactrouter className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiRedux className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiTypescript className="tech" /></Icono>
                    <Icono currentColor={currentColor}><SiTailwindcss className="tech" /></Icono>
                </Galeria>
            </Tecnologi>
        </>
    );
};

export default Tecnologias;