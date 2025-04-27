/* Array Notes
Array is collection of elements stored at continues memory locations
In JS, array can hold the different types of data: numbers, strings, objects, even other arrays!
*/
const fruits = [];

fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3 
fruits[5] = "mango";
console.log(fruits[5]); //mango

console.log(Object.keys(fruits)); //[ '0', '1', '2', '5' ]
console.log(fruits.length);

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
    console.log(`${index}: ${item}`)
});

const iterator = colors.keys();
for(const key of iterator) {
    console.log(`${key}: ${colors[key]}`)
}

//copy an array
//create a copy using spread operator
const fruitsCopy = [...fruits];
console.log(fruitsCopy);

//create a copy using from method

const fruitsCopy1 = Array.from(fruits);
console.log(fruitsCopy1);

//create a copy using slice method
const fruitsCopy2 = fruits.slice(0,3);
console.log(fruitsCopy2);

// array method

fruits.pop();
console.log(fruits);

fruits.unshift("avocado"); // add at the start
console.log(fruits);

fruits.shift(); //remove from the start
console.log(fruits);


//map : create a new array by transforming

const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

// filter - create a new array by conditions
const nums = [1,2,3,4,5,6,7,8,9, 10];
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums);