
const form = document.querySelector('.footer__subscribe-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('.footer__subscribe-field');
    const userEmail = email.value
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
const modalForm = document.querySelector('.modal__form')
modalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(modalForm);
    const formDataObject = Object.fromEntries(formData)

    console.log(modalForm.checkValidity());
    if (modalForm.checkValidity() === false) {
        alert('Регистрация отклонена')
        return
    }
        
    if (formDataObject.password !== formDataObject.confirmPassword) {
        alert('Пароли не совпадают')
        return
    }
    alert('Регистрация прошла успешно')
    user = {...formDataObject,createdOn : new Date()}
    console.log(user)
    modal.classList.remove('modal-showed')
    overlay.classList.remove('overlay-showed')
})





