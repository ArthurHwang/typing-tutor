const words = 'grumpy wizards make toxic brew for the evil queen and jack'
const splitWords = words.split('').map((char, index) => {return {char}});

const createSpan = character => {
  const span = document.createElement('span')
  span.textContent = character;
  span.className = "span"
  return span
}

const renderAll = array => {
  array.forEach(element => {
    document.body.appendChild(createSpan(element.char))
  })
}
