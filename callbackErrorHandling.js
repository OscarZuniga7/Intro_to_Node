// Función que toma un nombre y un callback como argumentos
function greetAfterDelay(name, callback) {
    console.log('Starting the greeting function...');
  
    // Simular una operación asíncrona con setTimeout
    setTimeout(() => {
      // Simular un error
      if (name === 'Error') {
        const err = new Error('An error occurred!');
        console.log('Completed the main task in greetAfterDelay with error.');
        
        // Invocar el callback con el error
        return callback(err);
      }
  
      console.log('Completed the main task in greetAfterDelay successfully.');
      
      // Invocar el callback sin error y con el nombre
      callback(null, name);
    }, 2000); // Esperar 2 segundos
  }
  
  // Definir el callback
  function greet(err, name) {
    if (err) {
      return console.error('Error:', err.message);
    }
    console.log(`Hello, ${name}!`);
  }
  
  // Llamar a la función principal con el callback
  //greetAfterDelay('Oscar', greet);
  
  // Para probar el manejo de errores
   greetAfterDelay('Error', greet);
  