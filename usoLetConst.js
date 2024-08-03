// Usando let en un bucle for estándar
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i); // Imprime 0, 1, 2, 3, 4
    }, 1000);
  }
  
  // Usando const en un bucle for...of
  const array = [1, 2, 3, 4, 5];
  for (const item of array) {
    console.log(item); // Imprime 1, 2, 3, 4, 5
  }
  