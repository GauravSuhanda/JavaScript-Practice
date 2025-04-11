// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Callback function

/* 
we are making a shopping application
  Create Order
  Payment
  Order Summary
  Update Wallet

The two problems that we  faced in callbacks are:-
1) Callback Hell: Asynchronous operations in JavaScript can be achieved through callbacks. Whenever there are multiple dependent Asynchronous operations it will result in a lot of nested callbacks. This will cause a 'pyramid of doom' like structure.
2) Inversion of control: When we give the control of callbacks being called to some other API, this may create a lot of issues. That API may be buggy, written by interns, may not call our callback and create order as in the above example, may call the payment callback twice etc.

*/
// const cart = ['shoes', 'pants', 'shirts'];
/* 

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

*/
// Unmaintainable & Not soo good structure
// Also called Pyramid of Doom

// --------------------------------------------- //

// Inversion of Control
// Lose the control when you do callback


// 1️⃣ Synchronous Callback
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodBye() {
  console.log("GoodBye!")
}

greet("User", sayGoodBye); 
// Hello User!, GoodBye!

// 2️⃣ Asynchronous Callback
function asyncOperations(callback) {
  console.log("Start of operation");
  setTimeout(function(){
    callback();
  },1000)
  console.log("End of operation");
}

function callback(){
  console.log("Callback executed");
}

asyncOperations(callback);
//Start of ops end of ops callback executed
