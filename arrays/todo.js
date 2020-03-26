const todos = ['Order chicken burgar', 'Buy Fexofenadine', 'Buy Eggs', 'Buy coffee and tea', 'Buy toothbrush'];

console.log("----Using For Each loop----");
todos.forEach(function(todoItems, indexNo){
    let num = indexNo+1;
    console.log(num+ '. Todo: '+todoItems)
});

console.log("----Using For loop----")
for(let i=0; i <todos.length; i++){
    let num = i+1;
    console.log (num+ '. Todo: '+todos[i])
}



// 1. Convert array to array of Objects->text, completed
// 2. Create function to remove a todo by text value
// 3. Create function to add a todo by text value 


const todos2 = [
    {
        text:'Order Pizza',
        completed: false
    },
    {
        text:'Order Medicine',
        completed: false
    },
    {
        text:'Take the trash out',
        completed: false
    },
    {
        text:'Complete Office Tasks',
        completed: false
    }
];

console.log(todos2);
console.log('=====================================================');
const deleteTodo = function(todo, toText){
   const index = todo.findIndex(function(tod){
       return tod.text.toLowerCase() === toText.toLowerCase();
   });

   if(index > -1) {
       todo.splice(index, 1);
   }
};

deleteTodo(todos2,'Complete office tasks');
console.log(todos2);


