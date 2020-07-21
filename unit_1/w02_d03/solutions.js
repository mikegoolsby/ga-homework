// What is the difference between a parameter and an argument?
// .. A paramater is an input to a function that can modify its behavior
// .. specifying the value of the parameter when invoking the function is
// .. called an argument

// Within a function, what is the difference between return and console.log?
// .. in order for a function to work, it needs to have a return 
// .. output cannot come from a console.log - return values will not appear
// .. in the console unless they are console.log'd

////////////////////////

const checkPalindrome = (word) => {
  word.toLowerCase()
  newWord = word.split("").reverse().join("") 
    if (word === newWord) {
      return true
  } else {
      return false
  }
}

// console.log(checkPalindrome('radar'));
// console.log(checkPalindrome('Borscht'));


const sumArray = (nums) => {
  let sum = 0
  for (i=0; i<nums.length; i++) {
      sum += nums[i];
  } return sum
}

// console.log(sumArray([1, 2, 3, 4, 5, 6]));

const checkPrime = (num) => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

// console.log(checkPrime(4))

const printPrimes = (testVal) => {
  let j = 0
  while (j <= testVal) {
    if (checkPrime(j) === true) {
      console.log(j)
    }
    j++
  }
}

// printPrimes(97);

const randomMove = () => {
  let move = ['Rock','Paper','Scissors']
  return move[Math.floor(Math.random() * move.length)];
}

let computersMove = randomMove();
let usersMove = randomMove();
// console.log(computersMove, usersMove)

const rockPaperScissors = (computersMove, usersMove) => {
  if (computersMove === usersMove) {
    return `Computer chose ${computersMove} & User chose ${usersMove}. Tie!`
  } else if (computersMove === 'Rock' && usersMove === 'Scissors') {
    return `Computer chose ${computersMove} & User chose ${usersMove}. Computer wins!`
  } else if (computersMove === 'Paper' && usersMove === 'Rock') {
    return `Computer chose ${computersMove} & User chose ${usersMove}. User wins!`
  } else if (computersMove === 'Scissors' && usersMove === 'Paper') {
    return `Computer chose ${computersMove} & User chose ${usersMove}. Computer wins!`
  } else {
    return `Computer chose ${computersMove} & User chose ${usersMove}. User wins!`
  }
}
// randomMove();
// console.log(rockPaperScissors(computersMove, usersMove));