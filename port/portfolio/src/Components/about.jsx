import { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types"; // Importamos PropTypes
import AOS from "aos";
import "aos/dist/aos.css";

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
    font-size: 1.5rem;
    color: ${currentColor.quinto === "#D7B3FF" ? "#FFFFFF" : currentColor.quinto};
    line-height: 1.6;
    margin-top: 0.5;
    font-family: Verdana;
    font-weight: 600;
    text-shadow: ${currentColor.quinto === "#D7B3FF" ? "2px 2px 4px rgba(0,0,0,0.7)" : "none"};

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
