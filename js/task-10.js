const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
let baseBoxSize = 30;

createBtn.addEventListener('click', onCreateBtnClick);
function onCreateBtnClick () {
  const amount = inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let divCollection = [];

  for (let i=0; i<amount; i+=1) {
    let markupDiv = document.createElement('div');
    markupDiv.style.backgroundColor = getRandomHexColor();
    markupDiv.style.width = baseBoxSize + 10*i+'px';
    markupDiv.style.height = markupDiv.style.width;

    divCollection.push(markupDiv);

    if (i===amount-1) {
      baseBoxSize = baseBoxSize + 10*(i+1);
    }
  }
  boxesContainer.append(...divCollection);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputEl.value = '';
  boxesContainer.innerHTML = '';
  baseBoxSize = 30;
}
