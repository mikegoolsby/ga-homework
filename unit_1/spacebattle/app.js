const ussSpaceCat = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack: () => {
      if (Math.random() >= ussSpaceCat.accuracy) { // this needs an edit
          console.log('Attack successful!')
      } else {
          console.log('Attack wasn\'t successful!')
      }
    } 
}

class Alien {
    constructor() {
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10
    }
    attack() {
        // function here
    }
}


const alien1 = new Alien()
console.log(alien1);