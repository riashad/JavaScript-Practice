/*
* Procedural Strings
*/

let name1 = "Riashad Noor"
let age1 = 29

let ProceduralStringPrint = "My Name is: "+name1+" and my age is "+age1;

console.log(ProceduralStringPrint);


/*
* Template String
*/

let name2 = 'Sinthia Noor Chaity'
let age2 = 28

let TemplateStringPrint = `My Name is ${name2} and age ${age2}`;

console.log(TemplateStringPrint);


/*
* Task 1: A 25$ tip on $40 would be $10
*/

let getTip = function(totalBill, tipPercent = .2){
    let Percent = tipPercent * 100;
    let tip = totalBill * tipPercent;
    let output = `A ${Percent}% tip on $${totalBill} would be $${tip}`;
    return output;
}

let tip = getTip(40,.25);
console.log(tip);

let tip2 = getTip(120,); // As default Argument is set
console.log(tip2);


/*
* Task 2: Calculate grade and show percentage
* A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
*/


let CalcGrade = function (marks, totalMarks){
    let percentofRes = (marks / totalMarks) * 100;
    let letterGrade = '';
    
    if (percentofRes >= 90 && percentofRes <=100){
        letterGrade = 'A';
    } else if(percentofRes >= 80 && percentofRes <=89){
        letterGrade = 'B';
    } else if(percentofRes >= 70 && percentofRes <=79){
        letterGrade = 'C';
    } else if(percentofRes >= 60 && percentofRes <= 69){
        letterGrade = 'D';
    }else if(percentofRes >= 0 && percentofRes <=59){
        letterGrade = 'F';
    }

    let result = `You got ${letterGrade} - ${percentofRes.toFixed(2)}%`;
    return result;
}

let markInput1 = CalcGrade(35,50);
console.log(markInput1);

let markInput2 = CalcGrade(88,100);
console.log(markInput2);

let markInput3 = CalcGrade(55,60);
console.log(markInput3);
