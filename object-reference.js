let myAccount = {
    name: 'Riashad Noor',
    income: 0,
    expenses: 0
}


let addExpenses = function(account, expAmount){
    account.expenses = account.expenses + expAmount;

    //console.log(account);
}

addExpenses(myAccount, 2000);
console.log(myAccount);

/*

Task: addIncome to the account 

*/

let addIncome = function(account, incAmmount){
    account.income = account.income + incAmmount;
    //console.log(account);
}

addIncome(myAccount, 5000);
console.log(myAccount);


/*

Task: getAccountSummary of the account 

*/

let getAccountSummary = function (account){
    let balance = account.income - account.expenses;
    let statement = `${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses `;

    return statement;
}

console.log(getAccountSummary(myAccount));


/*

Task: resetAccount of the account 

*/

let resetAccount = function(account){
    account.income = 0;
    account.expenses = 0;
}

resetAccount(myAccount)
console.log(myAccount);
