//3 задание создание объекта

const user = {
    name : 'Абдулхалим',
    surname : 'Гулаев',
    age : 24,
    city : 'Махачкала',
    language : 'Аварский',
    country : 'Дагестан',
    job : 'Учитель',
    hobby : 'Чтение книг',
    religion : 'Ислам'
};

//4 задание автомобиль

const auto ={
    brand : 'Мерседес',
    model : '222',
    manufactureYear : 2020,
    color : 'Черный',
    gearbox : 'Автоматическая',
};
auto.carOwner = user;
console.log(auto)

//5 Функция добавления свойства

function addMaxSpeed(car) {
    if (!Object.hasOwn(car, "maxSpeed")) {
        car.maxSpeed = 300
    }
}
addMaxSpeed(auto);

//6 Функция вывода свойства

function showObjectProperty (object, property) {
    console.log(object[property]);
}
showObjectProperty(auto, 'color');
showObjectProperty(user, 'religion');

//7 задание массив

const drinks = ['Эспрессо', 'Американо', 'Тоник'];

//8 Массив с книгами

const books = [
{
    name : 'Война и мир',
    author : 'Л.Толстой',
    genre : 'Роман',
    manufactureYear : 1869,
    coverColor : 'Коричневый',
},
{
    name : 'Как читать книги?',
    author : 'С.Поварнин',
    genre : 'Саморазвитие',
    manufactureYear : 1923,
    coverColor : 'Серый',
},
{
    name : 'Обломов',
    author : 'И.Гончаров',
    genre : 'Роман',
    manufactureYear : 1859,
    coverColor : 'Серый',
},
{
    name : 'Государь',
    author : 'Н.Макиавелли',
    genre : 'Политика',
    manufactureYear : 1532,
    coverColor : 'Зеленый',
},
];

const book5 = {
    name : 'Искусство спора',
    author : 'С.Поварнин',
    genre : 'Логика',
    manufactureYear : 1923,
    coverColor : 'Желтый',
};

books.push(book5);

console.log(books);

//9 Массив с книгами марвел

const hpBooks = [
{
    name: 'Гарри Поттер и философский камень',
    author: 'Дж. К. Роулинг',
    genre: 'Фэнтези',
    manufactureYear: 1997,
    coverColor: 'Красный'
},
{
    name: 'Гарри Поттер и Тайная комната',
    author: 'Дж. К. Роулинг',
    genre: 'Фэнтези',
    manufactureYear: 1998,
    coverColor: 'Зеленый'
},
{
    name: 'Гарри Поттер и узник Азкабана',
    author: 'Дж. К. Роулинг',
    genre: 'Фэнтези',
    manufactureYear: 2001,
    coverColor: 'Синий'
}
];

console.log(hpBooks)

const allBooks = [...books,...hpBooks];

console.log(allBooks);

//10 Метод МЭП


function addIsRare(books) {
    return books.map(function(book) {
        return {
            ...book,
            isRare: book.manufactureYear < 2000
        }
    })
}
const newBooks = addIsRare(allBooks);

console.log(newBooks);