//3 задание
function showTemp(city, temp) {
    console.log(`Сейчас в ${city} температура - ${temp} градусов по Цельсию`);
}
showTemp('Махачкале', 30);

//4 задание
const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
    if (speed > LIGHT_SPEED) {
        console.log('Сверхсветовая скорость');
    } else if(speed === LIGHT_SPEED) {
        console.log('Скорость света');
    } else {
        console.log('Субсветовая скорость');
    }
}
checkSpeed(30000000000);
checkSpeed(1111);
checkSpeed(299792458);

//5 задание

const product = 'Эспрессо';
const price = 150;

function tryBudget(money) {
    if (money >= price) {
        console.log(`${product} приобретен.Спасибо за покупку!`);
    } else {
        const difference = price - money
        console.log(`Вам не хватает ${difference},пополните баланс`);
    }
}
tryBudget(160)
tryBudget(150)
tryBudget(90)

//6 задание

function showResultTest(points) {
    if (points >= 80) {
        console.log('Поздравляем вы сдали экзамен с оценкой "Отлично"');
    } else if(points < 80 && points > 60) {
        console.log('Вы сдали экзамен с оценкой "Хорошо"');
    } else {
        console.log('Вы не сдали экзамен');
    }
}
showResultTest(100);
showResultTest(70);
showResultTest(50);

//7 задание

let name = 'Абдулхалим';
let age = 24;
let country = 'Дагестан';

