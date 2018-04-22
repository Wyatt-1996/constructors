var inquirer = require('inquirer');
var Word = require('./Word');

var myWord = new Word();

function processTheShizz() {
    inquirer.prompt([
        {
            name: 'letter',
            message: 'Choose a letter',
            type: 'input'
        }
    ]).then(function(answer) {
        var chosenLetter = answer.letter.toUpperCase();
        console.log('chosen letter: ' + chosenLetter);
        myWord.guesses.push(chosenLetter);
        myWord.guessesLeft--;
        myWord.letterChecker(chosenLetter);
        if (myWord.guessesLeft > 0) {
            myWord.talk(chosenLetter);
            processTheShizz();
        }
    });
};
processTheShizz();