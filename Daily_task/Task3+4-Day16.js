// Day 16 lecture...
// The Call and Apply Method...
//  // Bind Method...

const lufthansa = {
  airline: 'Lufthansa',
  code: 'LH123',
  bookings: [],
  book(flightNum, passengerName) {
    console.log(`${passengerName} booked a seat on ${this.airline} flight ${this.code} ${flightNum}`);
    this.bookings.push({ flight: `${this.code} ${flightNum}`, passengerName });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'Jonas Smith');

const Eurowings = {
  airline: 'Eurowings',
  code: 'EW12',
  bookings: [],
};

const book = lufthansa.book;

// does not work..
// book(23, 'Mr.Willium'); 

// Call Method...
book.call(Eurowings, 23, 'Sarah Williams');
console.log(Eurowings);

book.call(lufthansa, 30, 'Mary Cooper');
console.log(lufthansa);

const Swiss =
{
  airline: 'Swiss',
  code: 'LX12',
  bookings: [],
};

book.call(Swiss, 306, 'John Cooper');
// console.log(Swiss);

// Apply Method... 1st method
const flightData = [584, 'George Copper'];
book.apply(Swiss, flightData);
console.log(Swiss);
// Second method...
book.call(Swiss, ...flightData);

// Bind Method...
const bookEW = book.bind(Eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(Swiss);
bookEW(23, 'Steven William');

const bookEW23 = book.bind(Eurowings, 23);
bookEW23('John Smith');
bookEW23('Martha Cooper');

// With Event Listner...
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++
  console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application...
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}
const addVAT2 = addTax(0.23);
onsole.log(addVAT(100));
console.log(addVAT(23));