/*
John and his family went on a holiday and went to 3
different restaurants. The bills were $124, $48, $268, $180, $42.

To tip the waiter a fair amount, John created a simple tip
calculator (as a function). He likes to tip 20% of the boll
when the bill is less that $50, 15% wehn the bill is between
$50 and $200, and 10% if the bill is more than $200.

Implement the calcualtion using object and loops:
1) Create an object with an array for the bill values
2) Add a method to calculate the tip
3) This method shold include a loop to iterate over all
paid bills and do the tip calculations.
4) As an out, create
    i) a new array containing all the tips
    ii) an array containing final paid amounts (bill+tips)

*/


var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalAmount = [] ;

        for(var i=0; i< this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            if(bill < 50){
                percentage = .2;
            }else if(bill >= 50 && bill < 200){
                percentage = .15;
            }else if(bill > 200){
                percentage = .1;
            }
            this.tips[i] = percentage * bill;
            this.finalAmount[i] = bill + (bill * percentage);
        }
    }
}

john.calcTips();
console.log(john);