const noteList = ['Note 5', 'Note 2', 'Note 3', 'Note 4'];
console.log(noteList);
console.log("Note List Length: " + noteList.length);

//Printing the last value
console.log(noteList[noteList.length-1]);

//ForEach Loop

noteList.forEach(function(item, index){
    console.log(item, index);
});


/* Manipulating Arrays */

noteList.push("Note 5"); // Adding to note at the end
console.log("Adding (push) at the End of the list: " + noteList);

noteList.pop(); // Remove from the end
console.log("Removing (pop) from the end of the list: "+noteList);


noteList.unshift("Note 0"); // Adding to the biginning of the Note
console.log("Adding (unshift) at the biginning of the list: "+noteList);

noteList.shift(); // Removing from the biginning
console.log("Removing (shift) at the biginning of the list:" +noteList);

let findFromList = noteList.indexOf('Note 3'); // Finding the index number
console.log('Note 3 - index number is: '+ findFromList);


noteList.splice(1,0,'I am placed at index 1 and the current index will become index 2')
console.log(noteList);

noteList.splice(1,1,'I removed the 2nd Item and placed myself there!'); // Remove and Replace item selected
console.log(noteList);

noteList.splice(1,1); // Removes selective item: splice(starting index, how many items to remove from starting)
console.log(noteList);


// Array Sorting

noteList.sort();
console.log(noteList);

noteList.reverse();
console.log(noteList);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // Assending
console.log(points);

points.sort(function(a, b){return b - a}); // Descending
console.log(points);