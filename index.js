// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// First Class Function

/**
 * In case of Hoisting, fn <statement> is execute and <expression> is not.
 * Until the code is on (var b). It won't execute...
 */

// Function Statement || Function Declearation
function a() {
  console.log('This is what function statements are...');
}

// Function Expression
var b = function () {
  // var b = function xyz() {  <--: This is Name function expression
  console.log('This is what function expression are...');
};

// Anonymous Function
// Function with no name; AF are used as values
// You can use AF in <expressions> but not in statements
// Syntax: function() {}

// Difference between Parameters & Arguments
var c = function (parameter1, parameter2) {
  // var b = function xyz() {  <--: This is Name function expression
  console.log('This is what function expression are...');
};
c(argument);

// First Class function
// functions are treated as values. So we can pass functions in arguments
function d() {
  console.log('Something somthing...');
}
var e = function () {
  console.log('Something 2..');
};
e(d);
