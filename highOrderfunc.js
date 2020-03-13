function sing(){
    console.log("Twinkle, twinkle, little star...");
    console.log("How I wonder what you are...");
}

/* 
*
* Using Interval func to repeat the function call
* setInterval(FunctionToUseForInterval, timeInMiliSecond);
* 1000 milisecond = 1 sec
*/

var InvOne= setInterval(sing, 500);
clearInterval(InvOne);
