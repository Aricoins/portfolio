import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import dogs from "../assets/dogs.png";
//import azul from '../assets/azul.png';
import nido from "../assets/nido.png";
import biblio from "../assets/fondo.webp";
import "../App.css";
import { useEffect } from "react";

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: audiowide-regular;
  margin: 0%;
  justify-content: center;
  z-index: 1;
  background-color: ${(props) => props.currentColor.primero};
  color: ${(props) => props.currentColor.cuarto};
  @media (max-width: 800px) {
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
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
    transition: 2s;
  }

  p {
    font-weight: bold;
    font-size: xx-large;
    line-height: 28px;
    text-align: center;
    color: ${(props) => props.currentColor.quinto};
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
      <Card
        currentColor={currentColor}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <a href="https://dibiase.net/" rel="noreferrer" target="_blank">
          <h4
            style={{
              fontFamily: "Verdana",
              fontSize: "1.5em",
              marginBottom: "10px",
            }}
          >
            LawCase | Software para abogados
          </h4>
          
          <p
            style={{
              fontFamily: "Verdana",
              fontSize: "12px",
              marginBottom: "15px",
            }}
          >
            Plataforma integral para la gestión de casos, plazos y documentos
            legales. Eficiencia en la administración de casos, organización de
            documentos, gestión de clientes y programación de eventos.
          </p>
        </a>

        <video
          style={{ width: "100%", borderRadius: "5%", marginTop: "10%" }}
          src="/lawvideo.mp4"
          autoPlay
          loop
          muted
        />
        <a
          href="https://https://s17-09-n-node-react-2.onrender.com/"
          rel="noreferrer"
          target="_blank"
        >
              <ul style={{ fontFamily: "Verdana", marginTop: "15px" }}>
            <li>Autenticación con token refresh.</li>
            <li>Gestión multimedia con Cloudinary.</li>
            <li>Manejo de datos con PostgreSQL.</li>
            <li>Estilos con MaterialUI y Tailwind.</li>
         <li>   Desarrollado con TypeScript, React, Vite, Tailwind, MUI, Express,
            Swagger, Prisma, MongoDB y JWT. Implementado con metodología ágil.
            </li>
            </ul>
            </a>
      </Card>

      <a href="https://dibiase.net/" rel="noreferrer" target="_blank">
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4
            style={{
              fontFamily: "Verdana",
              fontSize: "1.5em",
              marginBottom: "10px",
            }}
          >
            DiBiase Net
          </h4>
          <p style={{ fontFamily: "Verdana", fontSize: "12px" }}>
            WebApp para la gestión y visualización de colecciones de libros y
            documentos archivísticos. Focalizada en la despapelización y mejora
            de tiempos de búsqueda.
          </p>
          <img
            src={biblio}
            alt="imagen"
            style={{ borderRadius: "2%", marginTop: "10%" }}
          />
          <ul style={{ fontFamily: "Verdana", marginTop: "15px" }}>
            <li>Autenticación con Clerk.</li>
            <li>Gestión multimedia con Cloudinary.</li>
            <li>Manejo de datos con PostgreSQL.</li>
            <li>Next.js 14 on Vercel.</li>
            <li>Estilos con styled-components.</li>
            <li>Lectura y escritura de archivos Excel con xlsx.</li>
          </ul>
        </Card>
      </a>

      <Card
        currentColor={currentColor}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h4
          style={{
            fontFamily: "Verdana",
            fontSize: "1.8em",
            marginBottom: "10px",
          }}
        >
          Azul Lago Cooperativa
        </h4>
        <p
          style={{
            fontFamily: "Verdana",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Landing page centrada en la visualización de marcas y proyectos
          utilizando HTML5, Bootstrap, jQuery, WowJS y animaciones responsivas
          para mejorar la experiencia del usuario.
        </p>
        <video
          style={{ width: "100%", borderRadius: "5%", marginTop: "10%" }}
          src="https://res.cloudinary.com/dx0htqhaq/video/upload/v1727229863/cjh109sdvobrlcphfmrl.mp4"
          autoPlay
          loop
          muted
        />
        <a
          href="https://www.azullago.com/"
          rel="noreferrer"
          target="_blank"
          style={{ display: "block", textAlign: "center", marginTop: "20px" }}
        >
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: `${currentColor.quinto}`,
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "1em",
              cursor: "pointer",
            }}
          >
            Visita la Landing Page
          </button>
        </a>
        <ul
          style={{
            fontFamily: "Verdana",
            fontSize: "13px",
            marginTop: "20px",
            paddingLeft: "20px",
          }}
        >
          <li>Sitio web completamente responsivo.</li>
          <li>Animaciones integradas con WowJS.</li>
          <li>HTML5, CSS3 y JS.</li>
          <li>Diseño maquetado en Figma.</li>
        </ul>
      </Card>

      <a
        href="https://ecommerce-pf-henry-grupo7.vercel.app/"
        rel="noreferrer"
        target="_blank"
      >
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4 style={{ fontFamily: "Verdana" }}>Codewave Central</h4>
          <b
            style={{
              fontFamily: "Verdana",
              fontSize: "small",
              width: "100%",
              color: `${currentColor.quinto}`,
              padding: "10%",
              marginBottom: "30px",
            }}
          >
            Tienda de comercio electrónico
          </b>
          <img src={nido} alt="imagen" />
          <ul style={{ fontFamily: "Verdana" }}>
            <li>TypeScript para seguridad y legibilidad.</li>
            <li>Next.js para sitios estáticos y SSR.</li>
            <li>Optimización de imágenes con next-cloudinary y next/image.</li>
            <li>Gestión de estado con Redux.</li>
            <li>Estilos con Tailwind CSS.</li>
            <li>Automatización con scripts personalizados.</li>
          </ul>
        </Card>
      </a>

      <a
        href="https://nuevamascota.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <h4 style={{ fontFamily: "Verdana" }}>Dogs App</h4>
          <b
            style={{
              fontFamily: "Verdana",
              fontSize: "small",
              width: "100%",
              color: `${currentColor.quinto}`,
              padding: "10%",
              marginBottom: "30px",
            }}
          >
            Aplicación web interactiva de adopción de mascotas. Permite a los
            usuarios explorar una amplia variedad de razas de perros, buscar por
            nombre, filtrar por características, ordenar alfabéticamente o por
            peso, y crear nuevas razas de perros en la base de datos. Además, la
            aplicación implementa una API con endpoints específicos para
            gestionar las razas y temperamentos, proporcionando una experiencia
            de usuario fluida y responsiva.
          </b>
          <img src={dogs} alt="imagen" />
          <ul style={{ fontFamily: "Verdana" }}>
            <li>Diseño UX/UI planificado.</li>
            <li>Filtros y ordenamientos combinados.</li>
            <li>Formulario controlado y validaciones.</li>
            <li>Gestión de estado con Redux.</li>
            <li>Paginación y pruebas unitarias.</li>
          </ul>
        </Card>
      </a>
      <a
        href="https://github.com/Aricoins/APIRest"
        target="_blank"
        rel="noreferrer"
      >
        <Card
          currentColor={currentColor}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <h4 style={{ fontFamily: "Verdana" }}>WeCode API</h4>
          <b
            style={{
              fontFamily: "Verdana",
              fontSize: "small",
              width: "100%",
              color: `${currentColor.quinto}`,
              padding: "10%",
              marginBottom: "30px",
            }}
          >
            API REST para la red social WeCode
          </b>
          <img src="/apirest.jpg" alt="imagen" />
          <ul style={{ fontFamily: "Verdana" }}>
            <li>Autenticación y gestión de usuarios con Clerk.</li>
            <li>CRUD completo de usuarios, posts y comentarios.</li>
            <li>Relaciones entre seguidores.</li>
            <li>Soporte de pagos con Stripe.</li>
            <li>Almacenamiento con AWS S3.</li>
            <li>Paginación y búsqueda incremental en publicaciones.</li>
            <li>Protección de rutas y roles de administración.</li>
          </ul>
        </Card>
      </a>
    </Contenedor>
  );
};

export default Proyectos;
