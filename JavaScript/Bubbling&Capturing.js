// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `

  <style>
  div {
    min-width: 100px;
    min-height: 100px;
    padding: 30px;
    border: 1px solid black;
  }
  </style>
</head>
<body>

  <div id="grandparent">
    <div id="parent">
      <div id="child"></div>
    </div>
  </div>
</body>
`;

document.querySelector('#grandparent').addEventListener(
  'click',
  (e) => {
    console.log('Grandparent Clicked!');
    //e.stopPropagation();
  },
  // true : Event Capturing
  // false : Event Bubbling
  true
);

document.querySelector('#parent').addEventListener(
  'click',
  (e) => {
    console.log('Parent Clicked!');
  },
  true
);

document.querySelector('#child').addEventListener(
  'click',
  (e) => {
    console.log('Child Clicked!');
  },
  true
);
