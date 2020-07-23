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
    this.intro = function(){
        console.log("Hi, my name is " + this.name)
    }
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
console.log(steph);
console.log(steph.name);
steph.intro();


// make a constructor function
// make 3 new variables with that contructor function

function TruckType(brand, model, bestModel) {
    this.brand = brand;
    this.model = model;
    this.bestModel = bestModel;
    this.intro = function(){
        console.log("Hi, my name is" + this.name)
    }
}

let chevy = new TruckType('Chevrolet', 'Silverado', true);
console.log(chevy);
console.log(chevy.brand);

// Class
// class Car {
//     constructor(year, make, model, color, ) {
//         this.year = year;
//         this.make = make;
//         this.model = model;
//         this.color = color;
//     }
    
// }
//         drive() {
//             console.log('Vroom');
//         }
    
    



// let tesla = new Car(2020, 'Tesla', 'Model S', 'red' );
// console.log(tesla);
// tesla.drive();
// tesla.intro();

class GithubProfile {
    constructor(username, name, url) {
    this.username = username;
    this.name = name;
    this.url = url
}

intro(){
    console.log(`My name is ${this.name}and my username is @${this.username} `);
}
}
// 
fetch('https://api.github.com/users/michaudsr')
.then(response =>{
    return response.json();
})

.then( data => {
    
    let githubURL = data.url;
    let githubUsername = data.login;
    let githubName = data.name;

    let steven = new GithubProfile(githubUsername, githubName, githubURL);
    console.log(steven);

})




