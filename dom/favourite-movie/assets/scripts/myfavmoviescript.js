/** Three ways to select the modal **/
const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

/** Two ways **/
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

/** BackDrop **/
const showBackdrop = document.getElementById('backdrop');

/** Cancle Button **/
const cancleButton = document.querySelector('.btn--passive');

/**Add Movie Button **/
const addButton = cancleButton.nextElementSibling;

/** User Input Selection**/
const userInputElemet = document.querySelectorAll('input');

/** Clear Inputs **/
const clearUserInputs = () => {
    for (const input of userInputElemet) {
        input.value = '';
    }
};
/** Movies Array **/
const moviesLibrary = [];

/** Getting inputs **/
const AddMovieHandler = () => {
    const title = userInputElemet[0].value;
    const imageUrl = userInputElemet[1].value;
    const ratings = userInputElemet[2].value;

    if(title.trim === '' || 
       imageUrl === '' || 
       ratings === '' || 
       +ratings < 1 ||
       +ratings > 5)
       {
           alert('Give right input and the ratings should be form 1 to 5');
           return;
       }else{
           /** moviesLibrary Object **/
            const newMovie = {
                Movietitle: title,
                Image: imageUrl,
                UserRating: ratings
            };
            moviesLibrary.push(newMovie);
            console.log(moviesLibrary);
            toggleMovieModalBtn();
            clearUserInputs();     
       }
};



/** toggle to access css using classList  **/
const toggleModalBackdrop = () => {
    showBackdrop.classList.toggle('visible');
}

const toggleMovieModalBtn = () => {
    addMovieModal.classList.toggle('visible');
    toggleModalBackdrop();    
};

const backdropClickHandler = () => {
    toggleMovieModalBtn();
    clearUserInputs();
}

const cancleButtonHandler = () => {
    backdropClickHandler();
    clearUserInputs();
}


startAddMovieButton.addEventListener('click',toggleMovieModalBtn);
//showBackdrop.addEventListener('click',toggleModalBtn);

showBackdrop.addEventListener('click', backdropClickHandler);

cancleButton.addEventListener('click', cancleButtonHandler);

addButton.addEventListener('click', AddMovieHandler)