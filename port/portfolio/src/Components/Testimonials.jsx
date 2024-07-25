// src/Components/Testimonials.js

import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  background-color: ${({ theme }) => theme === 'light' ? '#f9f9f9' : '#333'};
  color: ${({ theme }) => theme === 'light' ? '#333' : '#f9f9f9'};
  padding: 4rem 2rem;
  text-align: center;
`;

const Testimonial = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme === 'light' ? '#fff' : '#444'};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Testimonials = ({ theme }) => {
  return (
    <TestimonialsSection theme={theme}>
      <h2>Testimonios</h2>
      <Testimonial theme={theme}>
        <p>"Excelente trabajo, muy profesional y atento a los detalles."</p>
        <p>- Cliente Satisfecho</p>
      </Testimonial>
      <Testimonial theme={theme}>
        <p>"La mejor experiencia que he tenido con un desarrollador. Altamente recomendado."</p>
        <p>- Otro Cliente Satisfecho</p>
      </Testimonial>
    </TestimonialsSection>
  );
};

export default Testimonials;
