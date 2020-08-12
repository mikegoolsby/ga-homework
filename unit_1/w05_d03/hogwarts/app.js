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
    const $invisibilityCloak = $('<li>Invisibility Cloak</li>').addClass( 'secret');
    $invisibilityCloak.appendTo('.trunk');
    const $magicMap = $('<li>Magic Map</li>').addClass('secret');
    $magicMap.appendTo('.trunk');
    const $timeTurner = $('<li>Time Turner</li>').addClass('secret');
    $timeTurner.appendTo('.trunk');
    const $leash = $('<li>Leash</li>').addClass('owl');
    $leash.appendTo('.trunk');
    const $bertieBotts = $('<li>Bertie Botts Every Flavor Beans</li>');
    $bertieBotts.appendTo('.trunk');

    const $table = $('<table>');
    $table.appendTo('body');
    $('<h5>Spring 2017</h5>').insertBefore($table);
    $('<thead>').appendTo($table);
    $('<th>').appendTo('thead').text("Day");
    $('<th>').appendTo('thead').text("Classes");
    $('<tr>').appendTo('table');
    $('<td>').appendTo('tr').text("Monday");
    $('<td>').appendTo('tr').text("Defense Against the Dark Arts, Quidditch Practice, Charms");
    const $tr2 = $('<tr>').appendTo('table');
    $('<td>').appendTo($tr2).text("Tuesday");
    $('<td>').appendTo($tr2).text("Potions, History of Magic");
    const $tr3 = $('<tr>').appendTo('table');
    $('<td>').appendTo($tr3).text("Wednesday");
    $('<td>').appendTo($tr3).text("Herbology, Divination");
    const $tr4 = $('<tr>').appendTo('table');
    $('<td>').appendTo($tr4).text("Thursday");
    $('<td>').appendTo($tr4).text("Quidditch Practice");
    const $tr5 = $('<tr>').appendTo('table');
    $('<td>').appendTo($tr5).text("Friday");
    $('<td>').appendTo($tr5).text("No Class");

    $h4Wand.remove();
    $butterBeer.remove();
    $h4Wand.insertAfter($h4).css('color', 'indigo');
    $h4.insertAfter('table');
    $h4.hide();
    $h4.insertAfter($h3);
    $h4.show();
});