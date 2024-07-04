import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dogs from '../assets/dogs.png';
import azul from '../assets/azul.png';
import nido from '../assets/nido.png';
import biblio from '../assets/fondo.webp';
import '../App.css';
import { colores } from './colores';

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
font-family: audiowide-regular;
  margin: 0%;
  justify-content: center;
  z-index: 1;
  background-color: ${props => props.currentColor.primero};
  color : ${props => props.currentColor.cuarto};
  @media (max-width: 800px) {
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background-color: ${props => props.currentColor.primero};
  border-radius: 10px;
  box-shadow: 10px 10px 1px rgba(0, 0, 0, 0.25);
  font-size: 1em;
  margin: 5%;
  width: 80%;
  border: 3px solid ${props => props.currentColor.cuarto};
  z-index: 5;
  text-align: center;
  padding: 2%;
  color: ${props => props.currentColor.cuarto};
  font-family: "audiowide";

  &:hover {
    background-color: ${props => props.currentColor.cuarto};
    border-color: ${props => props.currentColor.quinto};
    color: ${props => props.currentColor.primero};
    transition: 2s;
  }

  p {
    font-weight: bold;
    font-size: xx-large;
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
      
      <a href="https://dibiase.net/" target="_blank">
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" 
        
        >
          <h4 > DiBiase.net </h4>
          <b style={{ fontFamily: "audiowide", fontSize: "small", widht:"100%",  color: `${currentColor.quinto}`, padding: "10%", marginBottom: "30px"}}>  Apliación web de Gestión Documental</b>
           <img src={biblio} alt="imagen" style={{borderRadius: "2%", marginTop: "10%"}} />
          <ul>
              <li>NextJS: Framework React para la creación de aplicaciones web.</li>
            <li>Clerk: Integración de autenticación y gestión de usuarios.</li>
            <li>Compatibilidad de Tailwind CSS con PostCSS 7.</li>
            <li>Gestión y optimización de imágenes y vídeos.</li>
            <li>Librería oficial para acceder a las APIs de Google.</li>
            <li>pg-promise: Interfaz de Promesas para la base de datos PostgreSQL.</li>
            <li>styled-components: Librería para estilos CSS en JS.</li>
            <li>sweetalert2: Alertas modales.</li>
            <li>xlsx: Lectura y escritura de archivos Excel.</li>
          </ul>
        </Card>
      </a>

      <a href="https://www.azullago.com/" target="_blank">
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4 > Azul Lago Cooperativa </h4>
          <b style={{ fontFamily: "audiowide", fontSize: "small", widht:"100%",  color: `${currentColor.quinto}`, padding: "10%", marginBottom: "30px"}}> 
            Página web de difusión y desarrollo de marcas </b>
          <img src={azul} alt="imagen"  style={{borderRadius: "2%", marginTop: "10%"}} />
          <ul>
            <li>Sitio web responsivo</li>
            <li>HTML5 y CSS3 válidos</li>
            <li>Framework Bootstrap v5</li>
            <li>Código 100% amigable para desarrolladores y SEO</li>
            <li>Compatible con todos los navegadores web modernos</li>
            <li>Navbar amigable para móviles y usuarios</li>
            <li>Header elegante y responsivo con carrusel</li>
            <li>Animaciones de desplazamiento de página</li>
            <li>Contador de números animado</li>
            <li>Google Map</li>
          </ul>
        </Card>
      </a>

      <a href="https://ecommerce-pf-henry-grupo7.vercel.app/" target="_blank">
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4> Codewave Central </h4>
          <b style={{ fontFamily: "audiowide", fontSize: "small", widht:"100%",  color: `${currentColor.quinto}`, padding: "10%", marginBottom: "30px"}}>  Tienda de comercio electrónico</b>
         
          <img src={nido} alt="imagen" />
          <ul>
            <li>Carpetas organizadas y claras.</li>
            <li>TypeScript para seguridad y legibilidad.</li>
            <li>Next.js para sitios estáticos y SSR.</li>
            <li>Optimización de imágenes con `next-cloudinary & next/image`.</li>
            <li>Gestión de estado predecible con Redux.</li>
            <li>Estilos eficientes con Tailwind CSS.</li>
            <li>Detección de problemas y estilización consistente con ESLint.</li>
            <li>Compatibilidad y eficiencia mejoradas con PostCSS.</li>
            <li>Scripts personalizados para automatización.</li>
          </ul>
        </Card>
      </a>

      <a href="https://nuevamascota.vercel.app/" target="_blank">
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <h4 > Dogs App </h4>
          <b style={{ fontFamily: "audiowide", fontSize: "small", widht:"100%",  color: `${currentColor.quinto}`, padding: "10%", marginBottom: "30px"}}> Aplicación web estándar </b>
         
          <img src={dogs} alt="imagen" />
          <ul>
            <li>Diseño UX/UI planificado y consistente en todas las rutas.</li>
            <li>Filtros y ordenamientos combinados.</li>
            <li>Formulario controlado. Envío condicional.</li>
            <li>Manejo de diferentes estados de Redux.</li>
            <li>Paginación, despliegue y pruebas.</li>
            <li>Código modularizado con responsabilidades bien definidas.</li>
            <li>Seguir buenas prácticas de API Rest.</li>
            <li>BD normalizada, validaciones y restricciones en los modelos.</li>
          </ul>
        </Card>
      </a>

    </Contenedor>
  );
};

export default Proyectos;
