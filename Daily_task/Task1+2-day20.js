// Day 20 lecture...
// Some and Every Method...

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, 1500];
console.log(movements);

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
//  Equality....
console.log(movements.includes(-130));

console.log('---Some Conditon---');
console.log(movements.some(mov => mov === -130))

const anyDeposite = movements.some(mov => mov > 0)
console.log(anyDeposite);

console.log('---Every Conditon---');
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

console.log('---Seperate CallBack---');
deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

console.log('---flat and flatMap---');
const arr = [1, 2, 3, [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(1));

console.log('...Chaining Method...');

// Flat...
const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// FlatMap...
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

