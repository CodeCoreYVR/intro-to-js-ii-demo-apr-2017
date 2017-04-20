'use strict'; // this is a special command to the javascript engine
// to follow the JavaScript specification much more strictly
console.log('Demo file loaded!');

// EXERCISES

// 1. Write a function, insult, that takes a name, and returns an insult

// A function is declared with the `function` keyword
// It can be given an optional name (i.e. insult)
// It can take any number of optional arguments (i.e name)
// It can optionally return a value (i.e. `I fart in your general direction, ${name}`)
function insult (name) {
  return `I fart in your general direction, ${name}`
}

// Functions can also be declared anonymously and assigned to a variable
// 👇
/*
const insult = function (name) {
  return `I fart in your general direction, ${name}`
}
*/

// 2. Write a function, increment, that takes a number, adds 1 to it and returns
// it

/*
function increment (num) {
  return num += 1; // BAD! This mutates any variable passed in to increment
}
*/
// let a = 1;
// increment(a) // returns 2
// console.log(a) // a == 2 BAD!

function increment (num) {
  return num + 1; // GOOD! Any variable passed to increment will not be changed
}
// let a = 1;
// increment(a) // returns 2
// console.log(a) // a == 1 GOOD!


// 3. Write a function, repeat, that takes a string and a number then returns
// the taken string repeated a number of times

// even when a function is assigned to a variable, it
// can be given a name 👇 (i.e. hello)
let repeat = function hello (str, num) {
  return str.repeat(num);
}

// When code inside a function crashes, the given error message
// will refer to the crashing function by name
// It's good practice to give your function names
repeat = function (str, num) {
  let out = '';
  for (let i = 0; i < num; i++) {
    out += str;
  }
  return out;
}

// Scoping Demo

let scriptScope = `I'm in the script!`;

function a() {
  console.log('Inside function a')
  console.log('scriptScope:', scriptScope);
}

function b() {
  let scriptScope = `I'm in b!`
  console.log('Inside function b')
  console.log('scriptScope:', scriptScope);
}

console.log('a & b scoping example:')
a();
console.log('-----------')
b();

// let & const vs. var

function letConstScope () {
  // variables declared with let & const are scoped
  // to the block they were created in
  // This is called block scoping

  // A block is code delimited by curly braces (i.e {...})
  // with the exception of object declarations
  // (e.g. if (...) { /* block */ }, for (...) { /* block */ },
  // while (...) {/* block */}, etc)
  const u = 123;
  if (true) {
    let i = 456;

    { // this is a block by itself
      let nestedI = 890;
    }
    console.log(nestedI)
  }

  // u & i will not be defined here, because they were created inside
  // the block of the if above instead of the block of the function letConstScope
  console.log(u)
  console.log(i)
}

function varScope () {
  var v; // v is declared
  console.log(v)
  console.log(n);

  if (true) {
    // variables declared with var are scoped to the closest block
    // of a function (i.e. n exists inside all of varScope not just
    // the block of this `if`)
    var n = 567; // n is declared and assigned
    // variables declared with var are said to be hoisted
    // they will exist from the beginning of the function even if they
    // were declared somewhere else inside
    v = 123; // v is assigned
  }
  console.log(n);
  console.log(v);
}

// EXERCISES
// 1. Create an array, first, containing the elements "hello", 5 and 'a'

const first = ["hello", 5, 'a'];

/*
let first;
first = ["hello", 5, 'a'];
*/

// 2. Change the 2nd element of the first to 6
// Arrays are zero index which means that the first element
// is at index 0
first[1] = 6;

// 3. Create an array, second, containing the digits from 0 to 100

const second = [];
for (let i = 0; i <= 100; i += 1) {
  second.push(i);
}
console.log(second);

const secondAlt = Array.from({length: 101}); // Generates an array with
// 101 elements all set to undefined

for (let key = 0; key <= 100; key += 1) {
  secondAlt[key] = key;
}
console.log(secondAlt);

const secondAlt2 = Array.from(Array(101).keys())



/* other ways for the curious, this is material we will cover later
Array.from({length: 101}, function (v, i) { return i })
Array.from({length: 101}, (v, i) => i)
Array.from({length: 101}).map((v, i) => i)
*/

// 4. Compute the length of second
second.length

// EXERCISES
//
// 1. Create an array containing 0, 5, 6, -12, and use a loop to compute the sum
// of its elements

const arrB = [0, 5, 6, -12]
let sum = 0;

for (let val of arrB) {
  sum += val;
}

function sumArr (arr) {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return sum;
}
console.log('sum of arrB:', sumArr(arrB));

// 2. Create an array containing the words "apple", "dog", "computer", "cup",
// use a loop to log "[Word] has [length] characters." for each word.

const words = ["apple", "dog", "computer", "cup"];

function sayWordLengths (wordArr) {
  for (let word of wordArr) {
    console.log(`${word} has ${word.length} characters!`)
  }
}

sayWordLengths(words);

// 1. Create a string "hello" and then use `split` to make an array of its characters
// passing split an empty string will split a string in between its characters
'hello'.split('') // returns ['h', 'e', 'l', 'l', 'o']

// 3. Make a string containing all the numbers from 0-99.
// (e.g. "012345...")

function arrOfNums (n) {
  return Array.from(Array(n).keys())
}

console.log(arrOfNums(100).join(''));

// DEMO: Create a car object

// this object describes car
const car = {
  // 👇 the left-hand side of `:` is a property (often referred to as key)
  color: 'red',
  //      👆 the right-hand side of `:` is a value
  doorCount: 4,
  type: 'sedan',
  brand: 'BMW',
  // properties whose values are functions are called methods
  drive: function () { return 'VROOM!' }
}
// to read a property, you can use the dot operator
car.color // returns 'red'
car.type // returns 'sedan'

// methods of objects can be called like any normal funciton
car.drive()

// the dot operator can be use to change properties as well
// changes the value of color to green
car.color = 'green'

// it can also be used to add new properties
car.hasSpoiler = true

// reading a property that doesn't exist returns `undefined`
car.thing // returns undefined

// EXERCISE

// 1 .Create an object me containing your name, age, and occupation.

const me = {
  name: 'Steve',
  age: NaN,
  occupation: 'Developer & Teacher of Things'
};

// 2. Change your occupation to "javascript expert"
me.occupation = 'Javascript Expert';

// 3 Add a "skills" property containing the array ['ruby', 'rails', 'javascript']
me.skills = ['ruby', 'rails', 'javascript'];

// Navigating objects
const obj = {a: [1,2,{b: 'obj in arr'}], b: {v: [1,2,3], j: {k: 'obj in obj'}}};

// To get the value 'obj in arr', we can navigate through propeties and indexes as follows:
obj.a[2].b
// or...
obj['a'][2]['b']

// To get 'obj in obj', we can do as follows
obj.b.j.k
//or ...
obj['b']['j']['k']

// EXERCISES
//
// 2. Write a function that takes a sentence and returns an object of all
// the words and their lengths

function countWords (sentence) {
  let counts = {};
  for (let word of sentence.split(' ')) {
    counts[word.toUpperCase()] = word.length;
  }
  return counts;
}





/* */
