$(() => {
    const $container = $('#container')
    console.log($container)
    const $h1 = $('<h1>')
    // console.log($h1)
    $h1.text("Hogwarts");
    $h1.appendTo($container);
    const $h2 = $('<h2>');
    $h2.text("Mike");
    $h2.appendTo($container);
    const $h3 = $('<h3>');
    $h3.text("Gryffindor");
    $h3.appendTo($container);
    const $h4 = $('<h4>')
    $h4.addClass('owl');
    $h4.text("Louie");
    $h4.appendTo($container);
    const $h4Wand = $('<h4>');
    $h4Wand.text("Hornbeam Wand with Dragon Heartstring Core");
    $h4Wand.appendTo($container);

});