import compareResults from './compareResults.js';
import randomThrow from './randomThrow.js';

const playButton = document.getElementById('play-button');
const computerThrowSpan = document.getElementById('computer-throw');
const gamesPlayedSpan = document.getElementById('games-played');
const gamesWonSpan = document.getElementById('games-won');

randomThrow();
let gamesPlayed = 0;
let gamesWon = 0;
computerThrowSpan.value = 0;

playButton.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input[type=radio]:checked');
    const userChoice = selectedRadioButton.value;

    let computerThrow = randomThrow();


    
    compareResults(userChoice, computerThrow);

    if (compareResults(userChoice, computerThrow) === 'win'){
        gamesWon++;
        gamesWonSpan.textContent = gamesWon;
    }
    gamesPlayed++;

    gamesPlayedSpan.textContent = gamesPlayed;

})

