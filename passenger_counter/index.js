// document.getElementById('count').innerText = 5;

// let count = 0;
// count +=5; 
// console.log(count);

// // console.log(myAge); --> Referece Error
// let myAge = 32;
// console.log(myAge);


// let myHumanAge = 32;
// let DogAge = 7;
// let myDogAge = myHumanAge * DogAge;
// console.log("My Dog Age: "+myDogAge);

// let bonusPoints = 50;
// bonusPoints -=25;
// console.log(bonusPoints);
// bonusPoints +=25;
// console.log(bonusPoints);
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let incCount = 0;

function increment(){
    incCount += 1;
    console.log(incCount);
    // document.getElementById('count-el').innerHTML = incCount++;
    countEl.textContent = incCount;
}

function save(){
    let countStr = incCount + " - ";
    saveEl.style.visibility = 'visible';
    saveEl.style.color="brown";
    // saveEl.innerText += countStr;
    // saveEl.innerHTML += countStr;
    incCount = 0; // resetting to Zero
    countEl.textContent = 0; // displaying Zero
    saveEl.textContent += countStr; // reprinting new entries
    console.log(incCount);
}