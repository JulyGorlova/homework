
function pow(number, extend) {
  var result = number;

  for (var i = 1;  i < extend; i++) {
    result *= number;
   
  }

  return result;
    
  
}

var number = prompt("Введите целое число?", '');
var extend = prompt("Введите значение степени числа?", '');

if ( extend <= 0) {
  alert('Степень ' + extend +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(number, extend) );
 
  
}


