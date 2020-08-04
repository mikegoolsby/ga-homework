class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories']
    }
    talkSass() {
        console.log(this.catchPhrases[Math.floor(Math.random()*this.catchPhrases.length)])
    }
    announceHealth() {
        console.log(this.health)
    }
    fight() {
        console.log('i\'m ready to rumble')
        // let newWeapon = Math.floor(Math.random(Object.keys(this.weapons))) // WIP
        console.log(`${this.name} has used ${newWeapon}!`)
    }
}

const dougieDonut = new Hero('Dougie the Donut');


class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        }
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer']
    }
    talkSmack() {
        console.log(this.catchPhrases[Math.floor(Math.random()*this.catchPhrases.length)])
    }
    announceHealth() {
        console.log(this.health)
    }
    fight() {
        console.log('i\'m gonna flatten you like a slice of pepperoni!')
    }
}

const pizzaRat = new Enemy('Pizza Rat');

dougieDonut.talkSass();
pizzaRat.talkSmack();
dougieDonut.announceHealth();
pizzaRat.announceHealth();

dougieDonut.fight();