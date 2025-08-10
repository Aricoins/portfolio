import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import dogs from "../assets/dogs.png";
import nido from "../assets/nido.png";
import biblio from "../assets/fondo.webp";
import "../App.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

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
    font-size: medium;
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
      <a href="https://apollonia-employee-management-1wy2escvh-aricoins-projects.vercel.app" rel="noreferrer" target="_blank">
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4>🦷 Apollonia Employee Management</h4>
          <p>
            Sistema integral de gestión de empleados para práctica dental. Aplicación full-stack CRUD con base de datos MongoDB, interfaz responsiva y despliegue multi-entorno.
          </p>
          <video src="https://res.cloudinary.com/dbh6nn12c/video/upload/v1754865663/Appolonia_Dental_Practice_njbgct.mp4" autoPlay loop muted />
          <ul>
            <li>Backend: Node.js, Express.js, MongoDB, Mongoose</li>
            <li>Frontend: HTML5, CSS3, JavaScript ES6+</li>
            <li>DevOps: Docker, MongoDB Atlas, Vercel</li>
            <li>11 endpoints RESTful API</li>
            <li>Validación client-side y server-side</li>
            <li>Interfaz responsive mobile-first</li>
          </ul>
        </Card>
      </a>

<Card
  currentColor={currentColor}
  data-aos="flip-left"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000"
>

    <h4>⚖️ LawCase</h4>
    <p>
      Plataforma integral para abogados: gestión de casos, plazos y documentos legales. Eficiencia en la administración de casos, organización de documentos, gestión de clientes y programación de eventos.
    </p>
    <video src="/lawvideo.mp4" autoPlay loop muted />
    <a href="https://law-case-client-dev.onrender.com/" rel="noreferrer" target="_blank">
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
          <h4>🏛️ DiBiase Net</h4>
          <p>
            Aplicación web full-stack que digitaliza 20+ años de documentación legislativa con inteligencia artificial integrada. Primera plataforma municipal con IA en la región que transforma búsquedas de horas a segundos.
          </p>
          <video src="/DibiaseNet demo.mp4" autoPlay loop muted />
          <ul>
            <li>Next.js 14 | TypeScript | PostgreSQL</li>
            <li>Prisma | Clerk Auth | OpenAI API</li>
            <li>OpenRouter | DeepSeek API</li>
            <li>Chatbot IA para consultas legales</li>
            <li>Panel administrativo | Google Sheets</li>
            <li>10,000+ documentos procesados</li>
          </ul>
        </Card>
      </a>

      <Card currentColor={currentColor} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <h4>🌿 Azul Lago Cooperativa</h4>
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

      {/* <a href="https://ecommerce-pf-henry-grupo7.vercel.app/" rel="noreferrer" target="_blank">
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
      </a> */}

      <a href="https://nuevamascota.vercel.app/" target="_blank" rel="noreferrer">
        <Card currentColor={currentColor} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
          <h4>🐕 Dogs App</h4>
          <p>Aplicación web interactiva de adopción de mascotas. Permite a los usuarios explorar, filtrar y ordenar una amplia variedad de razas de perros y crear un nuevo can en la base de datos.</p>
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
          <h4>🔗 WeCode API</h4>
          <p>API REST para la red social WeCode orientada al mundo IT</p>
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
Proyectos.propTypes = {
  currentColor: PropTypes.shape({
    primero: PropTypes.string.isRequired,
    segundo: PropTypes.string.isRequired,
    cuarto: PropTypes.string.isRequired,
    quinto: PropTypes.string.isRequired,
  }).isRequired,
};

export default Proyectos;