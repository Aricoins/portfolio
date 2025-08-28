import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Pool } from 'pg';
import projects from './proyectos-data.js';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port = typeof process !== 'undefined' ? process.env.PORT || 3000 : 3000;

const pool = new Pool({
  connectionString: 'postgres://default:tYLE1GkmV9lB@ep-aged-leaf-79142791.us-west-2.aws.neon.tech:5432/verceldb?sslmode=require',
});

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/submit', async (req, res) => {
  const { name, email, comment } = req.body;

  if (!name || !email || !comment) {
    return res.status(400).json({ error: 'Please provide name, email, and comment' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO form_submissions (name, email, comment) VALUES ($1, $2, $3) RETURNING *',
      [name, email, comment]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting data into database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/proyectos', (req, res) => {
  res.json(projects);
});
app.get('/hola', (req, res) => {
  res.send('API is running');
}
);

// Endpoint de búsqueda para el chatbot
app.get('/proyectos/search', (req, res) => {
  const searchTerm = req.query.q;

  if (!searchTerm) {
    // Devuelve todos los proyectos si no hay término de búsqueda
    return res.json(projects);
  }

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  const results = projects.filter(project => {
    const inTitle = project.title.toLowerCase().includes(lowerCaseSearchTerm);
    const inDescription = project.description.toLowerCase().includes(lowerCaseSearchTerm);
    const inTechnologies = project.technologies.some(tech =>
      tech.toLowerCase().includes(lowerCaseSearchTerm)
    );
    return inTitle || inDescription || inTechnologies;
  });

  res.json(results);
});

app.post('/clients', async (req, res) => {
  const { nombre, mail, empresa } = req.body;
  const fechaDeRegistro = new Date();

  if (!nombre || !mail) {
    return res.status(400).json({ error: 'Por favor, proporciona nombre y mail' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO clients (nombre, mail, empresa, fecha_de_registro) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, mail, empresa, fechaDeRegistro]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting data into database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const express = require('express');
// const {  OpenAI } = require('openai');


// const app = express();
// const port = 8000;

// // Configura la API de OpenAI con tu clave de API
// const openai = new OpenAI({
//     organization: "org-gXTlFbAt3W5AuNOi97jlxqtH",
//     project: "proj_Sc8qDtUy3agtlBHg4YHQQuBE",
// });


// const fetchBoot = async (req, res) => {
//   try {
//     const stream = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: "Say this is a test" }],
//         stream: true,
//     });
//     for await (const chunk of stream) {
//         process.stdout.write(chunk.choices[0]?.delta?.content || "");
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred while generating the image' });
//   }
// };

// // Define la ruta que ejecutará la función fetchBoot
// app.get('/generate-image', fetchBoot);

// app.listen(port, () => {
//   console.log(`Server is running on ${port}`);
// });


// const express = require('express');
// const {  OpenAI } = require('openai');


// const app = express();
// const port = 8000;

// // Configura la API de OpenAI con tu clave de API
// const openai = new OpenAI({
//     organization: "org-gXTlFbAt3W5AuNOi97jlxqtH",
//     project: "proj_Sc8qDtUy3agtlBHg4YHQQuBE",
// });





// const fetchBoot = async (req, res) => {
//   try {
//     const stream = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: "Say this is a test" }],
//         stream: true,
//     });
//     for await (const chunk of stream) {
//         process.stdout.write(chunk.choices[0]?.delta?.content || "");
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred while generating the image' });
//   }
// };

// // Define la ruta que ejecutará la función fetchBoot
// app.get('/generate-image', fetchBoot);

// app.listen(port, () => {
//   console.log(`Server is running on ${port}`);
// });
