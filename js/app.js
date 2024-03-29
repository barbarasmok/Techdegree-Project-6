const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');
const button = document.getElementsByClassName('button');
const letter = document.getElementsByClassName('letter');
const scoreboard = document.getElementById('scoreboard');
const overlayTitle = document.querySelector('.title');
let missed = 0;


//hide the display start class once you click the start button
startButton.addEventListener('click', () => {
    //overlay.style.display = "none";
    //event.preventDefault();
    if (startButton.textContent === 'Start Game') {
        overlay.style.display = 'none';
      } else if (startButton.textContent === 'Reset Game') {
        window.location.reload();
      }
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
        let ul = document.querySelector('ul');
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
    for (let i = 0; i < letter.length; i ++) {
        if (button === letter[i].textContent.toLowerCase()) {
            letter[i].classList.add('show');
            match = button.textContent;
        }
    }
    return match; 
};


//adding the event listener to the keyboard + counting the missed guesses in the game
qwerty.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      let chosen = event.target;
        chosen.className = "chosen";
        chosen.disabled = true;
        const letterFound = checkLetter(chosen.textContent);

//SECOND OPTION without the lostHeart image
//qwerty.addEventListener('click', (e) => {
    //const button = e.target;
    //if (button.tagName === 'BUTTON') {
        //button.classList.add('chosen');
        //button.setAttribute('disabled', true);
        //const letterFound = checkLetter(button.textContent.toLowerCase());
        //const ol = document.querySelector('.olElement');
        //const tries = document.getElementsByClassName('tries');
       // if (letterFound === null) {
        //    ol.removeChild(tries[0]);
        //    match = button.textContent;
         //   missed += 1;
        //}
        if (letterFound === null) {
            missed ++;
            chosen.className = "badChoise";
            const img = document.querySelectorAll("img");
            img[missed - 1].src="images/lostHeart.png";
          }  
    }
    checkWin();
});


//set up the checkWin function
function checkWin() {
    const numberOfLetters = letter.length;
    const numberOfShows = document.getElementsByClassName('show').length;
    if (numberOfLetters === numberOfShows) {
        overlay.className = "win";
        overlay.style.display = "flex";
        overlayTitle.textContent = "CONGRATULATIONS, YOU'RE A WINNER!";
        startButton.textContent = 'Reset Game';
        phrase.style.display = 'none';

    } else if (missed > 4) {
        overlay.className = "lose";
        overlay.style.display = "flex";
        overlayTitle.textContent = "Try again! Reload to start over";
        startButton.textContent = 'Reset Game';
        phrase.style.display = 'none';
    }
}

