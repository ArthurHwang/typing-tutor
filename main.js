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
  let deletedSpans = document.getElementsByTagName('span');
  let body = document.body
  for (let i = 0; i < deletedSpans.length; i++) {
    deletedSpans[i].parentNode.removeChild(deletedSpans[i])
    }
}

window.addEventListener('keydown', (e) => {
  clearPage();
  renderAll(splitWords);
})

renderAll(splitWords);