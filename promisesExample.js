const fs = require('fs').promises;

fs.readFile('example1.txt', 'utf8')
  .then(data1 => {
    console.log('File1 content:', data1);
    return fs.readFile('example2.txt', 'utf8');
  })
  .then(data2 => {
    console.log('File2 content:', data2);
    return fs.readFile('example3.txt', 'utf8');
  })
  .then(data3 => {
    console.log('File3 content:', data3);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
