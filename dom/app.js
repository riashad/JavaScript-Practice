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
