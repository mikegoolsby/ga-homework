// A light switch that can be either on or off.
//// boolean -- let switch = true;
// A user's email address.
//// string -- emailAddress = 'mgoolsby1091@gmail.com';
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// array -- let spaceship = ['hull', 'laser blasters', 'tractor beam', 'warp drive']
// A list of student names from our class.
//// array -- let studentNames = [..."names"]
// A list of student names from our class, each with a location.
//// object-- const studentNames = {
    // larry: "new hampshire"
// }
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
//// array, within an object, with an object, where the list of tv shows is an array-- 
//// const studentNames = {
//     larry: {
//         location: "new hampshire"
//         tvShows: ['here']
//     }
// }


let rainbow = ['red','orange','yellow','green','blue','indigo','violet'];
console.log(rainbow[4]);

const mike = {
    favoriteFood: 'pad thai',
    hobby: 'cycling',
    hometown: 'New York City',
    favoriteDataType: 'objects'
}

console.log(mike.favoriteDataType);








const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }