Simon Says Game

A fun and interactive memory game built with HTML, CSS, and JavaScript. Players must memorize and replicate increasingly long sequences of colors to advance through levels. This enhanced version includes score tracking, high score, level display, countdown, speed increase, sound effects, and animations.

🕹️ How to Play

Click the Start Game button to begin.

Watch the sequence of colors light up.

Repeat the sequence by clicking the colored buttons in the correct order.

Each correct sequence adds a new color and increases the level.

The sequence plays faster with each level.

A wrong move ends the game, and your score is displayed.

🎮 Features

Score tracking – Shows the current sequence length.

High score – Stored in localStorage to persist across sessions.

Level display – Shows the current level prominently.

Countdown before each level – Gives the player 3 seconds to prepare.

Speed increase per level – The sequence plays faster as the game progresses.

Sound effects – Each color plays a distinct sound; a “wrong” sound plays on mistakes.

Game over animation – Screen flashes red when the player makes a mistake.

Responsive and visually interactive.

🛠️ Technologies Used

HTML – Game structure.

CSS – Styling, animations, and layout.

JavaScript – Game logic, sequence generation, score, and level management.

📂 File Structure
SimonSaysGame/
├── SimonSaysGame.html    # Main HTML file
├── SimonSays.css         # Styles (can include animations)
├── SimonSays.js          # JavaScript logic and game functionality
├── Assets/               # Sound files for colors and wrong move

🔧 How to Run Locally

Clone the repository:

git clone https://github.com/Partharora07/SimonSaysGame.git


Open SimonSaysGame.html in a web browser.

Make sure the Assets folder contains the sound files (red.mp3, green.mp3, blue.mp3, yellow.mp3, wrong.mp3).

💡 Notes

The game is implemented with vanilla JavaScript and requires no external libraries.

The high score persists across browser sessions using localStorage.

Easy to extend with new features like leaderboards, themes, or mobile touch gestures.

📜 License

This project is open-source and available under the MIT License.
