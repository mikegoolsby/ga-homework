
$('.square').on('click', (event) => {
    let $x = $('<div>').text('X').addClass('icons');
    // let $o = $('<div>').text('O').addClass('icons');;
    $(event.target).append($x);
});

// this is terribly broken - I'm not sure how to switch between letters or how to get them to stop submitting in the game board. Going to switch over to work on my unit 1 project.

// $('.square').on('click', (event) => {
//     // let $x = $('<div>').text('X').addClass('icons');
//     let $o = $('<div>').text('O').addClass('icons');
//     $(event.target).append($o);
// });
