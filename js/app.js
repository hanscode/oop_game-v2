/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Gloval Variables
 */
let game;
const keyboard = document.getElementById('qwerty');
const keyboardButtons = document.querySelectorAll('.key');
const resetButton = document.getElementById('btn__reset');

// A click event listener to the HTML button element with the id ``btn__reset` to instantiate a new Game object.
resetButton.addEventListener("click", () => {
    game = new Game();
    game.resetGame();
    game.startGame();
});

// A click event listener rthat listens for a click on any of the onscreen keyboard buttons.
keyboard.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
        game.handleInteraction(e.target);
    }
});

// Extra Credit: keyboard functionality that allows players use their physical computer keyboard to enter guesses.
window.addEventListener("keyup", (e) => {
    // Using regular expression to make sure that only keyboard letters are triggered to `handleInteraction()`.
    const onlyLetters = /^[a-zA-Z]+$/.test(e.key);
    if (onlyLetters) {
        keyboardButtons.forEach(button => {
            if (button.textContent === e.key && button.disabled === false) {
                /* if the letter key pressed by the user is equal to the html button letter 
                and the button is enabled, then pass the button to the `handleInteraction()` */
                game.handleInteraction(button);
            }
        });
    }
});


