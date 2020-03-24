let num = 3.14159265359; 

//toFixed()
console.log(num.toFixed(2));

//Rounding Up
console.log(Math.round(num));

//Flooring Number
console.log(Math.floor(num));

//Ceilling Number
console.log(Math.ceil(num));

//Random Number generating
let randNum = Math.random();
console.log(randNum);

//Random 'whole' number generating using limit
let min = 0;
let max = 10;
let randLimitNum = Math.floor(Math.random() * (max - min + 1)) + min ;
console.log(randLimitNum);


/* Task
*
* Generate Random number 1~5 and match with the guess. return 
* true or false.
*
*/

let makeGuess = function(inputNum){
    let min = 1;
    let max = 5;
    let randGen = Math.floor(Math.random() * (max-min+1))+min;
    if(randGen === inputNum){
        return true;
    }else{
        return false;
    }
}

console.log("Ans of the Guess Game is: "+makeGuess(3));