// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Started</h1>`;

/**
 * JavaScript synchronous single threaded language
 * and everything is present in the call stack.
 * Step 1: Global execution context is created (GEC)
 */

function a() {
  // ← First this will come in call stack a()
  console.log('a');
}
a();
console.log('end');

/**
 * Call Stack
 *
 * a()
 * GEC ↑ going upward..
 */

/**
 * Event Loop
 * The job of event loop is to check the
 * CallBack Queue and put it into Call Stack
 */

console.log('Start');
setTimeout(function cb() {
  console.log('Callback');
}, 5000);
console.log('End');

// output: Start End Callback
