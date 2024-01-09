// Import React and useState from the 'react' library
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contenedor = styled.div`
    width:100%;
    background-color: #003140;
    display: flex;
    flex-direction: column;

    `
    const Label = styled.label`
    color: white; 
    font-size: 20px;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 2%;
    justify-content: center;
    `

    const Input = styled.input`
    width: 50%;
    height: 5vh;
    margin-left: 2%;
    margin-bottom: 2%;
    align-self: center;
    `
    const Textarea = styled.textarea`
    width: 50%;
    height: 10vh;
    margin-left: 2%;
    margin-bottom: 2%;
     align-self: center;
    `
    const Button = styled.button`
    width: 40%;
    height: 8vh;
    margin-left: 2%;
    margin-bottom: 2%;
    background-color: rgb(4, 79, 72);
    color: white;
    border: 1px solid white;
    align-self: center;
    &:hover{
        background-color: white;
        color: #003140;
    }
    `


// Create a functional component named ContactForm
const ContactForm = () => {
  // Use the useState hook to manage the state of form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

const validation = () => {
  if (name === ""){
    setError("Por favor ingrese su nombre")
  }
  if(email === "/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/"){
    setError("Por favor ingrese un email valido")
  }
  
}



useEffect(() => {
  Aos.init({duration: 2000});
}
, []);

  
  // Define a function to handle form submission
  const handleFormSubmit = () => {
    // Create a mailto link with the form data
    const mailtoLink = `mailto:arielgarcia79@gmail.com?subject=New Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AComment: ${comment}`;

    // Open the user's default email client with the pre-populated email
    window.location.href = mailtoLink;
  };

  // Return the JSX structure of the component
  return (
    <Contenedor data-aos="fade-left"
    >
      {/* Input field for Name */}
      < Label htmlFor="name">Nombre:</ Label>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
   

      {/* Input field for Email */}
      < Label htmlFor="email">Email:</ Label>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Textarea for Comment */}
      < Label htmlFor="comment">Mensaje</ Label>
      <Textarea
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
    {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* Submit button with an onClick handler */}
      <Button onClick={handleFormSubmit}>Enviar</Button>
    </Contenedor>
  );
};

// Export the ContactForm component as the default export
export default ContactForm;
