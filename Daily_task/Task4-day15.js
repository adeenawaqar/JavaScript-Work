// Day15 lecture...
// Default Parameter 
// How passing Arguments works: Values vs Refrence...

const bookings = [];
const checkBooking = function (fightNum, NumPassangers = 1, price = 199 * NumPassangers) {

    const booking = {
        fightNum,
        NumPassangers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}
checkBooking('LH123');
checkBooking('LH123', '2', '800');
checkBooking('LH123', '3');
checkBooking('LH123', 'undefined', '200');

// passing Arguments works: Values vs Refrence
const flight = 'LH234';
const jonas = {
    name: 'John Schmedtmann',
    passport: 2345678,
}
const checkIn = function (flightNum, Passanger) {
    flightNum = 'LH999';
    Passanger.name = 'Mr.' + Passanger.name;
    if (Passanger.passport === '2345678') {
        alert('check in ');
    }
    else {
        alert('Wrong Passport');
    }
}
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is same as doing..
const flightNum = flight;
const Passanger = jonas;

/*const newPassport = function(person)
{
   person.Passanger = Math.trunc (Math.random()*1000);
}
newPassport(jonas);
checkIn(flight , jonas);
*/
