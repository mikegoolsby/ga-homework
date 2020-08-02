const crayonBox = {
    colors: ['red', 'yellow', 'green', 'blue']
}

// console.log(crayonBox.colors[0]);

const bottle = {
    cap: {
        material: 'metal',
        color: 'blue'
    }
}

// console.log(bottle.cap.color);

const receipt = [{
    beans: 2,
    apples: 4
}]

// console.log(receipt[0].apples)

const apartmentBuilding = [
    ['Mike', 'Devan', 'Sydney', 'Gab']
]

// console.log(apartmentBuilding[0][1]);

const knit = () => {
  const scarves = {
      item: 'scarf',
      size: '6ft'
  }
  return scarves;
}

// console.log(knit()); 

const crayonSelector = (index) => {
    const crayonBox = {
        colors: ['red', 'yellow', 'green', 'blue']
    }
    return crayonBox.colors[index]
}

// console.log(crayonSelector(0));

const powerButton = () => {
  const options = () => {
      console.log('select a song')
  }
  return options();
}

// powerButton();

//////////////////////

const vendingMachine = {
    snacks: [{name: 'Reeses',
        price: '2.50'}, 
        {name: 'Granola Bar', 
        price: '2.50'}, 
        {name: 'Chips',
        price: '3.00'
    }],
    vend: (index) => {
        console.log(vendingMachine.snacks[index].name)
    }
}

// vendingMachine.vend(2);

////////////////////////

const add = (num1, num2) => {
  return num1 + num2
}

const subtract = (num1, num2) => {
  return num1 - num2
}

const multiply = (num1, num2) => {
  return num1 * num2
}

const divide = (num1, num2) => {
  return num1 / num2
}

const calculate = (num1, num2, operates) => {
  return operates(num1, num2)
}

// console.log(calculate(2, 2, add));
// console.log(calculate(2, 2, subtract));
// console.log(calculate(2, 2, multiply));
// console.log(calculate(2, 2, divide));

////////////////////////


// const bar = () => {
//     console.log('bar here');
// }
// bar(); // have to invoke functions in the proper spot

// const foo = () => {
//     console.log('foo here');
// }
// foo(); // same here

// foo(); // you can't invoke a function before you define it

// const foo ()=>{
//     console.log('hi');
//

////////////////////////

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big', 'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the', 'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward']

// EVERY
console.log(nums.every(num => num >= 0))
console.log(panagrams.every(word => word.length < 8));

// FILTER
console.log(nums.filter(num => num < 4));
console.log(panagrams.filter(word => word.length % 2 === 0));

// FIND
console.log(nums.find(num => num % 5 === 0));
console.log(panagrams.find(word => word.length > 3));

// FIND INDEX
console.log(nums.findIndex(num => num % 3 === 0));
console.log(panagrams.findIndex(word => word.length < 2));

// FOR EACH
nums.forEach((num) => {
    console.log(num * 3);
})

panagrams.forEach((word) => {
    console.log(word + '!')
})

// MAP
const newNums = nums.map((num) => {
    return num * 100
})

const newPanagrams = panagrams.map((word) => {
    return word.toUpperCase();
})

// SOME 
console.log(nums.some(num => num % 7 === 0));
console.log(panagrams.some(word => {
    return word.includes('a');
}))