function Letter() {
    this.won = false;
    this.do = function(chosenLetter, underscoreWord, word, chosenWord) {
        for (i = 0; i < underscoreWord.length; i++) {
            if (chosenLetter == word[i]) {
                underscoreWord[i] = chosenLetter;
            }
        }
        if (underscoreWord.join('') == word.join('')) {
            console.log('You Won!');
            console.log('The word was ' + chosenWord.toUpperCase());
            this.won = true;
        }
    };
};

module.exports = Letter;