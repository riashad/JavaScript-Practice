console.log(document.getElementById('main-title'));

//Old Ways

console.log(document.getElementsByClassName('list-items'));


//New Ways

console.log(document.querySelector('.list-items'));
console.log(document.querySelectorAll('.list-items'));


// Get the first Item of the query
console.log(document.querySelector('ul li:first-of-type'));
// Get the last Item of the query
console.log(document.querySelector('ul li:last-of-type'));



const p1 = document.querySelector('#para-1');
const p2 = document.getElementById('para-2');

const p = document.querySelector('p');
const p3 = document.querySelector('#para-3');

const pAll = document.querySelectorAll('.para-mod');


p1.innerHTML = "<h2>1st Paragraph</h2>";
p1.style.color = "#FF0D0E";
p1.style.background = "#ffAE25";


p2.style.textTransform = 'UpperCase';
p3.style.textTransform = 'LowerCase';


p3.onmouseover = checkMouseOver;
p3.onmouseout = checkMouseOut;

function checkMouseOver() {
    p3.innerHTML = 'Mouse Over Detected';
}

function checkMouseOut() {
    p3.innerHTML = 'Mouse has been moved';

}

const input1 = document.getElementById('input-1');

input1.style.textTransform = 'UpperCase';

function displayInput(){
    var catchVal = document.querySelector('#input-1').value;
    document.querySelector('#show-output').innerHTML = "Your Output: "+ catchVal;
   
}
const input3 = document.getElementById('input-3');

const input2 = document.querySelector('#input-2');
input3.value = input2.getAttribute('value');

input1.setAttribute('value', 'This is set using Js Set Attribute');