let wallet = 0;
let tool = 'teeth';

const cutLawn = () => {
  let firstAnswer = prompt('Time to landscape. What will it be?', "'Cut the lawn' or 'Quit'?")
  if (firstAnswer === 'Cut the lawn' && wallet < 5) {
      wallet++
      alert(`You cut the lawn with the tool: ${tool}. You now have ${wallet} dollars in your wallet.`)
      cutLawn();
  } else if (wallet == 5) {
    newTool();
  } else {
    alert('Bye!')
  }
}

const newTool = () => {
  tool = 'rusty scissors'
  alert(`Congrats! You now have ${wallet} dollars and you've earned a new tool: ${tool}!`)
  keepCutting();
}

const keepCutting = () => {
  let secondAnswer = prompt('Time to landscape. What will it be?', "'Cut the lawn' or 'Quit'?")
  if (secondAnswer === 'Cut the lawn' && wallet < 25) {
    wallet+=5
    alert(`You cut the lawn with the tool: ${tool}. You now have ${wallet} dollars in your wallet.`)
    keepCutting();
  } else if (wallet == 25) {
    newToolAgain();
  } else {
    alert('Bye!')
  }
}

const newToolAgain = () => {
  tool = 'push lawnmower'
  alert(`Congrats! You now have ${wallet} dollars and you've earned a new tool: ${tool}!`)
  cutForMoney();
}

const cutForMoney = () => {
  let thirdAnswer = prompt('Time to landscape. What will it be?', "'Cut the lawn' or 'Quit'?")
  if (thirdAnswer === 'Cut the lawn' && wallet < 250) {
    wallet+=50
    alert(`You cut the lawn with the tool: ${tool}. You now have ${wallet} dollars in your wallet.`)
    cutForMoney();
  } else if (wallet >= 250) {
    newToolBattMower();
  } else {
    alert('Bye!')
  }
}

const newToolBattMower = () => {
  tool = 'battery-powered lawnmower'
  alert(`Congrats! You now have ${wallet} dollars (which is more than the $250 price of the fancy lawnmower) and you've earned a new tool: ${tool}!`)
  cutForBigMoney();
}

const cutForBigMoney = () => {
  let fourthAnswer = prompt('Time to landscape. What will it be?', "'Cut the lawn' or 'Quit'?")
  if (fourthAnswer === 'Cut the lawn' && wallet < 500) {
    wallet+=100
    alert(`You cut the lawn with the tool: ${tool}. You now have ${wallet} dollars in your wallet.`)
    cutForBigMoney();
  } else if (wallet >= 500) {
    starvingStudents();
  } else {
    alert('Bye!')
  }
}

const starvingStudents = () => {
  tool = 'a team of starving students'
  alert(`Congrats! You now have ${wallet} dollars and you've earned (maybe 'hired' is a better word) a new tool: ${tool}!`)
  finalStretch();
}

const finalStretch = () => {
  let fifthAnswer = prompt('Time to landscape. What will it be?', "'Cut the lawn' or 'Quit'?")
  if (fifthAnswer === 'Cut the lawn' && wallet < 1000) {
    wallet+=250
    alert(`You cut the lawn with the tool: ${tool}. You now have ${wallet} dollars in your wallet.`)
    finalStretch();
  } else if (wallet >= 1000) {
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

cutLawn();

