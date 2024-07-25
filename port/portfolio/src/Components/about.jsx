import { useEffect } from "react";
import styled from "styled-components";
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
  margin: 0;
  color: ${currentColor.quinto};
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1.5rem;
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
      <Title>Bienvenido a Latitud42</Title>
      <Text>
        En Latitud42, nos especializamos en ofrecer soluciones tecnológicas avanzadas
        que ayudan a transformar ideas en realidades digitales. Con un enfoque en la innovación
        y el diseño centrado en el usuario, creamos software y aplicaciones web que impulsan
        el éxito de nuestros clientes. Descubre cómo podemos ayudarte a alcanzar tus objetivos
        y llevar tu proyecto al siguiente nivel.
      </Text>
    </Container>
  );
}

export default About;

