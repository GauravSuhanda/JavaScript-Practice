// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Function Currying using bind method & Closures method
/**
 * Transformation of the function of multiple arguments into several
 * functions of a single argument in sequence
 */
let multiply = function (x, y) {
  console.log('Fuction Currying + Bind:', x * y);
};

let multiplyByTwo = multiply.bind(this, 2); // we set x = 2 and also y = something
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

let multiplyWithClosure = function (x) {
  return function (y) {
    console.log('Fuction Currying + Closures:', x * y);
  };
};
let multiplyByTwoWithClosures = multiplyWithClosure(2);
multiplyByTwoWithClosures(5);
let multiplyByThreeWithClosure = multiplyWithClosure(3);
multiplyByThreeWithClosure(5);
