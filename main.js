const words = 'grumpy wizards make toxic brew for the evil queen and jack'
const splitWords = words.split('').map((char, index) => {
  return {
    char: char,
    index: index,
    failures: 0
  }
});

const appState = {
  characters: splitWords,
  currentIndex: 0,
}

const createSpan = element => {
  const span = document.createElement('span')
  const spanIndex = element.index
  const stateIndex = appState.currentIndex
  const classList = span.classList

  span.textContent = element.char
  span.setAttribute('id', element.index)

  if (stateIndex - 1 === spanIndex) {
    classList.toggle('succeed');
  }
  if (stateIndex === spanIndex) {
    classList.toggle('current-char-blinking')
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
  const renderTarget = document.querySelector('.container')
  array.forEach(element => {
    renderTarget.appendChild(createSpan(element))
  })
}

const clearPage = () => {
  let span = document.querySelectorAll('span');
  span.forEach(span => span.remove())
}

const calcAccuracy = (obj) => {
  let totalFailures = 0;
  const characters = obj.characters;
  const charactersLength = characters.length

  characters.forEach(element => totalFailures += element.failures)
  if (totalFailures === 0) {
    return ("100")
  }
  return (charactersLength / (totalFailures + charactersLength) * 100).toFixed(2)
}

// const 

const gameOver = (obj) => {
  let endScore = document.createElement('h1')
  endScore.textContent = calcAccuracy(obj) + "% accurate"
  endScore.className = "game-over"
  document.body.appendChild(endScore)
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
  }
  clearPage();
  renderAll(stateCharacters);
})

renderAll(appState.characters);