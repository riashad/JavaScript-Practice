// var age = prompt("what is your age?");

// if(age < 18) {
//     alert("Sorry, you are not allowed to enter!");
// }else if (age > 18 && age < 21){
//     alert("You are not allowed to drink!");
// }


var luckyNum = 7;

var valueEntered = Number(prompt("Guess The Lucky Number?"));

if( valueEntered === luckyNum ){
    alert("Yahoo! you are right!");
}else if(valueEntered < luckyNum ){
    alert("Lower Value");
}else if(valueEntered > luckyNum){
    alert("Higher Value");
}

