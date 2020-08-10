// Defines Alien class
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
                console.log('Alien attack successful! Space cat ship is destroyed! GAME OVER!')
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

const mainAction = () => {
    const initialInput = prompt("Atack, or retreat?", "'Attack', 'Retreat'");
    let alien = alienShips[0]
    if (initialInput.toLowerCase() === 'attack') {
        ussSpaceCat.attack(alien);
    } else {
        ussSpaceCat.retreat();
    }
}

const gameWon = () => { // if the aliens are gone, ie array is empty, you win
    if (alienShips.length > 0) {
        mainAction();
    } else {
        console.log("Congratulations, Captain. The aliens have been defeated. Peace has been restored. Let's get some pizza.")
        ussSpaceCat.victory();
    }
  }

// Space Cat, or hero, object
const ussSpaceCat = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack: (alien) => {
      if (Math.random() <= alien.accuracy) {
            alien.hull-=this.firepower
            if (Number.isNaN(alien.hull)) {
                console.log(`Space cat attack successful! Alien ship is destroyed!`);
                alienShips.shift();
                console.log(`There are now ${alienShips.length} ships left!`)
                gameWon();
            } else {
                console.log(`Space cat attack successful! Alien ship has ${alien.hull} health points left!`)
            }
      } else {
          console.log(`Space Cat attack wasn\'t successful!`)
          gameWon();
      }
    },
    retreat: () => {
        alert('Peace wasn\'t achieved this time... Thanks for playing!')
    },
    victory: () => {
        alert('Thanks for playing!')
    }
}


// Beginning dialogue in the form of browser alerts
alert("Welcome to SPACEBATTLE! The timeless classic console space adventure between space foes.")
alert(`Captain Space Cat... There are ${alienShips.length} alien ships headed your way, but you can only fight one at a time! Start reading your browser console and ready up for battle!`)

// Function to capture input, then use that input to attack

gameWon(); // calls the game won function
