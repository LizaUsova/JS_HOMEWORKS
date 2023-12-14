'use strict';

//1. запитуємо у користувача 2 операнда (2 промти).
let operand1=prompt('What is your firstname');
alert('Hello, '+operand1+'!');

let operand2=prompt('What is your lastname');
alert('Hello, '+operand1+' '+operand2+'!');

/*2. написати всі операції (складання, віднімання, множення, ділення).
Кожна операція виводить у консоль Приклад для складання: "Результат: 2+3 = 5", де 2 і 3 те, що ввів користувач.*/
let operand3 = prompt('enter the first number');
let operand4 = prompt('enter the second number');

operand3 = Number(operand3);
operand4 = Number(operand4);

//складання
let sumResult=operand3 + operand4;
console.log('sum = '+sumResult);

//віднімання
let differenceResult=operand3 - operand4;
console.log('difference = '+differenceResult);

//множення
let productResult=operand3 * operand4;
console.log('product = '+productResult);

//ділення
let quotientResult=operand3 / operand4;
console.log('quotient = '+quotientResult);