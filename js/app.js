const qwerty = document.querySelector('querty');
const phrase = document.querySelector('phrase');
const overlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');
const button = document.getElementsByClassName('button');
const li = document.getElementsByClassName('letter');
const scoreboard = document.getElementById('scoreboard');
const missed = 0;

//hide the display start class once you click the start button
startButton.addEventListener('click', (e) => {
    overlay.style.display = "none";
    event.preventDefault();
});


//set up an array
phrases = [
    'I love avocado',
    'I love dogs',
    'Cats are awesome',
    'Dogs are friendly',
    'Love is everywhere'
];


//set up function getRandomPhraseAsArray
function getRandomPhraseAsArray(arr) {
    randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    return randomPhrase.split('');
};

const randomPhraseLetters = getRandomPhraseAsArray(phrases);


//set up function addPhraseToDisplay
function addPhraseToDisplay(arr) {
    for (var i = 0; i < arr.length; i ++) {
        let ul = document.getElementsByTagName('ul');
        let li = document.createElement('li');
        ul.appendChild(li);
        //check to see if the phrase is not empty
        if (arr[i] !== ' ') {
            //add new class
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
        li.textContent = arr[i];
    }
}

addPhraseToDisplay(randomPhraseLetters);


//set up the ckeckletter function
function checkLetter(button) {
    let match = null;
    for (let i = 0; i < li.length; i ++) {
        if (button === li[i].textContent.toLowerCase()) {
            li[i].classList.add('show');
            match = button.textContent;
        }
    }
    return match; 
};


//adding the event listener to the keyboard
qwerty.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON') {
        button.classList.add('chosen');
        button.setAttribute('disabled', true);
        const letterFound = checkLetter(button.textContent.toLowerCase());
        const ol = document.querySelector('.olElement');
        const tries = document.getElementsByClassName('tries');
        if (letterFound === null) {
            ol.removeChild(tries[0]);
            match = button.textContent;
            missed += 1;
        }
        didYouWinOrLose();
    }
});