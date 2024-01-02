'use strict';

alert('To calculate the arithmetic average, enter the numbers in the following input fields.');
let numberFirst = prompt('Write the first number');
let numberSecond = prompt('Write the second number');
let numberThird = prompt('Write the third number');

numberFirst = parseFloat(numberFirst);
numberSecond = parseFloat(numberSecond);
numberThird = parseFloat(numberThird);

if (isNaN(numberFirst) || isNaN(numberSecond) || isNaN(numberThird)) {
    alert('Please enter valid numbers');
} else {
    let arithmeticAverage = (numberFirst + numberSecond + numberThird) / 3;
    alert('Result: ' + arithmeticAverage);
}