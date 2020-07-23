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

//