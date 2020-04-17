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

/** Update UI **/
const hideEntryTextSection = document.querySelector('#entry-text');

/** Clear Inputs **/
const clearUserInputs = () => {
    for (const input of userInputElemet) {
        input.value = '';
    }
};
/** Movies Array **/'#movie-list'
const moviesLibrary = [];

/** Hide old basic entry **/

const updateUI = () => {
    if(moviesLibrary.length === 0){
        hideEntryTextSection.style.display = 'block';
    }else{
        hideEntryTextSection.style.display = 'none';
    }
};

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
            updateUI();
            renderNewMovieElement(newMovie.Movietitle, newMovie.Image, newMovie.UserRating);     
       }
};

/** Show movies under Li element **/
const renderNewMovieElement = (mTitle, mImage, mRating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${mImage}" alt="${mTitle}">
    </div>
    <div class="movie-element__info">
        <h2>${mTitle}</h2>
        <p>${mRating}/5 stars</p>
    </div>
    `;
    const listElementSelection = document.getElementById('movie-list');
    listElementSelection.appendChild(newMovieElement);
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

addButton.addEventListener('click', AddMovieHandler);

