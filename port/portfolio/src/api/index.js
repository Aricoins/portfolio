const express = require('express');
const {  OpenAI } = require('openai');


const app = express();
const port = 8000;

// Configura la API de OpenAI con tu clave de API
const openai = new OpenAI({
    organization: "org-gXTlFbAt3W5AuNOi97jlxqtH",
    project: "proj_Sc8qDtUy3agtlBHg4YHQQuBE",
});





const fetchBoot = async (req, res) => {
  try {
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while generating the image' });
  }
};

// Define la ruta que ejecutará la función fetchBoot
app.get('/generate-image', fetchBoot);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
