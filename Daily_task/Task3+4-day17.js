// Day 17 lecture...
// A new at Method...  and ...looping array for Each...

const arr = [23, 11, 64];
//console.log(arr[0]);
console.log(arr.at(0));
// getting last element of array...
console.log(arr[arr.length - 1]);
// Start at right side...
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log('Jonas'.at(0));
console.log('Jonas'.at(-1));

// looping array for Each...
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for(const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 1) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  }
  else {
    console.log(`Movement ${i + 1} You withdraw ${Math.abs(movement)}`);
  }
}
console.log('-----FOR EACH METHOD-----');

movements.forEach(function (mov, i, arr) {
  if (mov > 1) {
    console.log(`Movement ${i + 1} You deposited ${mov}`);
  }
  else {
    console.log(`Movement ${i + 1} You withdraw ${Math.abs(mov)}`);
  }
});

// 0: function(200);
// 1: function(450);
// 2: function(400);
// ...