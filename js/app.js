const overlay = document.getElementById('#overlay');
const startButton = document.querySelector('btn__reset');
const qwerty = document.querySelector('querty');
const phrase = document.querySelector('phrase');
const missed = 0;
const finalWiner = document.querySelector('finalWinner');

//hide the display start class once you click the start button

startButton.addEventListener('click', (overlay) => {
    overlay.style.display = "none";
});
//startButton.addEventListener('click', () => {
    //overlay.style.display = "none";
//});


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
    let phrases = getRandomPhraseAsArray(arr);
    for (var i = 0; i < phrases.length; i ++) {
        let ul = document.getElementsByTagName('ul');
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = randomPhraseLetters[i];
        //check to see if the phrase is not empty
        if (phrases[i] !== ' ') {
            //add new class
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}

addPhraseToDisplay(randomPhraseLetters);

//set up the ckeckletter function

