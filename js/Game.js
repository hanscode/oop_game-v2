/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Be more with less'),
            new Phrase('Less is more'),
            new Phrase('Happiness depends upon ourselves'),
            new Phrase('Every moment is a fresh beginning'),
            new Phrase('A queen is not afraid to fail')
        ];
        this.activePhrase = null;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used.
    */
    getRandomPhrase() {
        const array = this.phrases;
        // Variable that uses `Math.floor`, `Math.random` and the length of the array of phrases to generate a random number
        const randomNumber = Math.floor(Math.random() * array.length);

        // Variable that gets the phrase object
        let randomPhrase = array[randomNumber];

        // `return` the random phtase variable
        return randomPhrase;

    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        if (hiddenLetters === 0) {
            return true;
        } else {
            return false;
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed++;
        const liveHeart = document.querySelector('.tries');
        liveHeart.firstChild.src = 'images/lostHeart.png';
        if (this.missed === 5) {
            this.gameOver();
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const screenOverlay = document.getElementById('overlay');
        screenOverlay.style.display = '';
        const gameOutcome = document.getElementById('game-over-message');
        if (gameWon) {
            screenOverlay.className = 'win';
            gameOutcome.textContent = 'Great Job!';
        } else {
            screenOverlay.className = 'lose';
            gameOverMessage.textContent = 'Sorry, better luck next time!';
        }
    };


    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        console.log(button);
    }

} 