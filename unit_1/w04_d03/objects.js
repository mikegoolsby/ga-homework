class Hamster {
    constructor(name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log('squeak squeak');
    }
    eatFood() {
        console.log('nibble nibble');
    }
    getPrice() {
        return this.price;
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`Hi ${this.name}!`)
    }
    eat() {
        this.weight++
        this.mood++;
    } 
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount+=10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood+=10
        this.bankAccount-=hamster.getPrice();
    }
}

const timmy = new Person('Timmy');

while (timmy.age < 5) {
    timmy.ageUp();
}

for (i=0; i<5; i++) {
    timmy.eat();
}

for (i=0; i<5; i++) {
    timmy.exercise();
}

while (timmy.age < 14) { // aging timmy 9 years
    timmy.ageUp();
}

const gus = new Hamster('Gus');
gus.owner = 'Timmy'

timmy.buyHamster(gus)

while (timmy.age < 29) { // aging timmy 15 years 
    timmy.ageUp();
}
console.log(timmy)