const fs = require('fs');

// Operación anidada asíncrona (callback hell)
fs.readFile('example1.txt', 'utf8', (err, data1) => {
  if (err) {
    return console.error('Error reading file1:', err);
  }
  console.log('File1 content:', data1);

  fs.readFile('example2.txt', 'utf8', (err, data2) => {
    if (err) {
      return console.error('Error reading file2:', err);
    }
    console.log('File2 content:', data2);

    fs.readFile('example3.txt', 'utf8', (err, data3) => {
      if (err) {
        return console.error('Error reading file3:', err);
      }
      console.log('File3 content:', data3);

      // Más operaciones anidadas...
    });
  });
});
