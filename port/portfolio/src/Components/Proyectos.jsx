import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dogs from '../assets/dogs.png'
import azul from '../assets/azul.png'
import nido from '../assets/nido.png'
import colores from './colores';

const Contenedor = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: rgb(242, 242, 242, 0.3);
width: 90%;
justify-content: center;
z-index: -10000;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(1, 1fr);
margin: 0%;


@media (max-width: 800px) {
  display: flex;
    flex-direction: column;
  
  }

@media (max-width: 600px) {
    flex-direction: column;
  
    
  }
  @media (max-width: 400px) {
    flex-direction: column;
    
  
  }
`;
 
const Card = styled.div`
background-color: ${colores.amarillo};
border-radius: 10px;
box-shadow: 10px 10px 1px rgba(0, 0, 0, 0.25);
color: #f8f2f2;
font-size: 1.5em;
margin: 5%;
width: 90%;
border: 8px solid black;
z-index: 5000;
text-align: cenmter;

&:hover{
  background-color: ${colores.verde};
  border-color: ${colores.amarillo};
  transition: 2s;
  
}
p {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #000000;
}
ul{
  list-style-type: none
}
img{
  width: 95%;
  margin-left: 2.5%;
}

`


const Proyectos = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Contenedor>
        <a href="https://nuevamascota.vercel.app/" target="_blank">
          <Card style={{ gridColumnStart:" 1" }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <h4 style={{color: `${colores.verde}`}}> Dogs App </h4>
            <img  src={dogs} alt="imagen" />
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
          style={{ gridColumnStart:" 2" }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h4 style={{color: `${colores.verde}`}}> Azul Lago Coop </h4>
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
          </Card>{" "}
        </a>
  
        <a href="https://ecommerce-pf-henry-grupo7.vercel.app/" target="_blank">
          <Card
          style={{ gridColumnStart:" 3"  }}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <h4 style={{color: `${colores.verde}`}}> Codewave Central </h4>
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
    </>
  );
  
}

export default Proyectos
