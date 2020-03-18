/* Creating Object */

let bookOne = {
    title:'Himu and Lal Shalu',
    author:'Humayun Ahmed',
    pageCount: 158
}


let bookTwo = {
    title:'Padma Nadir Majhi',
    author:'Manik Bandopadhyay',
    pageCount: 105
}

// Printing the objects
console.log(bookOne); console.log(bookTwo);

// Creating functions to access the 
let getBookInfo = function(book){
    
    //retun values of the object
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} has total ${book.pageCount} pages`
    }
}

//Instantiation

let bookOneSummary = getBookInfo(bookOne);
let bookTwoSummart = getBookInfo(bookTwo);

//Printing

console.log(bookOneSummary.summary);
console.log(bookOneSummary.pageCountSummary);

console.log(bookTwoSummart.summary);
console.log(bookTwoSummart.pageCountSummary);



/* Task: Celsius and Kelvin conversion form Fahrnheit 
* Formula::
* celsius = (fahrnheit - 32) * 5/9
* kelvin = (fahrnheit + 459.67) * 5/9
*/

let fahrnheitValue1 = {
    patientName: 'Riashad',
    testDate: '20-05-2020',
    temp: 98
}

let fahrnheitValue2 = {
    patientName: 'Chaity',
    testDate: '18-05-2020',
    temp: 103
}

let getTemp = function(temperature){
    let celsiusTemp = ((temperature.temp - 32) * 5/9).toFixed(2);
    let kalvinTemp = ((temperature.temp + 459.67) * 5/9).toFixed(2);

    return {
        patientSummery: `${temperature.patientName}'s temperature is ${celsiusTemp} degree Celsius | ${temperature.temp} degree Fahrnheit | ${kalvinTemp} degree Kalvin`,
        patientTestDate: `${temperature.patientName}'s did test on ${temperature.testDate}`
    }
}

let Tempo1 = getTemp(fahrnheitValue1);
console.log(Tempo1.patientSummery);
console.log(Tempo1.patientTestDate);


let Tempo2 = getTemp(fahrnheitValue2);
console.log(Tempo2.patientSummery);
console.log(Tempo2.patientTestDate);