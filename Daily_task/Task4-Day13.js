// Day 13 lecture...
// Logical Assignment operator...

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
const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
}
const rest2 = {
    name: 'La Piazza',
    onwer: Ali,
}
// OR Assignment Operator....

// rest1.numGuests ||=  10;
// rest2.numGuests||= 10;
//console.log(rest1);
//console.log(rest2);

// Nulish operator (null or undefined )...
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// AND Assignment operator...
// rest2.onwer = rest2.onwer && '<ANONYMOUS>';
// rest1.onwer = rest1.onwer && '<ANONYMOUS>';

rest1.onwer &&= '<ANONYMOUS>';
rest2.onwer &&= '<ANONYMOUS>';