// Variables for timer
let startTime;
let timerInterval;
let elapsedTime = 0;
let timerRunning = false;

// DOM elements
const timerDisplay = document.getElementById('timer');
const textInput = document.getElementById('textInput');
const charCountDisplay = document.getElementById('charCount');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to start the timer
function startTimer() {
    if (!timerRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 1000);
        timerRunning = true;
    }
}

// Function to update the timer display
function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime(elapsedTime);
}

// Function to display time in hh:mm:ss format
function displayTime(time) {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    timerDisplay.textContent = formattedTime;
}

// Function to pad single-digit numbers with leading zeros
function pad(number) {
    return number < 10 ? '0' + number : number;
}

// Function to calculate typing speed
function calculateSpeed() {
    const wordsTyped = textInput.value.trim().split(/\s+/).length;
    const speed = Math.floor((wordsTyped / (elapsedTime / 1000 / 60)) * 60); // Words per minute
    return isNaN(speed) ? 0 : speed;
}

// Function to update character count
function updateCharCount() {
    const count = textInput.value.length;
    charCountDisplay.textContent = count;
}

// Event listeners
textInput.addEventListener('input', function() {
    if (!timerRunning) {
        startTimer();
    }
    updateCharCount();
});

pauseBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerRunning = false;
});

resetBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    timerRunning = false;
    elapsedTime = 0;
    displayTime(elapsedTime);
    textInput.value = '';
    updateCharCount();
});
