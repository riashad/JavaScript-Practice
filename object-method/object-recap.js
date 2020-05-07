// Creating Object

const person = {
    name: 'Riashad',
    age: 29,
    hobbies: ['biking', 'programming', 'sleeping'],
    greet: function () {
       alert('Hello There');
    },
    job: 'Employed'
}

//Calling an Object
person.greet();

//Adding Property to an Object

person.haveSiblings = true;

console.log(person);

//Modify a Property value

person.age = 31;

//Removing a property

delete person.job;

console.log(person);


//Keyname and Square Brackets

const user = {
    'first name': 'Noor Riashad'
};

console.log(user['first name']); // Square brackets to call KeyName 

const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red'; //backgroundColor is translated form of css property background-color
movieList.style.display = 'block';

// lets use [''] and use default css propery

movieList.style['padding-top']= '20px';
movieList.style['padding-bottom']= '20px';



