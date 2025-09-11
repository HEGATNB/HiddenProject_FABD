const emailInput = document.getElementById('email');

emailInput.addEventListener('input',validateEmail)

function validateEmail(){
    const regex = /[A-Za-z0-9\.]{2-10}@[a-z0-9]\.[a-z]{2-3}/
    if (regex.test(emailInput.value))
    {
        removeError()
        return true
    }
    else
    {
        showError(emailInput,"Email введен неправильно")
        return false
    }
}

function showError(input,message){
    const form= input.parentElement;
    const errorElement = form.querySelector('.error') | document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    form.appendChild(errorElement);
    input.style.borderColor = 'red';
}

function removeError(input){
    const form = input.parentElement
    const errorElement = form.querySelector('error')
    if (errorElement){
        form.removeChild(errorElement)
    }
    inputStyle.borderColor('purple')
}