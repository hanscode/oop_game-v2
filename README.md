# Treehouse FSJS Techdegree
### Project 4: OOP Game Show App
Author - Hans Steffens

## Project Overview
This project is about to create a browser-based, word guessing game: "Phrase Hunter." Using JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

## Understand the rules of the game:

- The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
- The player clicks an onscreen keyboard to guess letters in the phrase.
- The letter is disabled on the onscreen keyboard and a player can't select that letter again.
- If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
- If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
- The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.

## Style changes details:

- `background-color` for the Start Overlay screen was changed to: `#576366`
- A `transform` css hover effect was applied to the "Start Game" button.
- The `background-color` for the body element was changed to: `#F5F5F5`
- All buttons with the class `.key` were styled as follow:
-- `background-color` property changed to `#FFF`
-- `box-shadow` property added with this value: `0px 1px 0px 2px #DDD`
-- the `box-shadow` on hover changes to : `0px 0px 0px 1px #aaa` in order to give them a pressed effect.
-- The `cursor` css property value for each button with the class `.chosen` or `.wrong` was set to `not-allowed`
-- `.chosen` or `.wrong` buttons don't load any `box-shadow` styles or hover effects. This is in order to keep the disabled style.
- The width for the hearts icons were changed to: `37px`. This is in order to avoid the icons look stretched out.