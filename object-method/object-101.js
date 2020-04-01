let booksObj = {
    title:'Harry Potter',
    author: 'JK Rowling',
    pageCount: 235
};

console.log(booksObj);

/* Calling a single property of an Object */
console.log(`Buy the book ${booksObj.title} by ${booksObj.author}`);

/* Updating Objects Property value and calling */

booksObj.title = 'Himu and Yellow Panjabi';
booksObj.author = 'Humayun Ahmed';

console.log(`Buy the book ${booksObj.title} by ${booksObj.author} and share the greatest writer's thoughts!`);



var users2 = {
    firstName:'Riashad',
    lastName: 'Noor',
    birthYear: 1990,
    family: ['Chaity', 'Tishad', 'Anan'],
    job:'web developer',
    isMarried: true,
    livesIn: 'Dhaka'
    
};

console.log(users2);

users2.job = 'Full Stack Developer';
users2['livesIn'] = 'Shahbag, Dhaka';
var isM = 'isMarried';
users2[isM] = false;
users2.family[2] = 'Uzan';

console.log(users2);


/* 
* Task 
* Name, age, location
* Riashad is 28 and lives in Dhaka, Bangladesh
* Increase the age by 1 and print message
*/

let userObj = {
    name: 'Riashad Noor',
    age: 28,
    location: 'Dhaka, Bangladesh'
};

let output3 = `${userObj.name} is ${userObj.age} and lives in ${userObj.location} `;
console.log(output3);

userObj.age++; //  userObj.age = userObj.age + 1
console.log(`${userObj.name} is ${userObj.age} and lives in ${userObj.location} `);

