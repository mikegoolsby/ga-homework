// DRY
//// Don't repeat yourself, if you find yourself being repetitive, create a new abstraction
// KISS
//// Simplicity is key. This leads to fewer bugs, easier & writability
// Avoid creating a YAGNI
//// If you dont need functionality, don't add it (see KISS)
// Do the simplest thing that could possibly work
//// again, simplicity is key. if you think it could work and its simple, try that first
// Don't make me think
//// if code requires too much thinking or processing power to be understood, it can be simplified
// Write code for the maintainer
//// think about who will be maintaining or updating your code to new technologies in the future, act as if they hold your fate in their hands
// Single responsibility principle
//// each class/function should perform a single task
// Avoid premature optimization
//// Don't optimize unless first your code works, and if you have empirical data to back up and guide that claim
// Separation of concerns
//// different areas of functionality should be managed by different parts of your code

// Which ones surprise you (if any)?
//// Premature optimization - it kind of goes against simplicity but at the end of the day you should at least make sure the code works
// Which one is currently giving you the most struggle?
//// DRY - see landscaper HW

/////////////////////////////////

const f = l => { // function that accepts l as a parameter
    let es = 0, p = 0, c = 1, n = 0 // assigns multiple variables on a single line
    while (c <= l) { // while loop using above variables
      n = c + p;
      [c, p] = [n, c] // new variables again on a single line
      es += (c % 2 === 0) ? c : 0 // some ternary statement that relies on the while loop up top, adds even numbers to es while c is less than the l arg
    }
    return es // returns new value of es
  }
  
  console.log(f(55)) // runs the output of the f function with 55 as the argument

const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
}
  
  
console.log(f2(55))

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
//// could have called this function "sumOfEvens" or something similiar. We should also rename the variables in a more descriptive fashion. 'previousNum' and 'currentNum' for example.

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
//// I would start working with f2 regardless. f threw me for a loop and should be deleted immediately.

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//// I get an error in VS Code as soon as I remove it, it is necessary. 
