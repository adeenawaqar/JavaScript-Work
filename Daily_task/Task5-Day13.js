// Day 13 lecture...
// Looping Array the for-of loop...

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
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}
// console.log([...menu.entries()]);