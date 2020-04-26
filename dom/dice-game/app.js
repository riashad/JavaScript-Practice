var score, roundScore, activePlayer, dice;

score = [0,0];
roundScore = [0,0];
activePlayer = 1;
dice = Math.floor(Math.random() * 6) + 1;


//Current Score
document.querySelector('#current-'+activePlayer).textContent = dice;


//Round Score

var x = document.querySelector('#socre-'+activePlayer).textContent;
console.log(x);

//Dice Display

document.querySelector('.dice').style.display = 'none';