// Working with string lecture 2.

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization in name...

const passenger = 'jOnAS'; // jonas.
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Email...
const email = 'adeenawaqar05@gmail.com';
const loginEmail = 'Adeenawaqar05@gmail.com \n';

// const LowerEmail = loginEmail .toLowerCase();
// const trimmedEmail = LowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// replace part of string...
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const Announcement = 'All passenger come to boarding door 23. Boarding door 23!';
// regular expression used.
console.log(Announcement.replace(/door/g, 'gate'));

// three methods that return booleans..
plane = 'AirBus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Air'));
console.log(plane.startsWith('A320')); // false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('This is the part of New AirBus Family');
}

// practice Exercise...
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knief') || baggage.includes('gun')) {
        console.log('You are not allowed on board');
    }
};
checkBaggage('I have a laptop , some food and a pocket knief.');
checkBaggage('Socks and Camera.');
checkBaggage('Got some snakes and a gun for proctection.');

