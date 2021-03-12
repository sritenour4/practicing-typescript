let firstName:string = 'Shannon';
const NUM_OF_STATES:number = 50;
let sum:number = 5 + 4;

//  Display an alert that says Hello World!
function sayHello() {
    alert('Hello World!');
}

sayHello();

// If age is less than 21, display an alert.
function checkAge(name:string, age:number) {
    if (age < 21) {
        alert('Sorry ' + name + ', you aren\'t old enough to view this page!');
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let myFavoriteVegetables: string[] = ['broccoli', 'carrots', 'asparagus', 'brussels sprouts'];

// Use a loop to display each of my favorite vegetables to the console.
for (let i = 0; i < myFavoriteVegetables.length; ++i) {
    console.log(myFavoriteVegetables[i]);
}

// Pet object with 2 properties, name and breed
let pet = {
    name: 'Lucy',
    breed: 'Domestic short-haired cat'
};

console.log(pet.name, pet.breed);

pet.name = 'Lizzo';
console.log(pet.name, pet.breed);

pet.name = 'Glenn';
console.log(pet.name, pet.breed);

// An array of 5 people objects
let people = [
    { name: 'Michael', age: 15 },
    { name: 'Stephanie', age: 24 },
    { name: 'Jake', age: 21 },
    { name: 'Anne', age: 55 },
    { name: 'Emma', age: 12 }
];

//  A loop to call the checkAge function for each object in the array, passing the object's name and age as arguments.
for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

// getLength function that takes any word as an argument and returns the number of characters in the string
function getLength(str: string) {
    return str.length;
}

// Call the getLength function, passing 'Hello World' as the argument. Store the result in variable length.
length = getLength('Hello World!');

// If the length is even, display 'The world is nice and even!' in the console. Otherwise, if the length is odd, display 'The world is an odd place!' in the console.
if (length % 2 == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
