// Day 14 Lecture....
// Topic: "SET"...

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
const orderSet = new Set([
    'Pasta', 'Pizza', 'Noddles', 'Rice', 'Pasta', 'Pizza',]);

console.log(orderSet);
console.log(new Set('Jonas'));
// Size of orderSet...
console.log(orderSet.size);
// check item is exist or not...
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
// add items...
orderSet.add('Garlic Bread');
orderSet.add('Macroni')
// delete items...
orderSet.delete('Rice');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet()) console.log(orderSet);

// Example...
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
console.log(new Set('Adeena Waqar').size);


