function exampleVar() {
    var message = 'Ejemplo con var:<br>';
    var a = 10;
    message += 'a = ' + a + '<br>';
    if (true) {
      var a = 20; // misma variable
      message += 'Dentro del if, a = ' + a + '<br>';
    }
    message += 'Fuera del if, a = ' + a + '<br><br>';
    return message;
  }
  
  function exampleLet() {
    let message = 'Ejemplo con let:<br>';
    let b = 10;
    message += 'b = ' + b + '<br>';
    if (true) {
      let b = 20; // nueva variable
      message += 'Dentro del if, b = ' + b + '<br>';
    }
    message += 'Fuera del if, b = ' + b + '<br><br>';
    return message;
  }
  
  function exampleConst() {
    const message = 'Ejemplo con const:<br>';
    const c = 10;
    let result = message + 'c = ' + c + '<br>';
    // c = 20; // Esto causaría un error
    if (true) {
      const c = 20; // nueva variable
      result += 'Dentro del if, c = ' + c + '<br>';
    }
    result += 'Fuera del if, c = ' + c + '<br>';
    
    const array = [1, 2, 3];
    array.push(4);
    result += 'Array después de push: ' + array + '<br>';
    
    return result + '<br>';
  }

  function myDateTime() {
    return Date();
  };
  
  module.exports = {
    exampleVar,
    exampleLet,
    exampleConst,
    myDateTime
  };
  