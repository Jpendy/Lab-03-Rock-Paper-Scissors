import compareResults from './compareResults.js';
import randomThrow from './randomThrow.js';

const playButton = document.getElementById('play-button');
const computerThrowSpan = document.getElementById('computer-throw');
const gamesPlayedSpan = document.getElementById('games-played');
const gamesWonSpan = document.getElementById('games-won');
const gamesLostSpan = document.getElementById('games-lost');
const drawsSpan = document.getElementById('draws');
const resetButton = document.getElementById('reset-button');

randomThrow();
let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;
let draws = 0;


playButton.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input[type=radio]:checked');
    const userChoice = selectedRadioButton.value;

    let computerThrow = randomThrow();

    computerThrowSpan.textContent = computerThrow;
    
    compareResults(userChoice, computerThrow);

    if (compareResults(userChoice, computerThrow) === 'win'){
        gamesWon++;
        gamesWonSpan.textContent = gamesWon;
    }
    else if (compareResults(userChoice, computerThrow) === 'lose') {
        gamesLost++;
        gamesLostSpan.textContent = gamesLost;
    }
    else {
        draws++;
        drawsSpan.textContent = draws;
    }

    gamesPlayed++;

    gamesPlayedSpan.textContent = gamesPlayed;

});

resetButton.addEventListener('click', () => {
    gamesPlayedSpan.textContent = '0';
    gamesWonSpan.textContent = '0';
    gamesLostSpan.textContent = '0';
    drawsSpan.textContent = '0';
});