/*
** Basic Function
*/
function SingSong(){
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}

SingSong(); // Calling A Function


/*
** Arguments: takes an input
*/

function square(num){
    console.log(num*num);
}

square(5);

function greet(person1, person2, person3){
    console.log("Hi "+person1);
    console.log("Hi "+person2);
    console.log("Hi "+person3);
}

greet("Riahsad", "Chaity","Tishad");
greet("Win", "Uzan"); // Undifined means there is an error and u can improve

// Using Return Keyword

function makeCapital(str){
    // if not string
    if(typeof str === "number"){
        return "Given input is not an String!";
    }
    //if String then follow this  
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let input = prompt("Enter a String Value");
let output = makeCapital(input);
console.log(output);


// IsEven Checker

function IsEven(numb){
    if(numb % 2 == 0){
        return numb + " is Even Number.";
    }else {
        return numb + " is Odd Number";
    }
}

let entNumb = prompt("Enter a Number");
console.log(IsEven(entNumb));


// Factorial

function facCheck(in4f){
    
    var fact = 1;
    for(var i=1; i <=in4f; i++){
        fact = fact * i;
    }
    return "The Factorial of "+ in4f +" is: " + fact;
}

var in4f = prompt("Enter a Number");
console.log(facCheck(in4f));


// Relace value with one another

function KababToSnake(gvnStr){
    var newOut = gvnStr.replace(/-/g,"_");
    return newOut;
}

var newIn = prompt("Enter a String with 'Dash -' in it: ");
console.log(KababToSnake(newIn));
