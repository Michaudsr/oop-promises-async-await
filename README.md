# oop-promises-async-await
This is my repo for OOP, Promises, Async/Awaits


## HTML

I learned that HTML forms allow you to send data to a server, where data can be input and sent to a HTML result form and printed to the page using Javascript.
index.html:
```
<form action="results.html" method="GET" enctype="multipart/form-data">
    <div>

        <label for="name">Name</label>
        <input type="text" name="name" id="name" required>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>
    </div>
    
```
results.html:
```
<h1>Results</h1>
    <div clas="container">
        <div id="results"></div>
        <a href="./index.html">Back to Form</a>
    </div>
```

## CSS

CSS is used to stylize the contents of a web page by an elements tag name, id, or class.

```
.container {
    border: 3px solid red;
    text-align: center;
    background: grey;
}

@media (min-width:320px){
    .container {
        border: 3px blue;
    }
}


.button{
    background: red;
    color: white;
    
}
```

## JavaScript

### Fetch

Fetch allows you to use a web page API to manipulate parts of the HTTP pipeline, such as requests and responses.

```
√const body = document.querySelector('body');


fetch('https://pokeapi.co/api/v2/pokemon/gengar')
.then(response => {
    // console.log(response);
    return response.json();
})
.then(data => {
    let sprites = data.sprites;
    let profilePic = sprites.front_default;
    let pokeName = data.name;
    let height = data.height;
    let weight = data.weight;
    let moves = data.moves
    let infestation = moves[98].move.name;
    let type = data.types[0].type.name;

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    card.style.border = 'solid';
    console.log(card);

    const image = document.createElement('img');
    image.src = profilePic;
    image.classList.add('card-img-top');
    image.alt = pokeName;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    console.log(cardBody);
    
    let firstLetter = pokeName.charAt(0).toUpperCase();
    let otherLetters = pokeName.slice(1);
    let finalName = firstLetter + otherLetters
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = finalName;
    console.log(cardTitle);


    const cardWeight = document.createElement('p');
    const cardHeight = document.createElement('p');
    const cardMove = document.createElement('p');
    const cardType = document.createElement('p');
    
    cardWeight.classList.add('card-text');
    cardHeight.classList.add('card-text');
    cardMove.classList.add('card-text');
    cardType.classList.add('card-text');

    cardWeight.textContent = "Weight: " + weight;
    cardHeight.textContent = "Height: " + height;
    cardMove.textContent = "Move: " + infestation;
    cardType.textContent = "Type: " + type;

    

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardWeight);
    cardBody.appendChild(cardHeight);
    cardBody.appendChild(cardMove);
    cardBody.appendChild(cardType);

    card.appendChild(image);
    card.appendChild(cardBody);
    console.log(card);

    body.appendChild(card);

});
```

### Constructor Functions

Constructor functions can be named with Capital letters, and are called using new.

```
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

 ```

### Class

Class can be passed in a function, return a function and assign it to a variable

```
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
```
### Promise 

Promises are functions that can either be pending, fullfiled or rejected with an error
```
let isMomHappy = false;

// Promise
let willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);
```

### Async/Await
Async means that the function will always return a promise, and await means to wait until the promise settles and returns its result

```
async function printGit(){
    let stevenEndpoint = 'https://api.github.com/users/michaudsr';
    let steven = await fetch(stevenEndpoint).then(res => res.json());
    console.log(facebook);
}
printsteven();
```