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


const bar = () => {
    console.log('bar here');
}
bar(); // have to invoke functions in the proper spot

const foo = () => {
    console.log('foo here');
}
foo(); // same here

// foo(); // you can't invoke a function before you define it

// const foo ()=>{
//     console.log('hi');
//

////////////////////////

