/**
 * To run this file in Gitpod, use the 
 * command node advanced.js in the terminal
 */


//----------------- Arrow Function With Parameters ----------------- 
//Allows us to write more concise JavaScript functions

const addTwoNumbers = (a, b) => {
    //Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4)
console.log(sum2)
// Implicit Returns

const saySomething = message => console.log(message)
saySomething('Hello Alex!');


const sayHello = () => console.log('Hello')
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is Multiline string
    </p>`
)

console.log(returnMultipleLines())

//----------------- The spread-operator ----------------- 
// Gives us more powerful ways of manipulating JavaScript arrays
// By using the ... three dots operator in an array

// No spread operator

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4)
console.log('Second array:', arr2);
console.log('First array:', arr1)

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7)
console.log('Third array:', arr3);
console.log('Fourth array:', arr4)
// Copying an object
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1, d: 4 };
let obj3 = { ...obj1, b: 5 };
console.log('First object:', obj1);
console.log('Second object:', obj2)
console.log('Third object:', obj3)
// Copying only part of an array/object
let arr5 = [...arr1, { ...obj1 }, ...arr3, 'x', 'y', 'z'];
console.log(arr5)

//-----------------  Rest-parameter-syntax ----------------- 
// Allows us to handle the contents of arrays of multiple lengths


// Regular function call 

const sumAll = (a, b, c) => a + b + c;
let sum3 = sumAll(1, 2, 3);
console.log("Sum:", sum3);

// Extra arguments are ignored

let sum4 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum4:", sum4);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum5 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum5:", sum5)


//------------------ Rest Parameter Challenge ----------------- 

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];

console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => {
    let newArray = [...arr, ...letters].sort().reverse();
    return newArray;
};

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

console.log(reverseSort);
console.log(mixedLetters);


//-----------------  Destructuring ----------------- 
// Allows us to easily turn an array or object into multiple variables


// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alica: "accountant",
};

let { mike, jill, alica } = jobs;
console.log(mike, jill, alica);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "ukrainian"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let language2 = {
    firstLang: "spanish",
    secondLang: "finish",
    thirdLang: "german",
    fourthLang: "ukrainian"
};
let { firstLang, fourthLang } = language2;
console.log(firstLang, fourthLang);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry", "watermelon"];
let [favorite, secondFavorite, ...other] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(...other);

//--------------------

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);