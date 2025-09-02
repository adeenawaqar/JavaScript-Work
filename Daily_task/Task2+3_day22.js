// Day 22 lecture...
// operation with Dates
// Internationalized dates

console.log('...Operation with Dates...');

// convert date to number..
let future = new Date(2037, 10, 19, 15, 23, 5);
// Both give same result..
console.log(Number(future));
console.log(+future);

const CalcdaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const day1 = CalcdaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(day1);

// Add Days to a date...
today = new Date();
future = new Date(today);
future.setDate(today.getDate() + 7); // add 7 days
console.log("Today:", today.toDateString());
console.log("One week later:", future.toDateString());

//Subtract date from a days..
const past = new Date(today);
past.setDate(today.getDate() - 10);
console.log("10 days ago:", past.toDateString());

// Internationalized dates
console.log('...Internationalized dates...');

// Create a sample date
date = new Date(2025, 8, 2);

console.log('1) US English (Month-Day-Year)');
console.log(new Intl.DateTimeFormat('en-US').format(date));

console.log('2) UK English (Day-Month-Year)');
console.log(new Intl.DateTimeFormat('en-GB').format(date));

console.log('3) Australian English');
console.log(new Intl.DateTimeFormat('en-AU', { dateStyle: 'long' }).format(date));

console.log('4) Canadian English');
console.log(new Intl.DateTimeFormat('en-CA').format(date));

console.log('5) Formal Long Style (US)');
console.log(new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date));

console.log('6) Formal Long Style (UK)');
console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date));

