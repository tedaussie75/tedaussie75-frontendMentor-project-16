const submitBtn = document.querySelector('input[type=submit]');
const inputs = document.querySelectorAll('input:not([type=submit])');
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let inputsValidation = [{inputValid : false},{inputValid : false},{inputValid : false},{inputValid : false}];

function submitEmail(e) {
    inputs.forEach(function(e) {
        let isNotValid = e.value === '' || e.type === 'email' && e.value.match(regexEmail) == null;
        isNotValid ? e.classList.add('input-error') : e.className = '';
        isNotValid ? e.parentElement.classList.add('input-container-error') : e.parentElement.className = 'input-container';
        isNotValid ? e.nextSibling.nextSibling.classList.remove('hide') : e.nextSibling.nextSibling.classList.add('hide');
        isNotValid ? e.dataset.error = true : e.dataset.error = false;
    });

    if(document.querySelectorAll('[data-error="false"]').length !== inputs.length) {
        e.preventDefault();
    }
}

submitBtn.addEventListener('click', submitEmail)