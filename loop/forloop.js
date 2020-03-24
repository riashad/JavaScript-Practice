for (var count = 0; count < 6; count++) {
    console.log(count);    
}

var a = "Hello!";
for(var c=0; c<a.length; c++) {
  console.log(a[c]);
}

for (var i = 0; i < 16; i+=8) {
    console.log(i);
   
}

var ii = "ahceclwlxo";
for (var a = 0; a < ii.length; a+=2) {
    console.log(ii[a]);    
}


//task1
console.log("--------- Task 1 ---------------");
for(var s = -10; s <= 19; s++){
    console.log("Print from -10 to 19: "+ s);
}

//task2
console.log("--------- Task 2 ---------------");
for(var s = 10; s <= 40; s++){
   if(s % 2 == 0){
       console.log("Even Number is: "+ s);
   }
}

//task3
console.log("--------- Task 3 ---------------");
for(var s = 300; s <= 333; s++){
    if(s % 2 != 0){
        console.log("Odd Number is: "+ s);
    }
 }

//task4
console.log("--------- Task 4 ---------------");
for(var s = 5; s <= 50; s++){
    if(s % 5 == 0 && s % 3 == 0){
        console.log(" Divisible by 5 & 3 is: "+ s);
    }
 }