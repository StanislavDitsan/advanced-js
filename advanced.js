/**
 * To run this file in Gitpod, use the 
 * command node advanced.js in the terminal
 */

// Vanilla JavaScript Function

//----------------- Arrow Function With Parameters

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

//----------------- The spread-operator

// No spread operator

// Copying an array

// Copying an object

// Copying only part of an array/object