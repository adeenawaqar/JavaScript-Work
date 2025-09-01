
// Day 21 lecture...
// Converting and Checking Function...
// Math and Rounding...

console.log('Converting and Checking Function...');
console.log(23 === 23.0);
// Base 10 -> 0 to 9
// Binary base 2 -> 1 , 0.
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
// Conveersion String to Number...
console.log(Number('23'));
console.log(+ '23');
// Parsing...
console.log(Number.parseInt('30px ,10'));
//console.log(Number.parseInt('e23 ,10'));
console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'23X'));
console.log(Number.isNaN(23 / 0));

// Checking value is Number...
console.log(Number.isFinite(23)); // true
console.log(Number.isFinite('23')); // false
console.log(Number.isFinite(+'23X'));// false
console.log(Number.isFinite(23 / 10)); // false

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

// Math and Rounding...
console.log('...Math...');
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(10, 40, 23, 55, 69, 100));
console.log(Math.max(10, 40, 23, 55, 69, '100'));
console.log(Math.max(10, 40, 23, 55, 69, '100px'));

console.log(Math.min(10, 40, 23, 55, 69, 100));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (mini, maxi) => Math.trunc(Math.random() * (maxi - mini) + 1) + mini;
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(10, 20));

console.log('...Rounding Integers...');

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log('---ceiling---')
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

// trunc and floor are same both cut the decimal part..
console.log('---Floor , trunc ---')
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));
console.log(Math.trunc(23.3));

//  for Negative floor cannot cut decimal part but trunc cut decimal part..
console.log(Math.floor(-23.9));
console.log(Math.trunc(-23.9));

console.log("...Rounding Decimal...");
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(2));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

