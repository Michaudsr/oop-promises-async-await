// Object Oriented Programming
// Prototypal Inheritance 


const dog = {
    name: "Michael",
    goodBoy: true,
    gender: "girl"

};

const dogTwo = {
    name:'Rocco',
    color: 'brown'
};

dogTwo.__proto__ = dog;

console.log(dogTwo);
console.log(dog);
console.log(dogTwo.goodBoy);
console.log(dogTwo.name);

// make two objects and one object need to inherit from the other object

const cat = {
    name: 'Taco',
    color:  'brown',
    gender: 'male'

};

const catTwo = {
    name: 'Nacho',
};

catTwo.__proto__ = cat;

console.log(cat);
console.log(catTwo);

// Constructor Functions

function User(name) {
    // this
    this.name = name; 

    // return this
}

let adam = new User('Adam');
console.log(adam.name);
let pete = new User('Pete');
console.log(pete.name);

function NBAPlayer(name, team, threePointShooter) {
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
console.log(steph);
console.log(steph.name);
// make a constructor function
// make 3 new variables with that contructor function

function TruckType( brand, model , true) {
    this.brand = brand;
    this.model = model;
    this.bestModel = bestModel;
}

let chevy = new TruckType('Chevrolet', 'Silverado', true);
console.log(chevy);
console.log(chevy.brand);
