/**
 * @param CLOSURES
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 */

// IN IDEAL CASE USING VAR --> Global Scope

function a() {
  var name = 'Toronto'; // name is a local variable created by a

  function b() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  b();
}
a();

// IN LET & CONST --> Block Scope
function a() {
  const name = 'Toronto';
  function b() {
    console.log(name);
  }
  return b;
}

const c = a();
c();
