// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

function compareResults(playerThrow, computerThrow) {
    if (playerThrow === computerThrow) {
        return 'draw';
    }
}

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const playerThrow = 'rock';
    const computerThrow = 'rock';
    const expected = 'draw';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = compareResults(playerThrow, computerThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
