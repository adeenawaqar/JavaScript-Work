// Day 21 Work...
/*  // Challenge no 4 last challenge of this section

 Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little. 
 Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little
 is the opposite. Eating an okay amount means the dog's current food portion is within a range 10% above and 10% 
 below the recommended portion (see hint). 
 
 
 Hints: 
...Use many different tools to solve these challenges, you can use the summary lecture to choose between them 

...Being within a range 10% above and below the recommended portion means:  current > (recommended * 0.90) &&
   current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the 
   recommended portion.
*/
// Solution..

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1) Calculate Recomended food each of the dog..
dogs.forEach(dog => (dog.recfood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2) Sarrah dogs eating little or much.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah dog is eating ${dogSarah.curFood > dogSarah.recfood ? 'much' : 'little'}`);

// 3) onwner names prints those dogs eating much or little.
const ownerEatingTooMuch = dogs.filter(dog => dog.curFood > dog.recfood).flatMap(dog => dog.owners)//.flat()
console.log(ownerEatingTooMuch);

const ownerEatingTooLittle = dogs.filter(dog => dog.curFood < dog.recfood).flatMap(dog => dog.owners)//.flat()
console.log(ownerEatingTooLittle);

// 4) Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs
//  eat too much!" and "Sarah and John and Michael's dogs eat too little!" 

console.log(`${ownerEatingTooMuch.join(' and ')} dog eat too much !`);
console.log(`${ownerEatingTooLittle.join(' and ')} dog eat too little !`);

// 5) log to console dog eating exactly the amount of food that is recommended.
console.log(dogs.some(dog => dog.curFood === dog.recfood));

// 6) Log to the console whether there is any dog eating an okay amount of food.
//  current > (recommended * 0.90) && current < (recommended * 1.10)

const CheckEatingOkay = dog => dog.curFood > dog.recfood * 0.90 && dog.curFood < dog.recfood * 1.10
console.log(dogs.some(CheckEatingOkay));

// 7) Create an array containing the dogs that are eating an okay amount of food.
console.log(dogs.filter(CheckEatingOkay));

// 8) create a shallow of dogs array then sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recfood - b.recfood)
console.log(dogsSorted);
