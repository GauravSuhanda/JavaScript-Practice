
/**
 Generators in JavaScript — especially when combined with Promises — are a very powerful tool for asynchronous programming as they mitigate — if not entirely eliminate -- the problems with callbacks, such as Callback Hell and Inversion of Control. However, an even simpler solution to these problems can be achieved with async functions.
 */

function* generator(i) {
  console.log('First Log...');
  yield 'Hello';

  console.log('Second Log...');
  yield 'World!';
}
const gen = generator(10);

console.log(gen.next().value);

console.log(gen.next().value);
