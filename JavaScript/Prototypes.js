/**
 * @see Prototypes are the mechanism by which JavaScript object inherit features from one another.
 */

const a = {
  city: 'Toronto',
  greet() {
    console.warn('Hello', $(this.city));
  },
};
a.greet();
// a.__proto__ <- Here a list of property will come to this
// there are various proto

/**
  @param __proto__        A way to access parents
  @param __defineGetter__ When to access property
  @param __defineSetter__ Assign a value to property
  @param __lookupGetter__ The function that is running
  @param __lookupSetter__ The function that runs when you assign a value to property
 */

/**
 @see PROTOTYPAL-INHERITANCE
*/
let animal = {
  eats: true,
  walk() {
    console.warn('Animals can walk!!');
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEars = {
  cry: true,
  __proto__: rabbit,
};

console.log(longEars.walk());
