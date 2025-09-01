
// Day 20 Lecture...
// All Array Methods Practice...

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 1500];

const account1 = {
    owner: 'Jonas Schmedtmann',
    username: 'js',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    username: 'jd',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, 30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    username: 'stw',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    username: 'ss',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];

// 1)
const bankDepositeSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositeSum);

// 2)
const NumDepositeits1000 = accounts.flatMap(acc => acc.movements).reduce((count, curr) => curr >= 1000 ? ++count : count, 0);
console.log(NumDepositeits1000);

// prefixed ++ operator...
let a = 10;
console.log(a);

// 3)
const { deposits, withdrawls } = accounts.flatMap(acc => acc.movements).reduce((sums, curr) => {
    // curr > 0 ? (sum.deposit += curr ) : (sum.withdrawls += curr );

    // bracket method use..
    sums[curr > 0 ? 'deposits' : 'withdrawls'] += curr;
    return sums;
},
    { deposits: 0, withdrawls: 0 }
);

console.log(deposits, withdrawls);

// 4)
// this is a nice title  => This Is a Nice Title...
const convertTitleCase = function (title) {
    const capitalized = str => str[0].toUpperCase() + str.slice(1);
    const exceptions = ['a', 'an', 'the', 'but', 'or', 'in', 'with'];

    const TitleCase = title.toLowerCase().split(' ').map(word => (exceptions.includes(word) ? word : capitalized(word))).join(' ');
    return capitalized(TitleCase);

};

console.log(convertTitleCase('this is nice title'));
console.log(convertTitleCase('this is a LONG title but no too long'));
console.log(convertTitleCase('and here is another title with a EXAMPLE'));