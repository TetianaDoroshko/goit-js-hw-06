const colorNameEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  const color = getRandomHexColor();
  colorNameEl.textContent = color;
  document.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
