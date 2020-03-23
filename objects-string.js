let name = 'Riashad Noor';

// String Length
console.log(name.length);

//String Uppercase
console.log(name.toUpperCase());

//String Lowercase
console.log(name.toLowerCase());

//String search and check

let pass = 'myPassword@#1234';

console.log(pass.includes('Password'));

//Trimming extra white-space from a string's start & end

let toTrim = '  Stay Home! Work From Home   ';
console.log(toTrim);

console.log(toTrim.trim()); 


/* Task 
* isValidPassword
* length is more than 8 - and it doesn't contain the word password
*/

let isValidPassword = function(passVal){
    if(passVal.length < 8) {
        return ('The Password need to be minimum 8 characters');
    }else {
        if(passVal.includes('password')){
            return ('The Password can\'t contain the word \'password\' '); 
        }else{
            return 'The password is secured!';
        }
    }
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%15ad'));
console.log(isValidPassword('asdfpassworddrowssap$@#'));