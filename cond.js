/* basic conditions (if else / else if) */

// var age = prompt("what is your age?");

// if(age < 18) {
//     alert("Sorry, you are not allowed to enter!");
// }else if (age > 18 && age < 21){
//     alert("You are not allowed to drink!");
// }


var luckyNum = 7;

var valueEntered = 8 //prompt("what is your number?");

if( valueEntered === luckyNum ){
    console.log("Yahoo! you are right!"); //alert
}else if(valueEntered < luckyNum ){
    console.log("Lower Value");
}else if(valueEntered > luckyNum){
    console.log("Higher Value");
}

/* 
*
* The Ternary Operator and Swith Statment
* Formula:
* condition ? if-part:else-part
*
*/

var firstname = 'Riashad'
var age = 19;

var drink = age >=18 ? 'beer' : 'juice & water';

age >=18 ? console.log(firstname + ' can '+drink) : console.log(firstname + ' is under-aged can have only ' + drink);


// Switch Statmenets


var name = 'Pabon';
var job = 'student';
switch(true){
    case age < 13:
        console.log(name+' he is my cousin!');
        break;
    case age >=13 && age < 18:
        console.log(name + ' is my cousin!');
        break;
    case age >=18 && age <= 20:
        console.log(name + ' is my cousin!' );
        break;
    default:
        console.log('Ops! '+name+', is not here!');
}


switch(job){
    case 'teacher':
        console.log(name+' is a '+ job);
        break;
    case 'player':
        console.log(name+' is a '+ job);
        break;
    case 'student':
        console.log(name+' is a '+ job);
        break;
    default:
        console.log('Ops! '+name+', is not here!');
}
