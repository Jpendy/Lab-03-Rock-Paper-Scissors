export default randomThrow;

function randomThrow() {
    let throwRandom = Math.ceil(Math.random() * 3);
    if (throwRandom === 1) {
        return 'rock';
    }
    if (throwRandom === 2) {
        return 'paper';
    }
    if (throwRandom === 3) {
        return 'scissors';
    }
}

