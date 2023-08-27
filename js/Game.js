/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Be more with less'),
            new Phrase('Less is more'),
            new Phrase('Be curious'),
            new Phrase('Code is Poetry'),
            new Phrase('Knowledge is Power')
        ];
        this.activePhrase = null;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used.
    */
    getRandomPhrase() {
        const phrasesArray = this.phrases;
        // Variable that uses `Math.floor`, `Math.random` and the length of the phrases array to generate a random number
        const randomNumber = Math.floor(Math.random() * phrasesArray.length);

        // Variable that gets the phrase object
        let randomPhrase = phrasesArray[randomNumber];

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
        if (hiddenLetters.length === 0) {
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
        const liveHeart = document.querySelectorAll('.tries');
        liveHeart[this.missed].firstChild.src = 'images/lostHeart.png';
        this.missed++;
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
            gameOutcome.textContent = 'Sorry, better luck next time!';
        }
    };


    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;
        const guessedLetter = this.activePhrase.checkLetter(button.textContent);
        if (!guessedLetter) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);

            if (this.checkForWin()) {
                // If the player has won the game (checkForWin() is true), then call the gameOver() method.
                this.gameOver(true);
            }
        }
    }

    /**
    * Reset gameboard after a game is completed by clicking the "Start Game" button to load a new game.
    */

    resetGame() {
        // Remove all `li` elements from the Phrase `ul` element.
        document.querySelector('ul').innerHTML = '';

        /* Enable all of the onscreen keyboard buttons and update each to use the `key` CSS 
        class, and not use the `chosen` or `wrong` CSS classes.*/
        const keys = document.querySelectorAll('.key');
        const hearts = document.querySelectorAll('.tries');

        keys.forEach(key => {
            key.disabled = false;
            key.classList.remove('chosen', 'wrong');
        });

        hearts.forEach(heart => {
            heart.firstChild.src = 'images/liveHeart.png';
        });
    }

} 