const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para servir archivos estáticos
app.use('/images', express.static(path.join(__dirname, 'images')));

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/summer', (req, res) => {
  res.sendFile(path.join(__dirname, 'summer.html'));
});

app.get('/winter', (req, res) => {
  res.sendFile(path.join(__dirname, 'winter.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
