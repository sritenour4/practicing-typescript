// store each Die you create in a global array
const generateDieBtn = document.querySelector('#generate-die-btn') as HTMLButtonElement;
const rerollDieBtn = document.querySelector('#reroll-die-btn') as HTMLButtonElement;
const sumDieBtn = document.querySelector('#sum-die-btn') as HTMLButtonElement;
const container = document.querySelector('#container') as HTMLElement;
const diceContainer = document.querySelector('#dice-container') as HTMLElement;
let diceArray: Die[] = []; 
let counter:number = 1;

// Create a class named Die that represents a single die.
class Die {
    value: number;
    div: HTMLDivElement;
    constructor(value: number) {
        this.div = document.createElement('div');
        this.value = value;
        this.render();                     
        diceContainer.appendChild(this.div);

        // The push() method adds one or more elements to the end of an array and returns the new length of the array.
        diceArray.push(this);    
              
        // Add a feature where clicking on a die on the page causes just that one die to roll, updating its face value
        this.div.addEventListener('click', () => this.roll());
        
        // Add a feature where double clicking on a die on the page causes that die to be removed from the page
        // Be careful to take appropriate measures so that the sumDice function still reports the correct sum after you delete a die. 
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
            let index = diceArray.indexOf(this);
            if(index !== -1) {
                diceArray.splice(index, 1);
            }
        })
    }

    // method named roll that generates a random integer 1-6, sets the value property, and updates the div on the page with the new value.
    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);  
        this.div.textContent = this.value.toString();      
    }     

    render() {
        this.div.className = 'die';
        this.div.id = counter.toString();       
        diceContainer.appendChild(this.div);
        this.div.textContent = this.value.toString(); 
    } 
        
}

// Clicking the button should create a new Die object (thus causing a div to be added to the screen with a random number 1-6)
generateDieBtn.addEventListener('click', ()  => {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    new Die(randomNumber);
    counter++;
})

// button which should call the roll method on all the dice, updating their values
rerollDieBtn.addEventListener('click', () => {    
    for(let i = 0; i < diceArray.length; i++) {
        diceArray[i].roll();
    }
})

// Create a sumDice function and a button that triggers it. It should add up the current face value of all the dice on the page and display an alert with the sum.
sumDieBtn.addEventListener('click', () => {
    let sum:number = 0;    
    for(let i = 0; i < diceArray.length; i++) {
        sum += diceArray[i].value;
    }
    alert(`The sum of the die is ${sum}.`);
} )

