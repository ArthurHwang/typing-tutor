const words = 'grumpy wizards make toxic brew for the evil queen and jack'
const splitWords = words.split('').map((char, index) => {
  return {
    char: char,
    index: index
  }
});

const appState = {
  currentCharacter: splitWords,
  currentIndex: 0,
  failures: 0
}

const createSpan = element => {
  const span = document.createElement('span')
  span.textContent = element.char
  span.setAttribute('id', element.index)
  if (appState.currentIndex === element.index) {
    span.classList.toggle('current-character');
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

window.addEventListener('keydown', (e) => {
  let target = document.querySelector('.current-character').innerHTML;
  if (e.key === target) {
    appState.currentIndex++
  } else {
    appState.failures++
  }
  clearPage();
  renderAll(splitWords);
})

renderAll(splitWords);
