const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements[0];
    const password = event.currentTarget.elements[1];

    if (email.value==='' || password.value==='') {
        alert('Please fill in all the fields!');
        return
    }

    const userInfo = {
        [email.name]: email.value,
        [password.name]: password.value,
    }
    console.log(userInfo);

    formEl.reset();
}

