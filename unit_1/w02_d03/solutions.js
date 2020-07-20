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

console.log(sumArray([1, 2, 3, 4, 5, 6]));