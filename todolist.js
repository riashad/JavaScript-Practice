/* 
* Basic To Do List 
*/

// ask for input
var ask = prompt("What would you like to do?");

// Create empty array for Todo list
var todos = [];

// use while loop to keep asking until "quit"
while (ask !== 'quit'){
    // ask for the current todo list
    if(ask === 'list'){
        console.log(todos);
    // adding new to the list    
    }else if(ask === 'new'){
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    }
    // keep asking
    ask = prompt("What would you like to do?");       
}
// when 'quit' show the message and print the todo list
console.log("Ok! To Do List is done!");
console.log(todos);
