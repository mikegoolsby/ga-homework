const ussSpaceCat = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack: (alien) => {
      if (Math.random() <= alien.accuracy) {
            alien.hull-=this.firepower
            if (Number.isNaN(alien.hull)) {
                console.log(`Space cat attack successful! Alien ship is destroyed!`);
            } else {
                console.log(`Space cat attack successful! Alien ship has ${alien.hull} health points left!`)
            }
      } else {
          console.log(`Space Cat attack wasn\'t successful!`)
      }
    },
    retreat: () => {
        alert('Peace was not achieved this time.. thanks for playing!')
    }
}

class Alien {
    constructor() {
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10
    }
    attack(ship) {
        if (Math.random() <= ship.accuracy) {
            ship.hull-=this.firepower;
            if (Number.isNaN(ship.hull)) {
                console.log('Alient attack successful! Space cat ship is destroyed! GAME OVER!')
            } else {
                console.log(`Alien attack successful! Space cat has ${ship.hull} health points left!`);
            }
        } else {
            console.log('Alien attack wasn\'t successful!')
        }
    }
}

// For loop that factories 6 alien ships from the Alien class
let alienShips = []
for (let i=0; i<6; i++) {
    alienShips.push(new Alien)
}

// Beginning dialogue in the form of browser alerts
alert("Welcome to SPACEBATTLE! The timeless classic console space adventure between space foes.")
alert(`Captain Space Cat... There are ${alienShips.length} alien ships headed your way! Start reading your browser console and ready up for battle!`)

// Prompt to capture first user input (maybe abstract this into a function?)
const initialInput = prompt("Atack, or retreat?", "'Attack', 'Retreat'");


let alien = alienShips[0]
if (initialInput.toLowerCase() === 'attack') {
    ussSpaceCat.attack(alien);
} else {
    ussSpaceCat.retreat();
}

// if (alien.hull >= 0) {
//     alien.attack(ussSpaceCat)
// } else {
//     initialInput();
// }

// Assigns alien to the first index in the Alien Ships array, then attacks the first ship up
// let alien = alienShips[0]
// ussSpaceCat.attack(alien);

// alien1.attack(ussSpaceCat);


// ussSpaceCat.retreat();