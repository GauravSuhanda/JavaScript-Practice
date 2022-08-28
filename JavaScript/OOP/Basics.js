/**
 * Creating Objects
 * Factories and Constructor
 * Primitives and Reference Types
 * Working with Properties
 * Private Properties
 * Getter and Setters
 */

// -------------------------------------------------------------------------------------------------- //

// {} <--: Object Literals

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log('draw');
  },
};

circle.draw();

// -------------------------------------------------------------------------------------------------- //

// Factories
// If object has one or more than one function it is called behaviour
// Creating objects with object literals is an issue only if it has behaviour
// In JavaScript, any function can return a new object. When it’s not a constructor function or class, it’s called a factory function

function createCircle(radius) {
  return {
    radius,
    draw2: function () {
      console.log('draw2');
    },
  };
}

const circle2 = createCircle(1);
circle2.draw2();

// -------------------------------------------------------------------------------------------------- //

// Constructors function
// We define constructor with upper case in JavaScript
// this :--> this is reference to the object that is executing this code
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw3');
  };
}
const circle3 = new Circle(1);

// Factories and Constructor are regular functions in JavaScript.
// A constructor returns an instance of the class you call it on. A factory function can return anything.

// MORE ABOUT LITERALS IN JAVASCRIPT

new String(); // '',"",``
new Boolean(); // true, false
new Number(); // 1,2,3...

// -------------------------------------------------------------------------------------------------- //

// Functions are objects

// Circle.
// Purple icons are methods and blue are properties PRESS Circle. and look these

// -------------------------------------------------------------------------------------------------- //

// Primitives and Reference Types

// Value Types :-->     Number, String, Boolean, Symbol, undefined, null
// Reference Types :--> Object, Function, Array

let x = 10;
let y = x;

x = 20;

// o/p  x:20 y:10

let x2 = { value: 10 };
let y2 = x2;

x2.value = 20;

// o/p  x: { value:20 } y: { value: 20 }
// When we use object it is not stored in x2; it is stored in memory and the address of that memory is stored in x2

// Conclusion: Primitives are copied by their values; Objects are copied by their reference

// -------------------------------------------------------------------------------------------------- //

// Adding/Removing Properties

/**
 * function Circle(radius) {
      this.radius = radius;
      this.draw = function () {
      console.log("draw3");
  };
}
 */
const circle4 = new Circle(10);

circle4.location = { x: 1 }; // This is used to add the property

const propertyName = 'center location'; // Brackets are used when there is space or hypens in names
circle.propertyName = { x: 1 };

delete circle4['location'];

// Enumerating Properties

for (let key in circle4) {
  if (typeof circle4[key] !== 'function') console.log(key, circle4[key]);
}

const keys = Object.keys(circle4);
console.table(keys);

if ('radius' in circle4) {
  console.log('Circle has a radius.');
}

// -------------------------------------------------------------------------------------------------- //

// Private Properties and methods

function NewCircle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {
    // ...
  };

  this.newDraw = function () {
    computeOptimumLocation(0.1); // Closure is used
    // defaultLocation
    console.log('New Draw...');
  };
}

const circle5 = new NewCircle(11);
// In this circle5. we won't able to access computeOptimumLocation(0.1)
circle5.newDraw();

// -------------------------------------------------------------------------------------------------- //

// Getter and Setters

/**
 * In JavaScript, there are two kinds of object properties:
    Data properties
    Accessor properties
*/

const student = {
  //data property
  firstName: 'Monica',
};

/**
 * Accessor Property
    In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords: 
      get - to define a getter method to get the property value
      set - to define a setter method to set the property value
*/

const newStudentGetter = {
  // data property
  firstName: 'New Monica',

  // accessor property(getter)
  get getName() {
    return this.firstName;
  },
};

// accessing data property
console.log(newStudentGetter.firstName); // New Monica

// accessing getter methods
console.log(newStudentGetter.getName); // New Monica

// trying to access as a method
// console.log(newStudentGetter.getName()); // error

// Setter

const newStudentSetter = {
  firstName: 'Monica',

  //accessor property(setter)
  set changeName(newName) {
    this.firstName = newName;
  },
};

console.log(newStudentSetter.firstName); // Monica

// change(set) object property using a setter
newStudentSetter.changeName = 'Sarah';

console.log(newStudentSetter.firstName); // Sarah
