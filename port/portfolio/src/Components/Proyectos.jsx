import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dogs from '../assets/dogs.png';
import azul from '../assets/azul.png';
import nido from '../assets/nido.png';

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  margin: 0%;
  justify-content: center;
  z-index: 1;
  background-color: ${props => props.currentColor.primero};
  color : ${props => props.currentColor.cuarto};
  @media (max-width: 800px) {
    flex-direction: column;
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background-color: ${props => props.currentColor.primero};
  border-radius: 10px;
  box-shadow: 10px 10px 1px rgba(0, 0, 0, 0.25);
  font-size: 0.9em;
  margin: 5%;
  width: 80%;
  border: 3px solid ${props => props.currentColor.cuarto};
  z-index: 5;
  text-align: center;
  padding: 2%;
  color: ${props => props.currentColor.cuarto};

  &:hover {
    background-color: ${props => props.currentColor.cuarto};
    border-color: ${props => props.currentColor.primero};
    transition: 2s;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: ${props => props.currentColor.quinto};
  }

  ul {
    list-style-type: none;
  }

  img {
    width: 95%;
    margin-left: 2.5%;
  }
`;

const Proyectos = ({ currentColor }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <Contenedor currentColor={currentColor}>
      <a href="https://nuevamascota.vercel.app/" target="_blank">
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <h4 style={{ color: currentColor.cuarto }}> Dogs App </h4>
          <img src={dogs} alt="imagen" />
          <ul>
            <li>Planned and consistent UX/UI design across all routes.</li>
            <li>Combined filters and sorts</li>
            <li>Controlled form. Conditional submit.</li>
            <li>Handles different Redux states.</li>
            <li>Paging, deploy and testing.</li>
            <li>Modularized code with well-defined responsibilities.</li>
            <li>Follow good API Rest practices.</li>
            <li>Normalized DB, validations and restrictions in models.</li>
          </ul>
        </Card>
      </a>
      <a href="https://azul-lago.vercel.app/" target="_blank">
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4 style={{ color: currentColor.cuarto }}> Azul Lago Coop </h4>
          <img src={azul} alt="imagen" />
          <ul>
            <li>Responsive website</li>
            <li>Valid HTML5 and CSS3</li>
            <li>Bootstrap v5 Framework</li>
            <li>100% developer-friendly and SEO-friendly code</li>
            <li>Compatible with all modern web browsers</li>
            <li>Mobile-friendly and user-friendly navbar</li>
            <li>Elegant and responsive header with carousel</li>
            <li>Page scroll animations</li>
            <li>Animated number counter</li>
            <li>Google Map</li>
          </ul>
        </Card>
      </a>
      <a href="https://ecommerce-pf-henry-grupo7.vercel.app/" target="_blank">
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <h4 style={{ color: currentColor.cuarto }}> Codewave Central </h4>
          <img src={nido} alt="imagen" />
          <ul>
            <li>Organized and clear folders.</li>
            <li>TypeScript for security and readability.</li>
            <li>Next.js for static sites and SSR.</li>
            <li>Image optimization with `next-cloudinary & next/image`.</li>
            <li>Predictable state management with Redux.</li>
            <li>Efficient styling with Tailwind CSS.</li>
            <li>Problem detection and consistent styling with ESLint.</li>
            <li>Enhanced compatibility and efficiency with PostCSS.</li>
            <li>Custom scripts for automation.</li>
          </ul>
        </Card>
      </a>
    </Contenedor>
  );
};

export default Proyectos;
