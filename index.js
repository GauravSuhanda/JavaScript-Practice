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
