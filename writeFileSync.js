const fs = require('fs');

const content = 'This is some content to write into a file.';

try {
  fs.writeFileSync('output.txt', content, 'utf8');
  console.log('File has been written.');
} catch (err) {
  console.error('Error writing file:', err);
}
