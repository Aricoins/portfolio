const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

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
