// Day 18 Lecture...
// The Map Method...
// The Filter Method...
// The Reduce Method...
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const EuroToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * EuroToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * EuroToUsd);
console.log(movementsUSDfor);

const movDescription = movements.map((mov, i) => `Movement ${i + 1} : You  ${mov > 0} ? 'deposited' : 'Withdraw'} ${Math.abs(mov)}`);
console.log(movDescription);

// The Filter Method...
const deposite = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);

const depositefor = [];
for (const mov of movements) if (mov > 0) depositefor.push(mov)
console.log(depositefor);

const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls);

// The reduce Method...
console.log(movements);
// Accumulator is like Snow ball...
/* 
const balance =movements.reduce(function( acc , curr , i , arr) 
{
  console.log(`Iteration ${i} :${acc}`);
   return acc+curr;
} , 100);
*/
const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov
console.log(balance2);

// Maximum Value...
const max = movements.reduce((acc, mov) => {
  if (acc > mov)
    return acc;
  else
    return mov;
}, movements[0]);
console.log(max);