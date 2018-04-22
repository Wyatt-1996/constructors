var Letter = require('./Letter');

function Word() {
    this.chosenLetter = 'A';
    this.guesses = [];
    this.guessesLeft = 9;
    this.wordArr = ['everest', 'fuji', 'copper', 'rocky'];
    this.randomWord = this.wordArr[Math.floor(Math.random() * this.wordArr.length)];
    this.chosenWord = this.randomWord;
    this.cloneHelper = this.randomWord.split('');
    this.underscoreWord = this.cloneHelper.fill('_ ');
    this.word = this.chosenWord.toUpperCase().split('');
    this.letterChecker = function() {
        var newCheck = new Letter();
        newCheck.do(this.chosenLetter, this.underscoreWord, this.word, this.chosenWord);
        if (newCheck.won) {
            this.guessesLeft = -1;
        } 
        else if (this.guessesLeft == 0) {
            console.log('You Lose');
            console.log('The word was ' + this.chosenWord.toUpperCase());
        }
    };
    this.talk = function(chosenLetter) {
        console.log('Guess: ' + chosenLetter);
        console.log('Word: ' + this.chosenWord
    );
        console.log('Lives: ' + this.guessesLeft);
        console.log('Letters: ' + this.guesses);
        console.log(this.underscoreWord.join(''));
    };
};

module.exports = Word;