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
  span.textContent = element.char
  span.setAttribute('id', element.index)
  if (appState.currentIndex - 1 === element.index) {
    span.classList.toggle('succeed');
  }
  if (appState.currentIndex === element.index) {
    span.classList.toggle('current-character');
  }
  if (element.failures > 0 && appState.currentIndex === element.index) {
    span.classList.toggle('failed');
  }
  return span;
}

const renderAll = array => {
  array.forEach(element => {
    document.body.appendChild(createSpan(element))
  })
}

const clearPage = () => {
  let deletedSpans = document.querySelectorAll('span');
  deletedSpans.forEach(span => span.remove())
}

const calculateSuccess = (obj) => {
  let totalFailures = 0;
  for (let i = 0; i < obj.characters.length; i++) {
    totalFailures += obj.characters[i].failures
  }
  if (totalFailures === 0) {
    return ("100% accurate")
  }
  return (obj.characters.length / (totalFailures + obj.characters.length)) * 100 + "% accurate"
}

const gameOver = (obj) => {
  let h1 = document.createElement('h1')
  h1.textContent = "Game Over! " + calculateSuccess(obj)
  h1.className = "game-over"
  document.body.appendChild(h1)
}

window.addEventListener('keydown', (e) => {
  let target = appState.characters[appState.currentIndex].char
  if (e.key === target) {
    appState.currentIndex++
  } else {
    appState.characters[appState.currentIndex].failures++
  }

  if (appState.characters[appState.currentIndex] === undefined) {
    gameOver(appState)
  }
  clearPage();
  renderAll(appState.characters);
})

renderAll(appState.characters);
