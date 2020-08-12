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
    
    $('<ul>').appendTo($container).attr('class', 'trunk');
    const $butterBeer = $('<li>Butter Beer</li>');
    $butterBeer.appendTo('.trunk');
    const $invisibilityCloak = $('<li>Invisibility Cloak</li>').attr('class', 'secret');
    $invisibilityCloak.appendTo('.trunk');
    const $magicMap = $('<li>Magic Map</li>').attr('class', 'secret');
    $magicMap.appendTo('.trunk');
    const $timeTurner = $('<li>Time Turner</li>').attr('class', 'secret');
    $timeTurner.appendTo('.trunk');
    const $leash = $('<li>Leash</li>').attr('class', 'owl');
    $leash.appendTo('.trunk');
    const $bertieBotts = $('<li>Bertie Botts Every Flavor Beans</li>');
    $bertieBotts.appendTo('.trunk');
});