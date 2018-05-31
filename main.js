const characters = [
  {1: 'g'},
  {2: 'r'},
  {3: 'u'},
  {4: 'm'},
  {5: 'p'},
  {6: 'y'},
  {7: ' '},
  {8: 'w'},
  {9: 'i'},
  {10: 'z'},
  {11: 'a'},
  {12: 'r'},
  {13: 'd'},
  {14: 's'},
];

function renderSingle(arr) {
  let character = document.getElementById('char-render');
  character.innerHTML = arr[0][1];
}

function renderAll(arr) {
  let character = document.getElementById('char-render');
  arr.forEach((element, index, array) => {
    let value = element[index + 1]
    character.innerHTML += value;
  });
}
