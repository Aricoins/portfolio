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

  const Title = styled.h2`
    font-size: 2rem;
    color: ${currentColor.cuarto};
    margin-bottom: 2rem;
    font-family: 'Audiowide', sans-serif;
    font-weight: 700;
    background: linear-gradient(135deg, ${currentColor.primero} 0%, ${currentColor.segundo} 60%, ${currentColor.tercero} 100%);
    padding: 1.5rem 2rem;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    border: 3px solid ${currentColor.cuarto};
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);

    @media (max-width: 600px) {
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
      padding: 1rem 1.5rem;
    }
  `;

  const Text = styled.p`
    font-size: 1.5rem;
    color: ${currentColor.quinto};
    line-height: 1.6;
    margin-top: 0.5;
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
      <Title>Desarrollo Full-Stack & Ciberseguridad por Ariel Rogel</Title>
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
