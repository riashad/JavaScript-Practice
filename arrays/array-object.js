// Creating array objects
const notes = [
    {
        title: 'My next trip',
        body: 'I would love to go to Sylhet Trip'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise daily and for 15 minutes minimum'
    },
    {
        title: 'Office from home',
        body: 'Get a new setup and mindset to work from home'
    }
];


// Using find()

const findNote2 = function(notes, noteTitle){
    const noteV = notes.find(function(note, index){
        return note.title === noteTitle;
    });
    return noteV; 
};
const note2 = findNote2(notes,'Office from home');
console.log("================Using find()====================");
console.log(note2);

// Using findIndex() 

const findNote = function(notes, noteTitle){
    const index = notes.findIndex(function(not, index){
        return not.title === noteTitle;
    });
    return notes[index];
};

const note1 = findNote(notes,'Habbits to work on');
console.log("================Using findIndex()====================");

console.log(note1);
 

// Using filter() get the nearest match value

const isFiltered = function(notes2, query){
    const isChecked = notes2.filter(function(note2, notTitle2){
        const isTitleMatched = note2.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatched = note2.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatched || isBodyMatched;
    });
    return isChecked;
};
console.log("================Using filter()====================");

console.log(isFiltered(notes, 'TRIP'));