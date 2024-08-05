const fs = require('fs');

// Leer un archivo de manera asíncrona
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading file:', err);
  }
  console.log('File content:', data);

  // Escribir en un archivo de manera asíncrona
  fs.writeFile('output.txt', data, (err) => {
    if (err) {
      return console.error('Error writing file:', err);
    }
    console.log('File has been written.');
  });
});
