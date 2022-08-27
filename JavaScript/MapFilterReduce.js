// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Started</h1>`;
const arr = [5, 2, 3, 8, 9];

/**
 * 

1. map method is used when we want transformation of whole array.
2. filter is used when we want to filter the arrar to obtain required value.
3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.

*/

// Map Method
// Purpose of these methods are we can write functions once and call it using map
function double(x) {
  return x * 2;
}

const outputMap = arr.map(double);
const outputMapTriple = arr.map((x) => x * 3);
const outputMapBinary = arr.map((x) => x.toString(2));
console.log(outputMap);
console.log(outputMapTriple);
console.log(outputMapBinary);

// Filter Method

const outputFilterOdd = arr.filter((x) => x % 2);
const outputFilterEven = arr.filter((x) => x % 2 === 0);
const outputFilterEight = arr.filter((x) => x < 8);
console.log(outputFilterOdd);
console.log(outputFilterEven);
console.log(outputFilterEight);

// Reduce Method

// sum or max

// Traditional Method
function findSum() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum());

// Reduce Method
const outputFilterSum = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

const outputFilterMax = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(outputFilterSum);
console.log(outputFilterMax);
