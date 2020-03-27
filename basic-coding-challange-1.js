/* 
Mark and John are trying to compare their BMI which
is Calculated using the formula: 
BMI = mass/ height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height is variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about
whether Mark has a heigher BMI than John
4. Print a string to the console containing the variable from step 3. (Something like "is Mark's BMI heigher than John's? true").

*/
var markMass, markHeight, johnMass, johnHeight;
markMass = 80;
markHeight = 5.7;
johnMass = 70;
johnHeight = 5.6;

const BMI = function(mass, height){
    height = (height * 0.3048).toFixed(3);
    return mass / (height * height);
};

var markBMI = BMI(markMass, markHeight).toFixed(2);
console.log("Mark's BMI: " + markBMI);
var johnBMI = BMI(johnMass, johnHeight).toFixed(2);
console.log("John's BMI: " + johnBMI);

var markBMIHigher = markBMI > johnBMI ;
console.log('Is Mark\'s BMI heigher than John\'s? '+ markBMIHigher);