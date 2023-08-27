/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// STEP 2
// const phrase = new Phrase();
// const game = new Game();

// STEP 3
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// STEP 4
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// STEP 5
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// STEP 6
// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// STEP 7
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game;
document.getElementById('btn__reset').addEventListener("click", () => {
      game = new Game();
      game.resetGame();
      game.startGame();
  });

const keyboard = document.getElementById('qwerty');

  keyboard.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
        game.handleInteraction(e.target);
      }
  });


