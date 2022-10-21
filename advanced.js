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


//-----------------  The map, filter and reduce methods ----------------- 
// Provides advanced array-handling methods


//-----------------  The map()
//Allows us to execute a function on all elements in an array

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results)

// Using map()
const multByTwo = function (num) {
  return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()
const simplfied = nums.map(function (num) { return num * 2 });
console.log(simplfied);


// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id, student.profession]);
console.log(studentsWithIds);

//----------------- Map Challenge -----------------
let studentS = [
  {
    name: 'Joh',
    subjects: ['maths', 'english', 'cad'],
    teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
    results: { maths: 90, english: 75, cad: 87 },
  },
  {
    name: 'Emily',
    subjects: ['science', 'english', 'art'],
    teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
    results: { science: 93, english: 80, art: 95 },
  },
  {
    name: 'Adam',
    subjects: ['science', 'maths', 'art'],
    teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
    results: { science: 93, maths: 77, art: 95 },
  },
  {
    name: 'Fran',
    subjects: ['science', 'english', 'art'],
    teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
    results: { science: 93, english: 87, art: 95 },
  }
];

let [joh, ...otherStudens] = studentS.map(studentS => [studentS.name, studentS.results]);

console.log(joh);
console.log(...otherStudens);

//-----------------  The filter()
//Allows us to filter the contents of a JavaScript array

// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paul = people.filter(person => person.name === "Paul");
console.log(paul);


// Complex Filtering
const students_list = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students_list.filter(hasStrongSkills);
console.log(candidates);


//-----------------  The reduce() method
//Allows us to reduce an array to one calculated value

// Summing an array of numbers:
const numbers = [0, 1, 2, 3, 4];
let sum_ = numbers.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
}, 10);
console.log(sum_);

//--------------------

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// { Developer: 12, Designer: 4 } <-- this is what we want!
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if(!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;

}, {});

console.log(experienceByProfession);



let studentsS = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

const biggest = studentsS.reduce((acc, curr) => {
  if (curr.results.english > acc.max) {
      let { name, results } = curr;
      acc.name = name;
      acc.max = results.english;
  }
  return acc;
}, { name: "", max: 0 });

console.log(biggest);