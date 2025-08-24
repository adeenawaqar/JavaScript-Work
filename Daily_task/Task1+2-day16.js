// Day 16 lecture 
// Function Accepting CallBack....
// Functions Returning Functions...
const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
}
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher order function
const tarnsformer = function (str, fn) {
  console.log(`Orignal String: ${str} `);
  console.log(`Transformed String: ${fn(str)} `);
  console.log(`Transformed by: ${fn.name} `);
}
// upperFirstWord and oneWord are callback...
tarnsformer('JavaScript is the best!', upperFirstWord);
tarnsformer('JavaScript is the best!', oneWord);

// advantage 1:  js uses callback function all the time
const high5 = function () {
  console.log('🫰');
}
document.body.addEventListener('click', high5);

['jonas', 'Ali', 'Ahmad'].forEach(high5);


// Functions Returning Functions.....
// with normal function..
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}
const greeter = greet('Assalam o Alikum');
greeter('Adeena');
greeter('Waqar');
greet('Hi')('Jonas');

// challenge with Arrow function..
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greet('Hi')('Jonas');
