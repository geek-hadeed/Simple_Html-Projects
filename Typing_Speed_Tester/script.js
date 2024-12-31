const displayText = document.getElementById("display-text");
const inputArea = document.getElementById("input-area");
const timeElement = document.getElementById("time");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");

let startTime, endTime, timerInterval;
let testActive = false;

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "To be or not to be, that is the question.",
  "All that glitters is not gold.",
  "Where there is a will, there is a way.",
];

function getRandomSentence() {
  return sentences[Math.floor(Math.random() * sentences.length)];
}

function startTest() {
  if (testActive) return;

  testActive = true;
  inputArea.value = "";
  inputArea.disabled = false;
  startButton.style.display = "none";
  resetButton.style.display = "block";

  const randomSentence = getRandomSentence();
  displayText.textContent = randomSentence;

  startTime = new Date().getTime();
  timerInterval = setInterval(updateTimer, 1000);

  inputArea.focus();
}

function resetTest() {
  testActive = false;
  clearInterval(timerInterval);
  displayText.textContent = "";
  inputArea.value = "";
  inputArea.disabled = true;
  timeElement.textContent = "0";
  wpmElement.textContent = "0";
  accuracyElement.textContent = "0";
  startButton.style.display = "block";
  resetButton.style.display = "none";
}

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  timeElement.textContent = elapsedTime;
}

function calculateResults() {
  endTime = new Date().getTime();
  const timeElapsed = (endTime - startTime) / 60000; // in minutes

  const typedWords = inputArea.value.trim().split(/\s+/).length;
  const wpm = Math.round(typedWords / timeElapsed);

  const originalText = displayText.textContent;
  const typedText = inputArea.value;
  const accuracy = calculateAccuracy(originalText, typedText);

  wpmElement.textContent = wpm;
  accuracyElement.textContent = accuracy;

  clearInterval(timerInterval);
  testActive = false;
  inputArea.disabled = true;
}

function calculateAccuracy(original, typed) {
  const originalWords = original.trim().split(/\s+/);
  const typedWords = typed.trim().split(/\s+/);
  let correctWords = 0;

  for (let i = 0; i < Math.min(originalWords.length, typedWords.length); i++) {
    if (originalWords[i] === typedWords[i]) {
      correctWords++;
    }
  }

  return Math.round((correctWords / originalWords.length) * 100);
}

function updateDisplayText() {
  const originalText = displayText.textContent;
  const typedText = inputArea.value;
  let html = "";

  for (let i = 0; i < originalText.length; i++) {
    if (i < typedText.length) {
      if (typedText[i] === originalText[i]) {
        html += `<span class="highlight">${originalText[i]}</span>`;
      } else {
        html += `<span class="error">${originalText[i]}</span>`;
      }
    } else {
      html += originalText[i];
    }
  }

  displayText.innerHTML = html;
}

startButton.addEventListener("click", startTest);
resetButton.addEventListener("click", resetTest);
inputArea.addEventListener("input", () => {
  if (testActive) {
    updateDisplayText();
    if (inputArea.value.length === displayText.textContent.length) {
      calculateResults();
    }
  }
});
