/*
*   Array Iteration using For() loop 
*/

var names = ["Riashad", "Chaity", "Uzan", "Sazid", "Tishad", "Anan", "Oyshik", "Utshab"];

for(var i = 0; i<=names.length; i++){
    console.log(names[i]);
}

/*
*   Array Iteration using For of loop 

*/
for (const name of names) {
    console.log(name);
    
}
/*
*   Multidimentional Array Iteration using For of loop 
*/

const data = [[1,6], [-5,25] ];
for (const dataList of data) {
    for (const dataAnalytics of dataList) {
        console.log(dataAnalytics);
    }
}