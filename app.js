import compareResults from './compareResults.js';
import randomThrow from './randomThrow.js';

const playButton = document.getElementById('play-button');
const computerThrowSpan = document.getElementById('computer-throw');
const gamesPlayedSpan = document.getElementById('games-played');
const gamesWonSpan = document.getElementById('games-won');
const gamesLostSpan = document.getElementById('games-lost');
const drawsSpan = document.getElementById('draws');
const resetButton = document.getElementById('reset-button');
const computerThrowImage = document.getElementById('computerThrowImage');

let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;
let draws = 0;


playButton.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input[type=radio]:checked');
    const userChoice = selectedRadioButton.value;

    let computerThrow = randomThrow();

    if (computerThrow === 'rock') {
        computerThrowImage.src = 'https://hips.hearstapps.com/ell.h-cdn.co/assets/17/15/1600x1066/gallery-1492087861-gettyimages-666432436.jpg?resize=480:*';
        computerThrowImage.style.display = 'block';
    }
    else if (computerThrow === 'paper') {
        computerThrowImage.src = 'https://www.staples-3p.com/s7/is/image/Staples/sp41688553_sc7?wid=512&hei=512';
        computerThrowImage.style.display = 'block';

    }

    else {
        computerThrowImage.src = 'https://i.pinimg.com/originals/a3/25/84/a325840a691ac27ac9677cd17293acd1.jpg';
        computerThrowImage.style.display = 'block';
    }

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
    gamesPlayed = 0;
    gamesWon = 0;
    gamesLost = 0;
    draws = 0;
    gamesPlayedSpan.textContent = '0';
    gamesWonSpan.textContent = '0';
    gamesLostSpan.textContent = '0';
    drawsSpan.textContent = '0';
    computerThrowSpan.textContent = '';
    computerThrowImage.style.display = 'none';
});