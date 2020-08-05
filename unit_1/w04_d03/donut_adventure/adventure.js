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
        console.log(`${this.name}'s health is now ${this.health}!`)
    }
    fight(enemy) {
        console.log('i\'m ready to rumble')
        console.log(`Sprinkle spray has done ${this.weapons.sprinkleSpray} damage!`)
        enemy.health -= this.weapons.sprinkleSpray
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
        console.log(`${this.name}'s health is now ${this.health}!`)
    }
    fight(enemy) {
        console.log('i\'m gonna flatten you like a slice of pepperoni!')
        console.log(`Cheese greese has done ${this.weapons.cheeseGrease} damage!`)
        enemy.health -= this.weapons.cheeseGrease
    }
}

const pizzaRat = new Enemy('Pizza Rat');

dougieDonut.talkSass();
pizzaRat.talkSmack();
dougieDonut.announceHealth();
pizzaRat.announceHealth();

pizzaRat.fight(dougieDonut);
dougieDonut.fight(pizzaRat);

dougieDonut.announceHealth();
pizzaRat.announceHealth();