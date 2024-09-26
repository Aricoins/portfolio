import { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types"; // Importamos PropTypes
import AOS from "aos";
import "aos/dist/aos.css";
import CalendlyBadge from "./calendly";

function About({ currentColor }) {
  const Container = styled.div`
    width: 90%;
    margin: 5% auto;
    padding: 2%;
    text-align: center;
    font-family: 'Audiowide', sans-serif;
    color: ${currentColor.primero};

    @media (max-width: 600px) {
      width: 100%;
      padding: 2%;
    }
  `;

  const Text = styled.p`
    font-size: 1.3rem;
    color: ${currentColor.primero};
    line-height: 1.6;
    margin-top: 1rem;
    font-family: Verdana;

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  `;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container data-aos="fade-up">
      <Text>
        Ofrecemos soluciones tecnológicas avanzadas que ayudan a transformar ideas en realidades digitales. 
        Con enfoque en la innovación y el diseño centrado en el usuario, creamos software y aplicaciones web que aceleran el éxito de nuestros clientes. 
      </Text>
      <div style={{ position: "absolute", backgroundColor: "black" }}>
        <CalendlyBadge />
      </div>
    </Container>
  );
}

// Definimos los PropTypes para la validación de las props
About.propTypes = {
  currentColor: PropTypes.shape({
    primero: PropTypes.string.isRequired, // 'primero' es requerido
    quinto: PropTypes.string.isRequired, // 'quinto' es requerido
  }).isRequired,
};

export default About;
