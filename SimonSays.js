// Simon Says Game - Fully Enhanced Version

const buttons = document.querySelectorAll('.btn'); // Color buttons
const startBtn = document.getElementById('start'); // Start button
const body = document.body;
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const levelDisplay = document.getElementById('level');

let sequence = [];
let userSequence = [];
let level = 0;
let speed = 600; // Initial speed (ms)
let highScore = localStorage.getItem('highScore') || 0;

// Sounds for each button (replace with your own files if needed)
const sounds = {
  red: new Audio('./Assets/red.mp3'),
  green: new Audio('./Assets/green.mp3'),
  blue: new Audio('./Assets/blue.mp3'),
  yellow: new Audio('./Assets/yellow.mp3'),
  wrong: new Audio('./Assets/wrong.mp3')
};

// Initialize displays
scoreDisplay.textContent = `Score: ${level}`;
highScoreDisplay.textContent = `High Score: ${highScore}`;
levelDisplay.textContent = `Level: ${level}`;

// Start game
startBtn.addEventListener('click', () => {
  sequence = [];
  userSequence = [];
  level = 0;
  speed = 600; // reset speed
  scoreDisplay.textContent = `Score: ${level}`;
  levelDisplay.textContent = `Level: ${level}`;
  nextLevel();
});

// Generate next level
function nextLevel() {
  userSequence = [];
  level++;
  levelDisplay.textContent = `Level: ${level}`;
  scoreDisplay.textContent = `Score: ${level}`;
  speed = Math.max(200, 600 - level * 20); // Increase speed, min 200ms

  // Countdown before sequence
  let countdown = 3;
  const countdownInterval = setInterval(() => {
    levelDisplay.textContent = `Level: ${level} - Starting in ${countdown}`;
    countdown--;
    if (countdown < 0) {
      clearInterval(countdownInterval);
      showSequence();
    }
  }, 1000);
}

// Show the sequence
function showSequence() {
  const colors = ['red', 'green', 'blue', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  sequence.push(randomColor);

  sequence.forEach((color, index) => {
    setTimeout(() => {
      playSound(color);
      flashButton(color);
    }, index * speed);
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
  setTimeout(() => btn.classList.remove('active'), speed / 2);
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

  if (level - 1 > highScore) {
    highScore = level - 1;
    localStorage.setItem('highScore', highScore);
    highScoreDisplay.textContent = `High Score: ${highScore}`;
  }

  alert(`Game Over! Your score: ${level - 1}`);
}
