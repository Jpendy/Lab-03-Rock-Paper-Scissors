export default compareResults;

function compareResults(playerThrow, computerThrow) {
    if (playerThrow === computerThrow) {
        return 'draw';
    }
    else if (playerThrow === 'rock' && computerThrow === 'paper') {
        return 'lose';
    }
    else if (playerThrow === 'rock' && computerThrow === 'scissors') {
        return 'win';
    }
    else if (playerThrow === 'paper' && computerThrow === 'rock') {
        return 'win';
    }
    else if (playerThrow === 'paper' && computerThrow === 'scissors') {
        return 'lose';
    }
    else if (playerThrow === 'scissors' && computerThrow === 'rock') {
        return 'lose';
    }
    else if (playerThrow === 'scissors' && computerThrow === 'paper') {
        return 'win';
    }
}