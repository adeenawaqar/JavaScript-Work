// Day 14 Lecture....
// Topic: "Maps Fundamental and Maps iteration"...

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
const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Frienzo Italy');
console.log(rest.set(2, 'Lisbon Protugul'));
rest.set('categories', ["Italian", "Pizza", "Vegetarian", "Organic"]).set('open', 11).set('close', 23).set('true', 'We are open :D').set('false', 'We are Closed :(');

console.log(rest.get('categories'));
console.log(rest.get('true'));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(String(time > rest.get('open') && time < rest.get('close'))));

console.log(rest.has('categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'Test');
// rest.set(document.querySelector('h1') , 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

//  "Maps iteration Lecture"...
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try Again!'],
]);

console.log(question);

// Convert object to map...
const { openingHours } = restaurant;
console.log(Object.entries(openingHours));

const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

for (const [key, values] of question) {
    if (typeof key === 'number') console.log(`Answer ${key} : ${values}`);
}
//const Answer = Number(prompt('Your Answer:'));
const Answer = 3;
console.log(Answer);

console.log(question.get(question.get('correct') === Answer));

// Convert Map to Array...
console.log(...question);
console.log(question.keys());
//console.log(...question.entries());
console.log(...question.values());
