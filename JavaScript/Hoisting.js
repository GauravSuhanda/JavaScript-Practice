/*
 * HOISTING
 *
 * Hoisting in JavaScript is a behavior in which variable and function declarations
 * are moved to the top of their containing scope during the compilation phase,
 * before the code is executed. Only the declarations are hoisted, not the initializations.
 */

// Variable Hoisting

console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// Function Hoisting

console.log(myFunc()); // Output: "Hello World!"

function myFunc() {
  return 'Hello World!';
}

// Hoisting with 'let' and 'const'

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
