const fs = require('fs');

const content = 'This is some content to write into a file.';

fs.writeFile('output.txt', content, 'utf8', (err) => {
  if (err) {
    return console.error('Error writing file:', err);
  }
  console.log('File has been written.');
});
