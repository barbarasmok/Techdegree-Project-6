const qwerty = document.querySelector('#querty');
const phrases = document.querySelector('#phrase');
const missed = 0;
const startButton = document.querySelector('.btn__reset');
const start = document.querySelector('.start');

//hide the display start class once you click the start button
startButton.addEventListener ('click', () => {
    start.style.display = 'none';
} );

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
    for (var i = 0; i < arr.length; i += 1) {


    }

}

getRandomPhraseAsArray(phrases);
