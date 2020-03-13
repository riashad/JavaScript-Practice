console.log("Task 1");

var start1 = -10;

while(start1 <= 19){
    console.log("Current Number: "+start1);
    start1++;
}

console.log("Task 2");

var start2 = 10;
var end2 = 40;

while(start2 <= end2){
    if(start2 % 2 == 0){
        console.log("Even: "+start2);
    }
    start2++;
}


console.log("Task 3");

var start3 = 300;
var end3 = 333;

while(start3 <= end3){
    if(start3 % 2 != 0) {
        console.log("Odd: " + start3);
    }
    start3++;
}


console.log("Task 4");

var start4 = 5;
var end4 =50;

while(start4 <= 50){
    if(start4 % 5 == 0 && start4 % 3 == 0 ){
        console.log("Number is: "+start4);
    }
    start4++;
}