const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const currentValue = document.querySelector('#value');

let counterValue = 0;
function updateValue() {
    currentValue.textContent = counterValue;
}

decrementBtn.addEventListener('click', onDecrementClick);
function onDecrementClick() {
    counterValue-=1;
    updateValue()
}

incrementBtn.addEventListener('click', onIncrementClick);
function onIncrementClick() {
    counterValue+=1;
    updateValue()
}