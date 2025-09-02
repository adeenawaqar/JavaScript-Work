// lecture day 22
// Iternationalizing Number...
// Timers set TimerOut and SetInterval...

console.log('...Iternationalizing Number...');
const Num = 388745.23;
const option =
{
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'EUR',

}
console.log('US: ', new Intl.NumberFormat('en-US', option).format(Num));

console.log('Germany: ', new Intl.NumberFormat('de-DE', option).format(Num));

console.log('Syria: ', new Intl.NumberFormat('ar-SY', option).format(Num));

console.log(navigator.language, new Intl.NumberFormat(navigator.language, option).format(Num));

console.log("India:", new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(Num));

console.log("Japan:", new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(Num));

// Timers set TimerOut and SetInterval...
console.log('...Timers set TimerOut and SetInterval...');

const ingridents = ['olives', 'Species'];

const PizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2} 🍕`), 3000, ...ingridents);
console.log('---Waiting---');

if (ingridents.includes('spanach')) clearTimeout(PizzaTimer)
