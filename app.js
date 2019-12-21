const qwerty = document.querySelector('querty');
const phrase = document.querySelector('phrase');
const missed = 0;
const overlay = document.getElementById('#overlay');
const startButton = document.querySelector('btn__reset');
const start = document.querySelector('start');
const finalWiner = document.querySelector('finalWinner');


//hide the display start class once you click the start button
startButton.addEventListener ('click', () => {
    if (startButton.textContent === 'Start Game') {
        overlay.style.display = 'none';
    } else if (start.Button.textContent === 'Play Again'){
        overlay.style.display = 'none';
        reset();
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
    randomPhrase = playerPhrases[(Math.floor(Math.random()* playerPhrases.length))];
    newPhrase = ranbomPhrase.split('');
    return newPhrase;
};

//set up function addPhraseToDisplay

function addPhraseToDisplay() {
    let phrases = getRandomPhraseAsArray(arr);
    for (var i = 0; i < phrases.length; i ++) {
        let ul = document.getElementsByTagName('ul');
        let li = document.createElement('li');
        ul.appendChild(li);

//        if (qwerty.addEventListener ('click', () => {
//                qwerty[i] === phrases;
//                 const winnerButton = document.createElement('button');
//                 button.textContent = 'winner';
//                 finalWinner.appendChild('winnerButton');    
//             }); else {
//             const loserButton = document.createElement('button');
//             button.textContent = 'try again';
//             finalWinner.appendChild('loserButton');
//             loserButton.style.display = 'none';
//         }
//     }
}

getRandomPhraseAsArray(phrases);
