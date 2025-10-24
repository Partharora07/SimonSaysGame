// Simon Says Game - Enhanced Version

const buttons = document.querySelectorAll('.btn'); // Color buttons
const startBtn = document.getElementById('start'); // Start button
const body = document.body;
let sequence = [];
let userSequence = [];
let level = 0;

// Sounds for each button (replace with your own files if needed)
const sounds = {
  red: new Audio('./Assets/red.mp3'),
  green: new Audio('./Assets/green.mp3'),
  blue: new Audio('./Assets/blue.mp3'),
  yellow: new Audio('./Assets/yellow.mp3'),
  wrong: new Audio('./Assets/wrong.mp3')
};

// High score from localStorage
let highScore = localStorage.getItem('highScore') || 0;
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');

scoreDisplay.textContent = `Score: ${level}`;
highScoreDisplay.textContent = `High Score: ${highScore}`;

// Start game
startBtn.addEventListener('click', startGame);

function startGame() {
  sequence = [];
  userSequence = [];
  level = 0;
  scoreDisplay.textContent = `Score: ${level}`;
  nextLevel();
}

// Generate next level
function nextLevel() {
  userSequence = [];
  level++;
  scoreDisplay.textContent = `Score: ${level}`;

  // Random color
  const colors = ['red', 'green', 'blue', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  sequence.push(randomColor);

  // Show sequence
  sequence.forEach((color, index) => {
    setTimeout(() => {
      playSound(color);
      flashButton(color);
    }, (index + 1) * 600);
  });
}

// Handle button clicks
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.id;
    userSequence.push(color);
    playSound(color);
    flashButton(color);
    checkSequence(userSequence.length - 1);
  });
});

// Check user input
function checkSequence(index) {
  if (userSequence[index] !== sequence[index]) {
    gameOver();
    return;
  }

  if (userSequence.length === sequence.length) {
    setTimeout(nextLevel, 1000);
  }
}

// Flash button animation
function flashButton(color) {
  const btn = document.getElementById(color);
  btn.classList.add('active');
  setTimeout(() => btn.classList.remove('active'), 300);
}

// Play sound
function playSound(color) {
  sounds[color].currentTime = 0;
  sounds[color].play();
}

// Game over
function gameOver() {
  playSound('wrong');
  body.classList.add('game-over');
  setTimeout(() => body.classList.remove('game-over'), 500);

  // Update high score
  if (level - 1 > highScore) {
    highScore = level - 1;
    localStorage.setItem('highScore', highScore);
    highScoreDisplay.textContent = `High Score: ${highScore}`;
  }

  alert(`Game Over! Your score: ${level - 1}`);
}
