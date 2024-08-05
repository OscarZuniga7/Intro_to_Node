// Función que toma un nombre y un callback como argumentos
function greetAfterDelay(name, callback) {
    console.log('Starting the greeting function...');
    
    // Simular una operación asíncrona con setTimeout
    setTimeout(() => {
      console.log('Completed the main task in greetAfterDelay.');
      
      // Invocar el callback
      callback(name);
    }, 2000); // Esperar 2 segundos
  }
  
  // Definir el callback
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // Llamar a la función principal con el callback
  greetAfterDelay('Oscar', greet);
  