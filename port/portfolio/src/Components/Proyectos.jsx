import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import dogs from "../assets/dogs.png";
import nido from "../assets/nido.png";
import biblio from "../assets/fondo.webp";
import "../App.css";
import { useEffect } from "react";

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: audiowide-regular;
  margin: 0;
  justify-content: center;
  z-index: 1;
  background-color: ${(props) => props.currentColor.primero};
  color: ${(props) => props.currentColor.cuarto};

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: ${(props) => props.currentColor.primero};
  border-radius: 10px;
  box-shadow: 10px 10px 1px rgba(0, 0, 0, 0.25);
  font-size: 1em;
  margin: 5%;
  width: 80%;
  border: 3px solid ${(props) => props.currentColor.cuarto};
  z-index: 5;
  text-align: center;
  padding: 2%;
  color: ${(props) => props.currentColor.cuarto};
  font-family: "audiowide";

  &:hover {
    background-color: ${(props) => props.currentColor.cuarto};
    border-color: ${(props) => props.currentColor.quinto};
    color: ${(props) => props.currentColor.primero};
    transition: 0.001s linear;
  }

  h4 {
    font-family: "Verdana";
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-family: "Verdana";
    font-size: large;
    margin-bottom: 15px;
    color: ${(props) => props.currentColor.quinto};

  }

  b {
    font-family: "Verdana";
    font-size: small;
    color: ${(props) => props.currentColor.quinto};
    padding: 10%;
    margin-bottom: 30px;
  }

  ul {
    list-style-type: none;
    font-family: "Verdana";
    padding-left: 0;
  }

  img {
    width: 95%;
    margin: 2.5% auto;
    border-radius: 2%;
  }

  video {
    width: 100%;
    border-radius: 5%;
    margin-top: 10%;
  }

  button {
    padding: 10px 20px;
    background-color: ${(props) => props.currentColor.segundo};
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    margin-top: 20px;
  }
`;

const Proyectos = ({ currentColor }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Contenedor currentColor={currentColor}>
<Card
  currentColor={currentColor}
  data-aos="flip-left"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000"
>

    <h4>LawCase</h4>
    <p>
      Plataforma integral para abogados: gestión de casos, plazos y documentos legales. Eficiencia en la administración de casos, organización de documentos, gestión de clientes y programación de eventos.
    </p>
    <video src="/lawvideo.mp4" autoPlay loop muted />
    <a href="https://s17-09-n-node-react-2.onrender.com/" rel="noreferrer" target="_blank">
      <button style={{ backgroundColor: currentColor.segundo }}>Ir a la web</button>
    </a>
    <ul>
      <li>Autenticación con token refresh.</li>
      <li>Gestión multimedia con Cloudinary.</li>
      <li>Manejo de datos con PostgreSQL.</li>
      <li>Estilos con MaterialUI y Tailwind.</li>
      <li>Desarrollado con TypeScript, React, Vite, Tailwind, MUI, Express, Swagger, Prisma, MongoDB y JWT. Implementado con metodología agile.</li>
    </ul>
</Card>

      <a href="https://dibiase.net/" rel="noreferrer" target="_blank">
        <Card currentColor={currentColor} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <h4>DiBiase Net</h4>
          <p>
            WebApp para la gestión y visualización de colecciones de libros y
            documentos archivísticos. Focalizada en la despapelización y mejora
            de tiempos de búsqueda.
          </p>
          <img src={biblio} alt="imagen" />
          <ul>
            <li>Autenticación con Clerk.</li>
            <li>Gestión multimedia con Cloudinary.</li>
            <li>Manejo de datos con PostgreSQL.</li>
            <li>Next.js 14 on Vercel.</li>
            <li>Estilos con styled-components.</li>
            <li>Lectura y escritura de archivos Excel con xlsx.</li>
          </ul>
        </Card>
      </a>

      <Card currentColor={currentColor} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <h4>Azul Lago Cooperativa</h4>
        <p>
          Landing page centrada en la visualización de marcas y proyectos y productos naturales.
        </p>
        <video src="https://res.cloudinary.com/dx0htqhaq/video/upload/v1727229863/cjh109sdvobrlcphfmrl.mp4" autoPlay loop muted />
        <a href="https://www.azullago.com/" rel="noreferrer" target="_blank">
          <button> Ir a la web</button>
        </a>
        <ul>
          <li>Sitio web completamente responsivo.</li>
          <li>Animaciones integradas con WowJS.</li>
          <li>HTML5, CSS3 y JS.</li>
          <li>Diseño maquetado en Figma.</li>
        </ul>
      </Card>

      <a href="https://ecommerce-pf-henry-grupo7.vercel.app/" rel="noreferrer" target="_blank">
        <Card currentColor={currentColor} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <h4>Codewave Central</h4> 
          <p>Tienda de comercio electrónico con dashboard para la gestión de productos y usuarios. Pasarela de pagos integrada.</p>
          <img src={nido} alt="imagen" />
          <ul>
            <li>TypeScript para seguridad y legibilidad.</li>
            <li>Next.js para sitios estáticos y SSR.</li>
            <li>Optimización de imágenes con next-cloudinary y next/image.</li>
            <li>Gestión de estado con Redux.</li>
            <li>Estilos con Tailwind CSS.</li>
            <li>Automatización con scripts personalizados.</li>
          </ul>
        </Card>
      </a>

      <a href="https://nuevamascota.vercel.app/" target="_blank" rel="noreferrer">
        <Card currentColor={currentColor} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
          <h4>Dogs App</h4>
          <b>
            Aplicación web interactiva de adopción de mascotas. Permite a los usuarios explorar una amplia variedad de razas de perros, buscar por nombre, filtrar por características, ordenar alfabéticamente o por       peso, y crear nuevas razas de perros en la base de datos.
          </b>
          <img src={dogs} alt="imagen" />
          <ul>
            <li>Diseño UX/UI planificado.</li>
            <li>Filtros y ordenamientos combinados.</li>
            <li>Formulario controlado y validaciones.</li>
            <li>Gestión de estado con Redux.</li>
            <li>Paginación y pruebas unitarias.</li>
          </ul>
        </Card>
      </a>

      <a href="https://github.com/Aricoins/APIRest" target="_blank" rel="noreferrer">
        <Card currentColor={currentColor} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
          <h4>WeCode API</h4>
          <b>API REST para la red social WeCode orientada al mundo IT</b>
          <img src='./apirest.jpg' alt="imagen" />
          <ul>
            <li>Endpoints seguros con JWT y token de acceso.</li>
            <li>Metodología Agile en el desarrollo.</li>
            <li>Pruebas automatizadas con Jest y Supertest.</li>
            <li>Base de datos PostgreSQL.</li>
            <li>Documentación con Swagger.</li>
          </ul>
        </Card>
      </a>
    </Contenedor>
  );
};

export default Proyectos;
