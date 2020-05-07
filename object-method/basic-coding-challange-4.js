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

USE OBJECTS & METHODS

*/


var john = {
    name: 'John',
    mass: 80,
    height: 5.7,
    calBmi: function(){
        this.height = (this.height * 0.3048);
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi.toFixed(3);
    }
};

var mark = {
    name: 'Mark',
    mass: 82,
    height: 5.6,
    calBmi: function(){
        this.height = (this.height * 0.3048);
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi.toFixed(3);
    }
};

var johnBMI = john.calBmi();
var markBMI = mark.calBmi();
console.log(johnBMI, markBMI);

if(john.calBmi() > mark.calBmi()){
    console.log("John's BMI: " + johnBMI);
}else if(mark.calBmi() > john.calBmi()){
    console.log("Mark's BMI: " + markBMI);
}else{
    console.log("They have the same BMI");
}