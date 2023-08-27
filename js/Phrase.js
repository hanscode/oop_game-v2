/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.lower = phrase.toLowerCase();
        this.phrase = this.lower;
    }

    /**
    * Display phrase on game board
    */

    addPhraseToDisplay() {

        const ul = document.querySelector('ul');
        const placeholder = this.phrase;
        const lettersPlaceholders = placeholder.split('');

        lettersPlaceholders.forEach(letter => {
            const li = document.createElement('li');
            li.textContent = letter;
            li.className = letter !== ' ' ? `hide letter ${letter}` : `space`;
            ul.appendChild(li);
        });
    };

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    * @return {boolean} True if the letter selected by the player matches a letter in the phrase, false if it doesn't match
    */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) { 
        const lettersElements = document.querySelectorAll('.letter');
        const matchedLetter = this.checkLetter(letter);
        if (matchedLetter) {
            lettersElements.forEach(element => {
                if (element.classList.contains(letter)) {
                    element.classList.remove('hide');
                    element.classList.add('show');
                }
            })
        }
    };

} 