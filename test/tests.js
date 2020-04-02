//import './example.test.js';

const test = QUnit.test;

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

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const playerThrow = 'paper';
    const computerThrow = 'paper';
    const expected = 'draw';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = compareResults(playerThrow, computerThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
