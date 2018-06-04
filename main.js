const $startButton = document.getElementById('button-start');
const $gameSection = document.querySelector('.container');

let seconds = 30;
let interval;

const newArray = []
phrases.forEach(elem => newArray.push(elem.split('')))

const newArray2 = newArray.map((elem, index) => {
  return {
      phrase: elem.map((char, index) => {
        return {
            char: char,
            index: index
          }
        }),
      index: index,
      failures: 0

  }
})

const appState = {
  characters: newArray2,
  currentIndex: 0,
}

// const words = 'grumpy wizards make toxic brew for the evil queen and jack'
// const splitWords = words.split('').map((char, index) => {
//   return {
//     char: char,
//     index: index,
//     failures: 0
//   }
// });

// const appState = {
//   characters: splitWords,
//   currentIndex: 0,
// }

const buttonState = {
  counter: 0
}

const createSpan = element => {
  const span = document.createElement('span');
  const spanIndex = element.index;
  const stateIndex = appState.currentIndex;
  const classList = span.classList;

  span.textContent = element.char;
  span.setAttribute('id', element.index);

  if (stateIndex - 1 === spanIndex) {
    classList.toggle('succeed');
  }
  if (stateIndex === spanIndex) {
    classList.toggle('current-character');
  }
  if (element.failures > 0 && stateIndex === spanIndex) {
    classList.toggle('failed');
  }
  if (element.failures > 0 && stateIndex === spanIndex && span.textContent === ' ') {
    classList.toggle('space-fail')
  }
  return span;
}

const renderAll = array => {
  array.forEach(element => {
    $gameSection.appendChild(createSpan(element));
  })
}

const clearSpans = () => {
  let span = document.querySelectorAll('span');
  span.forEach(span => span.remove());
}

const calcAccuracy = (obj) => {
  let totalFailures = 0;
  const characters = obj.characters;
  const charactersLength = characters.length;
  characters.forEach(element => totalFailures += element.failures);
  if (totalFailures === 0 && appState.currentIndex === 0)
    return ("0");
  if (totalFailures === 0) {
    return ("100");
  }
  return (charactersLength / (totalFailures + charactersLength) * 100).toFixed(2);
}

const gameOver = (obj) => {
  const endScore = document.createElement('h1');
  const endScoreTarget = document.querySelector('.game-over-section');
  endScore.textContent = calcAccuracy(obj) + "% accurate";
  endScore.className = "game-over"
  endScoreTarget.appendChild(endScore);
}

const clearGameOver = () => {
  const removedEndScore = document.querySelector('.game-over')
  removedEndScore.remove();
}

const createTimer = (countdown) => {
  const timerTarget = document.querySelector('.timer-section')
  let newTimer = document.createElement('h2')
  newTimer.className = 'timer'
  newTimer.textContent = 'Time left: ' + seconds
  timerTarget.appendChild(newTimer);
}

const timer = () => {
  let timerDisplay = document.querySelector('.timer')
  seconds--
  if (seconds === 0) {
    clearInterval(interval);
    gameOver(appState);
  }
  timerDisplay.innerHTML = 'Time left: ' + seconds
}

const startTimer = () => {
  interval = setInterval(timer, 1000);
}

window.addEventListener('keydown', (e) => {
  let target = appState.characters[appState.currentIndex].char
  let stateCharacters = appState.characters;
  if (e.key === target) {
    appState.currentIndex++
  }
  if (e.key !== target) {
    stateCharacters[appState.currentIndex].failures++
  }
  if (stateCharacters[appState.currentIndex] === undefined) {
    gameOver(appState)
    clearInterval(interval)
    seconds = 30;
  }
  clearSpans();
  renderAll(stateCharacters);
})

$startButton.addEventListener('click', (e) => {
  if (buttonState.counter === 0) {
    buttonState.counter++
      numbers = 30;
    clearInterval(interval);
    createTimer();
    startTimer();
    renderAll(appState.characters)
  }
  if (buttonState.counter === 1 && appState.currentIndex === appState.characters.length) {
    appState.currentIndex = 0;
    numbers = 30;
    clearInterval(interval)
    clearSpans();
    clearGameOver();
    startTimer();
    renderAll(appState.characters)
  }
})