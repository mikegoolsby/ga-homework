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

// const ninjaTurtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for (const o of ninjaTurtle) {
//     console.log(o.toUpperCase() + '!');
// }

////////////////////////////////
// Methods, Revisited
////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies.indexOf('Titanic'));
// favMovies.sort();
// favMovies.pop();
// favMovies.push('Guardians of the Galaxy');
// favMovies.reverse();
// favMovies.shift();
// favMovies.unshift();
// console.log(favMovies.indexOf('Django Unchained'));
// favMovies.splice(14, 1, 'Avatar');
// let progSlice = favMovies.slice(favMovies.length/2);
// console.log(progSlice);
// console.log(favMovies);
// console.log(favMovies.indexOf('Django Unchained')); // homework states we should console.log the index of fast and furious but we did not remove this from the array - we did however remove django unchained and get a value of -1 as its index


////////////////////////////////
// Where is Waldo
////////////////////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];
// whereIsWaldo.splice([1][0], 1);
// whereIsWaldo[1][2] = 'No One';
// console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////

const talkingKitten = ["Love me, pet me! HSSSSSS!", "...human...why you taking pictures of me?...", "...why does the red dot always get away..."];
let meow = 0;

for (i=0; i<21; i++) {
    if (i % 2 === 0) {
        console.log(talkingKitten[meow]);
    } else (i % 2 !== 0); {
        let purr = Math.random() * (talkingKitten.length);
        let purring = Math.round(purr)
        console.log(talkingKitten[purring]);
    }
}