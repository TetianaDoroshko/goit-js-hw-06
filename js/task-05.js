const inputEl = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const initialName = nameOutput.textContent;

inputEl.addEventListener('input', onInputName);
function onInputName(event) {
    nameOutput.textContent = event.currentTarget.value;
    checkName();
}
function checkName() {
    if (nameOutput.textContent.length===0) {
        nameOutput.textContent = initialName;
    }
}