let wallet = 0;
let tool = 'teeth';

// begins the game, first iteration
const cutLawn = () => {
  let firstAnswer = prompt('Time to landscape. What will it be?', "'Cut the lawn', 'New tool', or 'Quit'?")
  if (firstAnswer === 'Cut the lawn') {
      wallet++
      alert(`You cut the lawn with the tool: ${tool}. You now have $${wallet} in your wallet. It costs $5 for rusty scissors.`)
      cutLawn();
  } else if (firstAnswer === 'New tool' && wallet < 5) {
    alert("You've been working hard lately.. but not hard enough. Keep working!")
    cutLawn();
  } else if (firstAnswer === 'New tool' && wallet >= 5) {
    newTool();
  } else {
    alert('Bye!')
  }
}

// allows the player to buy their first new tool, subtracts purchase price from their wallet
const newTool = () => {
  tool = 'rusty scissors'
  wallet-=5
  alert(`Congrats! You now have $${wallet} and you've purchased a new tool: ${tool}!`)
  keepCutting();
}

// second iteration, keeps checking wallet amount until user has enough to buy next tool
const keepCutting = () => {
  let secondAnswer = prompt('Time to landscape. What will it be?', "Cut the lawn', 'New tool', or 'Quit'?")
  if (secondAnswer === 'Cut the lawn') {
    wallet+=5
    alert(`You cut the lawn with the tool: ${tool}. You now have $${wallet} dollars in your wallet. It costs $25 for a push lawnmower.`)
    keepCutting();
  } else if (secondAnswer === 'New tool' && wallet < 25) {
    alert("You've been working hard lately.. but not hard enough. Keep working!")
    keepCutting();
  } else if (secondAnswer === 'New tool' && wallet >= 25) {
    newToolAgain();
  } else {
    alert('Bye!')
  }
}

// informs user that they've purchased a new tool, subtracts purchase price from their wallet
const newToolAgain = () => {
  tool = 'push lawnmower'
  wallet-=25
  alert(`Congrats! You now have $${wallet} and you've purchased a new tool: ${tool}!`)
  cutForMoney();
}

// iterates again, same logic. checks wallet balance vs user inputs
const cutForMoney = () => {
  let thirdAnswer = prompt('Time to landscape. What will it be?', "Cut the lawn', 'New tool', or 'Quit'?")
  if (thirdAnswer === 'Cut the lawn') {
    wallet+=50
    alert(`You cut the lawn with the tool: ${tool}. You now have $${wallet} in your wallet. It costs $250 for a battery-powered lawnmower.`)
    cutForMoney();
  } else if (thirdAnswer === 'New tool' && wallet < 250) {
    alert("You've been working hard lately.. but not hard enough. Keep working!")
    cutForMoney();
  } else if (thirdAnswer === 'New tool' && wallet >= 250) {
    newToolBattMower();
  } else {
    alert('Bye!')
  }
}

const newToolBattMower = () => {
  tool = 'battery-powered lawnmower'
  wallet-=250
  alert(`Congrats! You now have $${wallet} and you've purchased a new tool: ${tool}!`)
  cutForBigMoney();
}

// the game keeps looping through various versions of the above iterations, each function calls in the previous to ensure proper flow.
const cutForBigMoney = () => {
  let fourthAnswer = prompt('Time to landscape. What will it be?', "Cut the lawn', 'New tool', or 'Quit'?")
  if (fourthAnswer === 'Cut the lawn') {
    wallet+=100
    alert(`You cut the lawn with the tool: ${tool}. You now have $${wallet} in your wallet. It costs $500 to hire a team of starving students.`)
    cutForBigMoney();
  } else if (fourthAnswer === 'New tool' && wallet < 500) {
    alert("You've been working hard lately.. but not hard enough. Keep working!")
    cutForBigMoney();
  } else if (fourthAnswer === 'New tool' && wallet >= 500) {
    starvingStudents();
  } else {
    alert('Bye!')
  }
}

const starvingStudents = () => {
  tool = 'a team of starving students'
  wallet-=500
  alert(`Congrats! You now have $${wallet} and you've purchased (maybe 'hired' is a better word) a new tool: ${tool}!`)
  finalStretch();
}

const finalStretch = () => {
  let fifthAnswer = prompt('Time to landscape. What will it be?', "Cut the lawn', 'New tool', or 'Quit'?")
  if (fifthAnswer === 'Cut the lawn') {
    wallet+=250
    alert(`You cut the lawn with the tool: ${tool}. You now have ${wallet} dollars in your wallet. Once you have $1000, you win! Keep mowing those lawns!`)
    finalStretch();
  } else if (fifthAnswer === 'New tool' && wallet < 1000) {
    alert("You've been working hard lately.. but not hard enough. Keep working!")
    finalStretch();
  } else if (fifthAnswer === 'New tool' && wallet >= 1000) {
    victoryLap();
  } else {
    alert('Bye!')
  }
}

const victoryLap = () => {
  let victory = prompt('You won! Go play again or quit?', "'play again' or 'quit'")
  if (victory === 'play again') {
    wallet = 0
    tool = 'teeth'
    cutLawn();
  } else {
    alert('Thanks for playing!')
  }
}


// this statement starts the game 
cutLawn();

