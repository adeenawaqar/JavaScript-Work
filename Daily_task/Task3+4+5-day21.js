// Day 21 Lecture...
// The Reminder Operaator...
// Numeric Seperator...
// working with BigInt..

console.log('....Reminder Operator....');
console.log(5 % 2);
console.log(5 / 2);  // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = Num => Num % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

/* labelBalance.addEventListener('click', function () {
  const rows = document.querySelectorAll('.movements__row');
  rows.forEach((row, i) => {
    row.style.backgroundColor = ''; // reset first
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
 });
 */
// Numeric Seperator...
console.log('---Numeric Seperator---');
// 287 , 460 ,000 , 000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

console.log(Number('230_000'));
console.log(parseInt('230_000'));

// working with BigInt..
console.log('working with BigInt');
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 - 2);
console.log(2 ** 53 - 3);

console.log(BigInt(2 ** 53 - 3));
console.log(BigInt(1000n + 10000n));

const huge = 2345678910112345678n;
const Num = 23;
console.log(huge * Num);

// Exception...
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n === 20);

console.log(huge + 'is really Big.')

// Divisions...
console.log(10n / 3n);
console.log(11n / 3n);
console.log(10 / 3);