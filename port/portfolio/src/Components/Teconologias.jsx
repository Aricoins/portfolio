import React, { useEffect } from "react";
import styled from "styled-components";
import anime from 'animejs/lib/anime.es.js';
import AOS from "aos";
import "aos/dist/aos.css";
import { SiRedux, SiReactrouter, SiTypescript, SiTailwindcss, SiSlack, SiTrello, SiGithub, SiGit, SiSequelize, SiPostgresql, SiMysql, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const Galeria = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 90%;
  height: 1200px;
  color: white;
  font-size: 1000%;
  margin: auto;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const Tecnologi = styled.div`
  position: relative;
  background-color: rgba(4, 79, 72, 0.6);
  width: 100px;
  height: auto;
  opacity: 0.9;
  text-align: center;
  color: white;
  background-color: yellow;
  padding: 2%;
  z-index: 0;
`;

const Icono = styled.div`
  position: relative;
  z-index: 2000;
  width: 100%;
  height: 100%;
  gap: 5%;
  margin: auto;
  font-size: large;

  &:hover {
    transition: 3s;
    color: #f7a605;
    width: 90%;
    height: 100%;
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const animateIcon = (selector, translateX, translateY, scale) => {
  anime({
    targets: selector,
    loop: true,
    easing: 'easeInOutQuad',
    duration: 10000,
    direction: 'alternate',
    translateX,
    translateY,
    scale,
  });
};
const Tecnologias = () => {
  useEffect(() => {
    AOS.init();

    animateIcon('.anim8', [500, -500, -1000], [200, 500, 700], [0.1, 3, 0, 0]);
    animateIcon('.anim2', [500, -500, -1000], [200, 500, 700], [0.1, 3, 0.8, 0]);
    animateIcon('.anim3', [100, -500, -1000, -10], [200, 500, 700, -700], [1, 0.5, 1, 0]);
    animateIcon('.anim9', [500, -100, 2000, -100], [0, 0, 0, 0], [3, 1, 0.9, 0.2]);
  }, []);
  return (
    <Tecnologi style={{ color: "white", width: "80%", height: "100%", padding: "2%", margin: "auto" }} data-aos="fade-left">
      {/* Images */}
      <Icono className="anim8">
        <img src="https://res.cloudinary.com/dx0htqhaq/image/upload/v1706896494/ymipt3ftutjzkicn7isg.gif" alt="gif" />
      </Icono>
      {/*... (repite el bloque de Icono para cada imagen) */}

      {/* Text */}
      <h3>
        Javascript, Typescript, CSS, Tailwind, HTML, React, Router, Redux.
        <br /> Express, Postgress, Sequelize & MySQL.
      </h3>
      <h3> Git, GitHub, Trello, Slack. </h3>

      {/* Gallery */}
      <Galeria className="tech">
        {[SiCss3, SiHtml5, SiJavascript, SiMysql, SiPostgresql, SiSequelize, SiGit, SiGithub, SiTrello, SiSlack, SiReactrouter, SiRedux, SiTypescript, SiTailwindcss].map((Icon, index) => (
          <Icono key={index}>
            <Icon />
          </Icono>
        ))}
      </Galeria>
    </Tecnologi>
  );
};

export default Tecnologias;
