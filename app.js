// // Object Oriented Programming
// // Prototypal Inheritance 


// const dog = {
//     name: "Michael",
//     goodBoy: true,
//     gender: "girl"

// };

// const dogTwo = {
//     name:'Rocco',
//     color: 'brown'
// };

// dogTwo.__proto__ = dog;

// console.log(dogTwo);
// console.log(dog);
// console.log(dogTwo.goodBoy);
// console.log(dogTwo.name);

// // make two objects and one object need to inherit from the other object

// const cat = {
//     name: 'Taco',
//     color:  'brown',
//     gender: 'male'

// };

// const catTwo = {
//     name: 'Nacho',
// };

// catTwo.__proto__ = cat;

// console.log(cat);
// console.log(catTwo);

// // Constructor Functions

// function User(name) {
//     // this
//     this.name = name; 

//     // return this
// }

// let adam = new User('Adam');
// console.log(adam.name);
// let pete = new User('Pete');
// console.log(pete.name);

// function NBAPlayer(name, team, threePointShooter) {
//     this.name = name;
//     this.team = team;
//     this.threePointShooter = threePointShooter;
//     this.intro = function(){
//         console.log("Hi, my name is " + this.name)
//     }
// }

// let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
// console.log(steph);
// console.log(steph.name);
// steph.intro();


// // make a constructor function
// // make 3 new variables with that contructor function

// function TruckType(brand, model, bestModel) {
//     this.brand = brand;
//     this.model = model;
//     this.bestModel = bestModel;
//     this.intro = function(){
//         console.log("Hi, my name is" + this.name)
//     }
// }

// let chevy = new TruckType('Chevrolet', 'Silverado', true);
// console.log(chevy);
// console.log(chevy.brand);

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

// class GithubProfile {
//     constructor(username, name, url) {
//     this.username = username;
//     this.name = name;
//     this.url = url
// }

// intro(){
//     console.log(`My name is ${this.name}and my username is @${this.username} `);
// }
// }
// // 
// fetch('https://api.github.com/users/michaudsr')
// .then(response =>{
//     return response.json();
// })

// .then( data => {
    
//     let githubURL = data.url;
//     let githubUsername = data.login;
//     let githubName = data.name;

//     let steven = new GithubProfile(githubUsername, githubName, githubURL);
//     console.log(steven);

// })




// let isMomHappy = false;

// // Promise
// let willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             let reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );

// // // console.log(willIGetNewPhone)
// // willIGetNewPhone.then(result => {
// //     console.log(result);
// // })

// let willIGetNewPhone = new Promise ( (resolve, reject )=>{
//     if (isMomHappy){
//         const phone = {
//             brand: 'iPhone',
//             color: 'red'
//         }
//         resolve(phone);
//     }
//     else {
//         reject('No phone');
//     }

// })




// async function printGit() {
//     let stevenEndpoint = 'https://api.github.com/users/michaudsr';
//     let lizzEndpoint = 'https://api.github.com/users/lizzwest';
//     let steven = await fetch(endpoint).then(response => {
//         return response.json();
//     console.log(steven);
//   });
//   let lizz = fetch(lizzEndpoint).then(response => response.json());
//   console.log(steven);
//   console.log(lizz);

//   fetch(endpoint)
//   .then(response => {
//       response.json();
//   });

async function printFacebook(){
    let facebookEndpoint = 'https://api.github.com/users/facebook';
    let facebook = await fetch(facebookEndpoint).then(res => res.json());
    console.log(facebook);
}
printFacebook();



// async function printUsers() {
//     const endpoint = 'https://jsonplaceholder.typicode.com/users';
//     let users = await fetch(endpoint).then(res => res.json());
//     console.log(users);
//   }
//   printUsers();