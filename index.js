// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Started</h1>`;

const people = [
  { name: 'Jon', age: 28 },
  { name: 'Steve', age: 19 },
  { name: 'Sarah', age: 8 },
  { name: 'Mathew', age: 92 },
];

const a = Object.groupBy(people, (person) => person.name);
console.log(a);
