// General Varialbles (let) can be re-assigned but Contstant can't re-assigned, we can only reference and use it as required


// We are only using const where the variables only referenced

const CalcGrade = function (marks, totalMarks){
    const percentofRes = (marks / totalMarks) * 100;
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

    const result = `You got ${letterGrade} - ${percentofRes.toFixed(2)}%`;
    return result;
}

let markInput1 = CalcGrade(35,50);
console.log(markInput1);