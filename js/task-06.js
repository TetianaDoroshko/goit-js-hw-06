const inputEl = document.querySelector('#validation-input');
const dataLength = Number(inputEl.getAttribute('data-length'));
console.log(dataLength);
inputEl.addEventListener('blur', checkEntryLength);

function checkEntryLength(event) {
    inputEl.classList.remove('valid', 'invalid');
    
    if(event.currentTarget.value.length === dataLength) {
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
    }
}