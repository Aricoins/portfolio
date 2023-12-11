import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";
import axios from 'axios'; // Importamos Axios para realizar la solicitud HTTP
import colores from './colores';
import Nav from './Nav';

// Estilos para los mensajes de validación
const styles = {
  bien: {
    fontSize: "0.8em",
    color: "white",
    backgroundColor: "#31c253",
    justifyContent: "center",
  },
  mal: {
    fontSize: "0.8em",
    color: "white",
    backgroundColor: "#fb0a7a",
    justifyContent: "center",
  },
}

// Estilos para el contenedor principal
const Caja = styled.div`
  margin-top: 5%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 5%;
  background-color: ${colores.amarillo};
  border-radius: 8px;
  box-shadow: 0 0 10px ${colores.verde};
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10%;

  h1 {
    color: ${colores.verde}; 
  }

  p {
    background-color: #ff006a;
    font-size: large;
    color: white;
  }

  label {
    font-weight: bold;
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
  }

  button {
    background-color: ${colores.verde};
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    color: ${colores.gris};

    &:hover {
      background-color: ${colores.marron};
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      color: #dc3545;
      font-weight: bold;
    }

    span {
      font-size: 12px;
    }
  }
`;

// Estilos para el botón
const Boton = styled.button`
  background-color: ${colores.verde};
  padding: 10px;
  border: none;
  border-radius: 5%;
  cursor: pointer;
  transition: background-color 0.3s;
  color: ${colores.gris};
  width: 100%;
  font-size: large;

  &:hover {
    background-color: ${colores.marron};
    color: ${colores.amarillo};
    width: 100%;
  }
`

// Función de validación del formulario
const validation = (form, setErrors, errors) => {
  // Validaciones...
}

// Componente principal
const Comentario = () => {
  useEffect(() => {
    AOS.init()
  }, []);

  const [form, setForm] = useState({
    nombre: "",
    comentario: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    comentario: "",
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm((prevForm) => {
      const updatedForm = { ...prevForm, [property]: value };
      validation(updatedForm, (newErrors) => setErrors(newErrors), errors);
      return updatedForm;
    });
  };

  // Manejar envío del formulario
 // Función para manejar el envío del formulario
 const handleSubmit = async (e) => {
  e.preventDefault();

  validation(form, (newErrors) => setErrors(newErrors), errors);

  const hasErrors = Object.values(errors).some((error) => error !== "");

  if (!hasErrors) {
    try {
      const { nombre, comentario } = form;

      // Enviar el formulario al servidor Express
      const response = await axios.post('http://localhost:3001/enviar-correo', {
        nombre,
        comentario,
        correoDestino: 'arielgarcia79@gmail.com', // Reemplaza con tu dirección de correo destino
      });

      // Limpiar el formulario después de enviar
      const resetForm = () =>
        setForm({
          nombre: "",
          comentario: "",
        });
      resetForm();

      // Mostrar mensaje de éxito
      alert(response.data.message);
    } catch (error) {
      console.error("Error al enviar el comentario:", error);
      alert("Hubo un error al enviar el comentario.", error);
    }
  } else {
    alert("Por favor, corrige los errores antes de enviar el formulario.");
  }
};
  

  return (
    <>
      <Caja data-aos="fade-up">
        <h1>Contactame</h1>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfTbWLso0fsjkZmLKt2fplNL8y1sbIK4ndfh7R5q5XFrzRIQQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
        </Caja>        
        </>   )  ;
}
export default Comentario;
