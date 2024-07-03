import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { set } from 'animejs';

// Styled components
const Contenedor = styled.div`
  width: 100%;
  background-color: ${props => props.currentColor.primero};
  color: ${props => props.currentColor.segundo};
  display: flex;
  flex-direction: column;
  margin: 2%;
  font-family: 'Audiowide', sans-serif;
`;

const Label = styled.label`
  font-size: 20px;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 2%;
  justify-content: center;
`;

const Input = styled.input`
  width: 90%;
  height: 5vh;
  margin-left: 2%;
  margin-bottom: 2%;
  align-self: center;
`;

const Textarea = styled.textarea`
  width: 90%;
  height: 10vh;
  margin-left: 2%;
  margin-bottom: 2%;
  align-self: center;
`;

const Button = styled.button`
  width: 40%;
  height: 8vh;
  margin-left: 2%;
  margin-bottom: 2%;
  background-color: ${props => props.currentColor.cuarto};
  color: ${props => props.currentColor.primero};
  border: 1px solid white;
  align-self: center;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.currentColor.primero};
    color: ${props => props.currentColor.cuarto};
  }
`;

// Functional component
const ContactForm = ({ currentColor }) => {
  // State hooks
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  // Validation function
  const validation = () => {
    if (name === '') {
      setError('Por favor ingrese su nombre');
      return false;
    }
    if (!/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(email)) {
      setError('Por favor ingrese un email válido');
      return false;
    }
    setError('');
    return true;
  };

  // useEffect for initializing AOS
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const handleFormSubmit = async () => {
    if (!validation()) return;
  
    try {
      const response = await fetch('https://portfolio-8pgn.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, comment }),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert('Hemos recibido el comentario. Gracias, responderemos a la brevedad');
        setName('');
        setEmail('');
        setComment('');
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  
  };
  
  // Return JSX
  return (
    <Contenedor data-aos="fade-up" currentColor={currentColor}>
      <Label htmlFor="name">Nombre:</Label>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Label htmlFor="email">Email:</Label>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Label htmlFor="comment">Mensaje:</Label>
      <Textarea
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Button onClick={handleFormSubmit} currentColor={currentColor}>Enviar</Button>
    </Contenedor>
  );
};

export default ContactForm;
