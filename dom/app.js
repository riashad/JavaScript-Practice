console.log(document.getElementById('main-title'));

//Old Ways

console.log(document.getElementsByClassName('list-items'));


//New Ways

console.log(document.querySelector('.list-items'));
console.log(document.querySelectorAll('.list-items'));


/* Get the first Item of the query */
// Won't show the live changes
console.log(document.querySelector('ul li:first-of-type'));
// Will show the live changes
// console.log(document.getElementsByTagName('ul li:first-of-type'))

/* Get the last Item of the query */
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
p2.textContent = p2.textContent + '- I am Added using Js!';
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

/*** Accessing the child nodes or Elements ***/

console.log ('---- Accessing the Child Nodes or Elements ----');
const ulList = document.querySelector('ul');
console.log(ulList.children); // Displays all the children of Ul (without white-space)
console.log(ulList.childNodes); //Displays all the child nodes of Ul (with white-space)
console.log(ulList.childNodes[3]); //Displays Specific Child Node using array index calling
console.log(ulList.firstChild); // Display the first child of child nodes - here will display #text as it's under white-space
console.log(ulList.firstElementChild); //Display the first child of child nodes elements- here will display list item
console.log(ulList.lastChild); // Display the last child of child nodes - here will display #text as it's under white-space
console.log(ulList.lastElementChild); //Display the last child of child nodes elements- here will display list item

/*** Accessing the Parent nodes or Elements ***/

console.log ('---- Accessing the Parent Nodes or Elements ----');

const lielm = document.querySelector('li');
console.log(lielm.parentNode);
console.log(lielm.parentElement);


/*** Accessing the Previous Sibling nodes or Elements ***/

console.log ('---- Accessing the Previous Sibling Nodes or Elements ----');

const pSiblingElm = document.querySelector('ul');
console.log(pSiblingElm.previousSibling); // Display the previous sibling nodes <of same level> - here will display #text as it's under white-space
console.log(pSiblingElm.previousElementSibling); //Display the previous sibling nodes <of same level>- here will display list item

/*** Accessing the Previous Sibling nodes or Elements ***/

console.log ('---- Accessing the Next Sibling Nodes or Elements ----');

const aSiblingElm = document.querySelector('ul');
console.log(aSiblingElm.nextSibling); // Display the previous sibling nodes <of same level> - here will display #text as it's under white-space
console.log(aSiblingElm.nextElementSibling); //Display the previous sibling nodes <of same level>- here will display list item



/*** Using DOM Element for Styling ***/

const section = document.querySelector('.section2');
section.style.backgroundColor='green';

const para = document.querySelector('.para-mod2');
para.className = para.className + ' invisible';


const btnCall = document.querySelector('#btnShowHide');


btnCall.addEventListener('click', function(){
    section.classList.toggle('invisible');
}); 
