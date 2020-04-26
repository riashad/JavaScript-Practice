// Wrapper IIFE
// console.log (argument);
/*
 shows 5 fixed items array and automatically calls a function
 function(exports, require, module, __filename, __dirname){
     console.log(arguments);    
 }
*/
// Using Require
// console.log('Hello from ind1.js using Require');
// module.exports.ans2 = 52;
// exports.ans1 = 89; // exports is alias of module.exports

// Using function
// module.exports = () => {
//     console.log('Hello from ind1.js func');
// };

// Using function through Object

module.exports = {
    f1:() => {
        console.log('Hello from ind1.js Obj func1');
        
    },
};