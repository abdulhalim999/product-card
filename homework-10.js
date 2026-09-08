import { productCards } from "./cards-array.js";

//5
function getCardNumber() {
    let cardNumbers = prompt('Сколько карточек отобразить? От 1 до 5')
    console.log(cardNumbers)

    const quantity = Number(cardNumbers);
    console.log(Number.isNaN(quantity));
    if (isNaN(quantity) || quantity < 1 || quantity > 5) {
        alert(`Введите число от 1 до 5!`);
    } else {
    }
    return quantity
}



//3
function renderCards(quantity) {
    const productList = document.getElementById('product-list')

    const cardTemplate = document.getElementById('card-template')

    productCards.slice(0, quantity).forEach((card) => {
    const cardCopy = cardTemplate.content.cloneNode(true);
    cardCopy.querySelector('.card__img').src = card.image
    cardCopy.querySelector('.card__purpose').textContent = card.purpose
    cardCopy.querySelector('.card__name').textContent = card.name
    cardCopy.querySelector('.card__description').textContent = card.description
    
    const compoundItems = cardCopy.querySelectorAll('.card__compound-item');

    card.compound.forEach((compound, index) => {
        compoundItems[index].textContent = compound;
    });
    cardCopy.querySelector('.card__price').textContent = `Цена:`
    cardCopy.querySelector('.card__numbers').textContent = `${card.price} Р`
    productList.appendChild(cardCopy)
})
}
const quantity = getCardNumber()
renderCards(quantity)

//4

const newProductList = productCards.reduce((result, card) => {
    result.push({
        [card.name] : card.description}
    )
    return result
},[])
console.log(newProductList)