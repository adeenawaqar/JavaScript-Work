// Day 15 Lecture...
// Working with string lecture 3
// split and join method...

console.log('a+very+ nice+string'.split('+'));
console.log('John Schmedtmann'.split(' '));

const [firstName, lastName] = 'John Schmedtmann'.split();
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Capitalization of name first character...
const CapitalizedName = function (name) {
    const names = name.split(' ');
    const NameUpper = [];
    for (const n of names) {
        // NameUpper.push(n[0].toUpperCase()+ n.slice(1));
        NameUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(NameUpper.join(' '));

};
CapitalizedName('jessica ann smith davis');
CapitalizedName('adeena waqar');

// padding 
const message = 'Go to gate 23';
console.log(message.padStart(16, '+').padEnd(19, '+'));
console.log('Jonas'.padStart(15, '+').padEnd(12, '+'));

const creditCardNumber = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*')
}
console.log(creditCardNumber(1234567));
console.log(creditCardNumber(432167));

// Repeat Method...
const message2 = 'Bad Weather ... All Departures Delayed...\n';
console.log(message2.repeat(2));

const planInline = function (n) {
    console.log(`There are ${n} palnes in line ${'🛩️'.repeat(n)}`);
};
planInline(5);
planInline(3);
planInline(6);