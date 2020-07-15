// 1. What does the acronym DRY stand for? 
// Why should we pay attention to it? 
// What programming tools have we learned to write DRY code?
// .. DRY stands for "dont repeat yourself". Paying attention 
// .. to DRY will correlate with efficiency. Using loops can
// .. automate repetitive tasks, like while and for loops.

// 2. What is the difference between const and let and var? 
// Please limit your answer to no more than three short sentences. 
// Don't be afraid to research using google and other resources
// .. const is a block assignment operator in which the variable 
// cannot change. let is also a block assignment operator but allows
// you to change the value of the variable. var can be globally 
// or function scoped and can also be updated. 

// ------

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b);
console.log(c > d);
console.log('Kelvin' == 'Kelvin');
console.log(a < b < c);
console.log(a <= a < d);
console.log(e == 'Kelvin');
console.log(48 == '48');
console.log(f !== e);

// var g = 0;
// console.log(g);
var g = b + c;
console.log(g);

// Did you use const, let or var? Why did you choose the one you chose?
// .. I used var because the variable wasn't inside a block,
// but I still wanted to be able to change it. 

// What happens if you don't use const , let or var? 
// Do you get an error? If so what does it say?
// .. the below doesn't give me an error
// z = d + b;
// console.log(z);

// what happens if you write 10 = g?
// 10 = g
// console.log(g);
// SyntaxError: Invalid left-hand side in assignment

console.log(a !== (b || f) == !f && e != c);

// ---

// while (true) {
	// console.log('Do not run this loop');
// }
// is the code (above) an infinite loop? Why or why not?
//  .. no, the default value of a boolean is false

// const runProgram = true;

// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }

// .. not infinite - the const variable declares runProgram
// true and takes care of the default value of the boolean, even
// though runProgram tries to re-declare inside the block

let letters = "A";
let i = 0;

// starts a while loop that will run as long as i is less than 20
while (i < 20) {
    // adds an additional letter per each iteration of i
    letters += "A";
    // increments the value of i by 1 each loop
	i++;
}

// probably 20 instances in line of "A"
console.log(letters);

// i was mostly correct but I think I forgot about the "index" of 0

//  ---

// What are the three components of the control panel? 
// Each component is separated by a semicolon
// .. The first part of the control panel is: initial condition
// The second part of the control panel is: while condition
// The third part of the control panel is: repeating expression

for (let i = 0; i<1000; i++) {
    console.log(i);
}


// What is the difference between \ (backslash, above the enter/return key) 
// and / (forward slash or just slash, shares the key with the ?)? 
// What is \ doing in the string?
// .. the '\' tells JavaScript to continue the string even though
// there is a character delineating the end of the string coming next
// ie an apostrophe or a line break via \n

for (let i = 1000; i>0; i--) {
    console.log(i);
}

for (let i = 1; i<11; i++) {
    console.log('The value of i is: ' + i + ' of 10');
}

for (let i = 1; i<11; i++) {
    console.log(`The value of i is ${i} out of 10`);
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
var StarWarsLength = StarWars.length;

for (var i = 0; i < StarWarsLength; i++) {
    console.log(StarWars[i]);
}

for (var i = 0; i < StarWarsLength; i+=2) {
    console.log(StarWars[i]);
}

