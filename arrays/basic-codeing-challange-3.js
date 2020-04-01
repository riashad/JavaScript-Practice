/*
John and his family went on a holiday and went to 3
different restaurants. The bills were $124, $48 and $265.

To tip the waiter a fair amount, John created a simple tip
calculator (as a function). He likes to tip 20% of the boll
when the bill is less that $50, 15% wehn the bill is between
$50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill +tip)

*/



var tipOnBill = function(bill){
    var percentage;
    if(bill < 50){
        percentage = .2;
    }else if(bill >= 50 && bill < 200){
        percentage = .15;
    }else if(bill > 200) {
        percentage = .10;
    }
    return percentage * bill;
}

var billsOfRestaurants = [124, 48, 265];
var tips = [
    tipOnBill(billsOfRestaurants[0]),
    tipOnBill(billsOfRestaurants[1]),
    tipOnBill(billsOfRestaurants[2])
];
var finaPaidAmnt = [
    billsOfRestaurants[0] + tips[0],
    billsOfRestaurants[1] + tips[1],
    billsOfRestaurants[2] + tips[2]
];
console.log(tips, finaPaidAmnt);
