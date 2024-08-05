const fs = require('fs').promises;

async function readFiles() {
  try {
    const data1 = await fs.readFile('example1.txt', 'utf8');
    console.log('File1 content:', data1);

    const data2 = await fs.readFile('example2.txt', 'utf8');
    console.log('File2 content:', data2);

    const data3 = await fs.readFile('example3.txt', 'utf8');
    console.log('File3 content:', data3);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFiles();
