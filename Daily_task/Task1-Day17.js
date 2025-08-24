// Day 17 Lecture...
// Closures Example...

// Example 1
let f;
const g = function () {
   const a = 23;
   f = function () {
      console.log(a * 2);
   };
};

let h = function () {
   const b = 777;
   f = function () {
      console.log(b * 2);
   }
};

g();
f();
// Reassigning function of f
h();
f();

// Example 2...
const boardPassengers = function (np, wait) {
   const perGroup = np / 3;

   setTimeout(function () {
      console.log(`We are now boarding all ${np} Passengers`);

      console.log(`There are three groups , each with ${perGroup} passengers`);

   }, wait * 1000);

   console.log(` Will start boarding ${wait} seconds `);
};
// const perGroup = 1000;
boardPassengers(180, 3);
