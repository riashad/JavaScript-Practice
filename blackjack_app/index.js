// Set their values to a random number between 2-11

function randomNumber(min, max) { //crating random from the given range
    let ceiling = Math.ceil(Math.random()*(max - min) +min);
    return ceiling;
}
// 1. Create two variables, firstCard and secondCard. 
let firstCard = randomNumber(2,11);
let secondCard = randomNumber (2,11);
let hasBlackjack = false;
let isAlive = true;

console.log(firstCard);
console.log(secondCard);

// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard;

console.log("Sum: "+ sum);


// Building a logic to stay in the game

if (sum <= 20) {
    console.log(" 🤔 Do you want to draw a card?");
} else if(sum === 21) {
    console.log(" 🤗 Yahoo! I got blackjack! ");
    hasBlackjack = true;
} else {
    console.log(" 😭 Shit! I'm done here! ")
    isAlive = true;
}

//Cash-out
console.log("Do you have the blackjack? Ans: "+ hasBlackjack);
console.log("I heard a rumer of you bieng alive? is it True? Ans: "+ isAlive);