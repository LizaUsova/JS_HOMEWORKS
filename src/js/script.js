'use strict';

/*task #1*/
let student={
    name: 'Alisa',
    age: 13,
    grade: 8
}
console.log(student);

student.name = 'Liza';
console.log(student);

student.course = 3;
console.log(student);


/*task #2*/
const book={
    title: 'The Raven',
    author: 'Edgar Allan Poe',
    year: 1845
}
console.log(book);

book['publisher']=['name', 'location'];
console.log(book);


/*task #3*/
const movie={
    title: 'Lord of The Rings',
    director: 'Peter Jackson',
    year: 2001,
    genre: 'Adventure'
}
for (const property in movie) {
    console.log(`${property}: ${movie[property]}`);
}


/*task #4*/
const person1={
    name: 'Alisa',
    age: 13,
    grade: 8
}

const person2={
    name: 'Alisa',
    age: 13,
    grade: 8
}

let symbolPerson1 = Symbol('id');
let symbolPerson2 = Symbol('id');

console.log(person1, person2);
console.log(person1 === person2);


/*task #5*/
const animals = [
    {type: 'cat', name: 'Tisha'},
    {type: 'dog', name: 'Sima'},
    {type: 'cow', name: 'Buryonka'}
]

const addAnimal = { type: 'horse', name: 'Wild' };
animals.push(addAnimal);
console.log(animals);