// Day 13 Lecture...
// Rest Pattern and Parameters...

const restaurant = {
  name: "Classico Italiano",
  location: "Firenze, Italy",
  categories: ["Italian", "Pizza", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rice"],

  openingHours: {
    thursday: {
      open: 11,
      close: 11,
    },
    friday: {
      open: 11,
      close: 11,
    },
    Saturday: {
      open: 12, // Open 24 hours
      close: 12,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2}, ${ing3}`
    );
  },
  orderPizza: function (mainIngrident, ...otherIngridents) {
    console.log(mainIngrident);
    console.log(otherIngridents);
  }
};
// 1) Destructuring...
// ✅ Spread – because it's on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// ✅ Rest – because it's on the LEFT side of =
[a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // Output: 1 2 [3, 4, 5]

// ✅ Rest – skipping one element (the middle one)
const [Pizza, , Rice, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Rice, otherFood);
// Output: Pizza Rice [remaining items from both menus]

// object 
const { Saturday, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//  2) Functions...
// In modern javaScript this method is used to add numbers together...
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)

    sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(3, 5, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [5, 8, 9]
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinch');
restaurant.orderPizza('mushroom');

