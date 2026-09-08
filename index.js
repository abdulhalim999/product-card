import './homework-10.js';

//первая карточка
const firstCard = document.querySelector('.card');
const colorButton = document.querySelector('.button-color');

colorButton.addEventListener('click', function() {
    firstCard.style.backgroundColor = 'aqua'
});

//все карточки

const allCards = document.querySelectorAll('.card');
const colorButtonAll = document.querySelector('.button-color-all');

colorButtonAll.addEventListener('click', function() {
    allCards.forEach(function(card) {
        card.style.backgroundColor ='gold';
    });
});

//гугл

const openGoogle = document.querySelector('.button-open-google');

openGoogle.addEventListener('click', function() {
    const userAnswer = confirm('Вы уверены что хотите перейти на сайт Google');

    if (userAnswer === true) {
        window.open('https://www.google.com')
    } else {
        return;
    }
});

//вывод консоль лог

const outputLogButton = document.querySelector('.button-log-alert');

outputLogButton.addEventListener('click', function() {
    outputLogAlert('Hello');
});

function outputLogAlert(message) {
    alert(message);
    console.log(message);
}

//вывод тайтл в лог(6)
const pageTitle = document.querySelector('.title');

pageTitle.addEventListener('mouseover', function() {
    console.log(event.target.textContent);
});

//кнопка переключатель(7)
const toggleButton = document.querySelector('.button-toggle');

toggleButton.addEventListener('click', function() {
    toggleButton.classList.toggle('active-color');
});