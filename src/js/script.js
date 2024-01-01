'use strict';

let userInput = prompt('What do you want to do?\nSelect an item by writing its number.:\n1. add \n2. sub \n3. mult \n4. dif');
let numberFirst = prompt('Write the first number');
let numberSecond = prompt('Write the second number');

numberFirst = parseFloat(numberFirst);
numberSecond = parseFloat(numberSecond);

if (isNaN(numberFirst) || isNaN(numberSecond)) {
    alert('Please enter valid numbers');
} else {
    let result;

    if (userInput === '1') {
        result = numberFirst + numberSecond;
        alert('Result: ' + numberFirst + ' + ' + numberSecond + ' = ' + result );
    } else if (userInput === '2') {
        result = numberFirst / numberSecond;
        alert('Result: ' + numberFirst + ' / ' + numberSecond + ' = ' + result );
    } else if (userInput === '3') {
        result = numberFirst * numberSecond;
        alert('Result: ' + numberFirst + ' * ' + numberSecond + ' = ' + result );
    } else if (userInput === '4') {
        result = numberFirst - numberSecond;
        alert('Result: ' + numberFirst + ' - ' + numberSecond + ' = ' + result );
    }
}