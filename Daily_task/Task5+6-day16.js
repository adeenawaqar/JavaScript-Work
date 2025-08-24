// Day 16 Lecture...
// Immediately Invoked Function Expression (IIFE) Lecture...
// Closure Lecture...
const runOnce = function () {
  console.log("This will never run again.");
}
runOnce();

// IIFE 
(function () {
  console.log("This code will  run again.");
})();

(() => console.log("This code will  run immediately."))();

{
  const isPrivate = 23;
  var isNotPrivate = 46;
}
//console.log(isPrivate);
console.log(isNotPrivate);

// Closure Lecture...
const secureBooking = function () {
  passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} Passenger.`);
  }
}
const booker = secureBooking();
booker();
