$(() => {
    const $container = $('#container')
    console.log($container)
    const $h1 = $('<h1>')
    // console.log($h1)
    $h1.text("Hogwarts");
    $h1.appendTo($container);
});