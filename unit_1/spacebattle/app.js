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

let alienShips = []
for (let i=0; i<6; i++) {
    alienShips.push(new Alien)
}

alert("Welcome to SPACEBATTLE! The timeless classic console space adventure between space foes.")
setTimeout(() => {alert(`Captain Space Cat... There are ${alienShips.length} alien ships headed your way! Start reading your browser console and ready up for battle!`);}, 2000);




// alien1.attack(ussSpaceCat);
// ussSpaceCat.attack(alien1);

// ussSpaceCat.retreat();