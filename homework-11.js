
const getForm = document.querySelector('.footer__subscribe-form')

getForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const getEmail = document.querySelector('.footer__subscribe-field');
    const userEmail = getEmail.value
    const formEmail = { email: userEmail}
    console.log(formEmail)
})

const registrationButton = document.querySelector('.registration-button')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal__close-button')
const overlay = document.querySelector('.overlay')

registrationButton.addEventListener('click', () => {
    modal.classList.add('modal-showed')
    overlay.classList.add('overlay-showed')
})

closeButton.addEventListener('click', () => {
    modal.classList.remove('modal-showed')
    overlay.classList.remove('overlay-showed')
})

overlay.addEventListener('click', () => {
    modal.classList.remove('modal-showed')
    overlay.classList.remove('overlay-showed')
})

let user
const getModalForm = document.querySelector('.modal__form')
getModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(getModalForm.checkValidity());
    if (getModalForm.checkValidity() === false) {
        alert('Регистрация отклонена')
        return
    }
    const getPassword = document.querySelector('.modal__form-password')
    const getConfirmPassword = document.querySelector('.modal__form-confirm-password')
    
    if (getPassword.value !== getConfirmPassword.value) {
        alert('Пароли не совпадают')
        return
    } else {
        console.log(getModalForm);
        alert('Регистрация прошла успешно')
    }
    const getName = document.querySelector('.modal__form-name')
    const getSurName = document.querySelector('.modal__form-surname')
    const getDate = document.querySelector('.modal__form-birthdate')
    const getLogin = document.querySelector('.modal__form-login')

    const userForm = {
        name : getName.value,
        surname : getSurName.value,
        birthdate : getDate.value,
        login : getLogin.value,
        password : getPassword.value,
        confirmPassword : getConfirmPassword.value,
        createdOn : new Date(),
    }
    user = userForm
    modal.classList.remove('modal-showed')
    overlay.classList.remove('overlay-showed')
})





