////////////////////////////////
// Easy Going
////////////////////////////////

// for (i=1; i<21; i++) {
//     console.log(i)
// }

////////////////////////////////
// Get Even
////////////////////////////////

// for (i=0; i<201; i+=2) {
//     console.log(i)
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////

// for (i=1; i<101; i++) {
//     if (i % 3 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 5001
// // console.log(plantee);
// wolfy[3] = 'Gotham City'
// // console.log(wolfy);
// dart.push('Hawkins');
// // console.log(dart);
// wolfy.shift();
// wolfy.unshift('Gameboy');
// // console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const o of ninjaTurtle) {
    console.log(o.toUpperCase() + '!');
}