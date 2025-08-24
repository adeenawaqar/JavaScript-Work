// DAy 14 lecture... "

// Working with string lecture 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// Slice method...
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(0, airline.indexOf('')));
console.log(airline.slice(-12));
console.log(airline.slice(0, 20));


const CheckMiddleSeat = function (seat) {
    // B and E are middle seat...
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E')
        console.log('You got the middle seat🙂');
    else
        console.log('You got Lucky 😎')
}
CheckMiddleSeat('11B');
CheckMiddleSeat('23C');
CheckMiddleSeat('3E');

console.log(new String('Adeena'));
console.log(typeof new String('Adeena'));
console.log(typeof new String('Adeena').slice(1));


