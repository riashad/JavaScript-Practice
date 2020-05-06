/** Different ways of creating an Array **/
var numbers = [22,67,33,68,88];
var numbers2 = Array(22,67,33,68,88);
var numbers3 = Array.of(22,67,33,68,88);
var numbers4 = Array.from('Hi I am Riashad');

console.log(numbers);
console.log(numbers2);
console.log(numbers3);
console.log(numbers4);

console.log(numbers.length);
console.log(numbers[numbers.length]);


var frndsGroups = [
    ["Harry","Ron","Hermoine"],
    ["Malfoy","Crabbe","Malfoy"],
    ["Riashad","Uzan","Sazid"]
];

console.log(frndsGroups[2][0]); //2D Array

numbers.push(10); // adds at the End
numbers2.pop(); //removes from the End
numbers3.unshift(15); // adds at the beginning
numbers4.shift(); // removes from the biginning

numbers.splice(0,1,'546'); //Start, HowManyElement, What to Place
numbers2.splice(0,0); // start, HowManyElement


const number5 = numbers.slice(); // copies the array (old one without any modification) and creates a brand new array

const number6 = numbers2.slice(0,2); // start, HowManyElement

const number7 = numbers3.slice(-3,-2); // start, HowManyElement

console.log(number7);
