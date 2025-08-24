// Day 14 lecture...
// "Optional Chaining" and "looping object object keys ,Values and Entries"...

const weekDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "thursday",
  "friday",
  "Saturday",
  "Sunday",
];

const openingHours = {
  [weekDay[3]]: {
    open: 12,
    close: 22,
  },
  [weekDay[4]]: {
    open: 11,
    close: 23,
  },
  [weekDay[5]]: {
    open: 0, // open 24 hours....
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Firenze, Italy",
  categories: ["Italian", "Pizza", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rice"],

  // ✅ Enhanced Object Literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

if (restaurant.openingHours.friday)
  console.log(restaurant.openingHours.friday.open);

if (restaurant.openingHours && restaurant.openingHours.Monday)
  // with optional chaining...
  console.log(restaurant.openingHours.Monday.open);

// with Optional Chaining...
console.log(restaurant.openingHours.Monday?.open);

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "thursday",
  "friday",
  "Saturday",
  "Sunday",
];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} , we open at ${open}`);
}

// Method of Optional Chaoining...
console.log(restaurant.order?.(2, 3) ?? 'Method does not exist');

// Optional chaining also work in arrays...
const user =
  [{
    name: 'Adeena',
    email: 'adeenawaqar05@gmail.com',
  }]
console.log(user[0]?.name ?? user[0]?.name);

// if else Statement...
if (user.length > 0) {
  console.log(user[0].name);
}
else {
  console.log('user array is empty');
}

// "looping object object keys ,Values and Entries"...
// property names...
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length}days:`

// concept of key...
for (const day of Object.keys(openingHours)) {
  openStr += `${day},`
}
console.log(openStr);

// property values...
const values = Object.values(openingHours);
console.log(values);

// Entire object...
const entries = Object.entries(openingHours);
// console.log(entries);

// [key , {values}]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}