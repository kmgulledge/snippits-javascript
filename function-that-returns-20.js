//write a function that returns 20

//multiply( 2 ) ( 10 )

function multiply(a, b) {
  if (arguments.length === 1) {
    return function(b) {
      return a * b;
    };
  } else {
    return a * b;
  }
}

console.log(multiply(10)(2));
console.log(multiply(10, 4));
