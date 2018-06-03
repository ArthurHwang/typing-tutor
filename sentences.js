const phrases = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, iste.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, facere.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, dolore!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, veritatis!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, dolorem!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, error.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dicta.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dolorem!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolor.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, error.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, earum?',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eaque.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, dolorem.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, est!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, totam!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, reiciendis.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, impedit!',  
]

const splitSentences = phrases.map((char, index) => {
  return {
    sentence: char,
    index: index,
    failures: 0
  }
});