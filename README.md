# Tic-Tac-Toe Game

## Overview

This is a simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. The game allows two players to take turns and place their marks (X or O) on a 3x3 grid. The game provides feedback on the moves made and announces the winner when a player wins or if the game results in a tie.

## Features

- Two-player game.
- Provides commentary on moves.
- Checks for winning combinations.
- Displays the winner or announces a tie.
- Resets the game automatically after a win or a tie.

## Technologies Used

- **HTML**: The structure of the game board and the UI.
- **CSS**: Styling for the game board and UI elements.
- **JavaScript**: Logic for game functionality and interactivity.

## Getting Started

To run this game, simply open the `index.html` file in a web browser.

### HTML Structure

The HTML file contains the structure of the game board and the necessary UI elements. Here is a brief overview of the HTML elements used:

- A 3x3 grid representing the game board with each cell having the class `box` and a unique ID (`#a`, `#b`, etc.).
- A `div` element to display commentary with the class `com`.
- Two `div` elements to display the score of Player 1 and Player 2 with classes `player1` and `player2`.
### Where To Find
-Hosted at:https://krttt.netlify.app/


### CSS Styling

The CSS file contains styles for the game board and UI elements. It ensures that the game board is displayed correctly and provides basic styling for the commentary and score display.

### JavaScript Logic

The JavaScript file contains the logic for the game. Here is a brief overview of the key functionalities:

- **Event Handling**: Adds click event listeners to each box on the game board.
- **Game Logic**: 
  - Checks if a box is already selected and provides feedback.
  - Alternates turns between Player 1 and Player 2.
  - Provides random commentary on moves.
  - Checks for winning combinations after each move.
  - Announces the winner or a tie.
  - Resets the game automatically after a win or a tie.

## How to Play

1. Open the `index.html` file in your web browser.
2. Players take turns clicking on the boxes to place their marks (X or O).
3. The game will provide commentary on each move.
4. The game will check for a winner or a tie after each move.
5. If a player wins or if the game is a tie, the game will automatically reset after a short delay.

Enjoy the game!
