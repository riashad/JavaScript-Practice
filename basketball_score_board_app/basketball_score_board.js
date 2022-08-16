const todayDate = new Date();
const d = todayDate.toDateString();
const t = todayDate.toLocaleTimeString();

document.getElementById('date-el').textContent = d;
document.getElementById('time-el').innerText= t;

let hcount = 0;
let acount = 0;
let homeScore = document.getElementById('homecard-el');
let awayScore = document.getElementById('awaycard-el');

function hone(){
    hcount +=1;
    homeScore.textContent = hcount;
}

function htwo(){
    hcount +=2;
    homeScore.textContent = hcount;
}

function hthree(){
    hcount +=3;
    homeScore.textContent = hcount;
}

function aone(){
    acount +=1;
    awayScore.textContent = acount;
}

function atwo(){
    acount +=2;
    awayScore.textContent = acount;
}

function athree(){
    acount +=3;
    awayScore.textContent = acount;
}