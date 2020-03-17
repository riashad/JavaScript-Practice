//Global scope (convertFahrenheitToCelsius, useOne, useTwo)
    //Local Scope (fahrnheit, celsius)
        // Local Socpe (isFreezing)
let convertFahrnheitToCelsius = function (fahrnheit){
    let celsius = (fahrnheit - 32) * 5 / 9 ;

    if(celsius <= 0) {
        let isFreezing = true;
        console.log("The temperature is Freezing!");
    }
    return celsius;
}

let useOne = convertFahrnheitToCelsius(98);
let useTwo = convertFahrnheitToCelsius(32);

console.log(useOne);
console.log(useTwo);
