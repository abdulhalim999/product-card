import { comments } from "./comments.js";

//2 задание фильтрация массива чисел

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.filter(number => number > 4);

console.log(newNumbers);

//3 проверка наличия

const books = ['Война и мир', 'Евгений Онегин', 'Обломов', 'Как читать книги'];

const checking = books.includes('Война и мир');

console.log(checking);

const checking1 = books.includes('Идиот');

console.log(checking1);

//4  перевернуть

function reverseArray(array) {
    return array.reverse();
}
reverseArray(numbers)
console.log(numbers);

reverseArray(books)
console.log(books);

//7 комменты

const commentsFilter = comments.filter(comment => comment.email.includes('.com'));

console.log(commentsFilter);

//8 айди

const commentsWithPostId = comments.map(comment => {
    return {
        ...comment,
        postId: comment.id <= 5 ? 2 : 1
    }
})
console.log(commentsWithPostId)
console.log(comments)

//9 только айди и нэйм

const newComments = comments.map(comment => {
    return {
        id : comment.id,
        name : comment.name,
    }
})
console.log(newComments)

//10 

const commentsWithIsInvalid = comments.map(comment => {
    return {
        ...comment,
        isInvalid : comment.body.length > 180,
    }
})
console.log(commentsWithIsInvalid)

//11

const arrayOfEmail = comments.reduce((emails, comment) => {
    emails.push(comment.email)
    return emails
},[])

console.log(arrayOfEmail)

const arrayOfEmailWithMap = comments.map(comment => {
    return comment.email
})

console.log(arrayOfEmailWithMap)

//12 

const arrayString = arrayOfEmail.toString()

console.log(arrayString)

const arrayJoin = arrayOfEmail.join('-')

console.log(arrayJoin)