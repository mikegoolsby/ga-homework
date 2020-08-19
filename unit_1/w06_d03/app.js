const toDoList = [];

const render = () => {
    console.log('list: ', toDoList);
  $('ul').empty();
  toDoList.forEach((item) => {    
    $('ul').append('<li>' + item + '</li>');
  });


}


$('form').on('submit', (event) => {
    event.preventDefault();
    toDoList.push($('#input-box').val());
    $(event.currentTarget).trigger('reset');
    render();
});

$('button').on('click', (event) => {
  event.preventDefault();
  toDoList.push($('#input-box').val());
  $(event.currentTarget).trigger('reset');
  console.log(event)
  render();
});


