let tool = 'teeth';
let wallet = 0;

const cutLawn = () => {
  let firstAnswer = prompt('Time to landscape. What will it be?', "'Cut the lawn' or 'Quit'?")
  if (firstAnswer === 'Cut the lawn') {
      wallet += 1
  } else {
      alert('Bye!')
  }
}

cutLawn();