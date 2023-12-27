'use strict';

let numberFirst = prompt('Write the first number');
let numberSecond = prompt('Write the second number');

numberFirst = parseFloat(numberFirst);
numberSecond = parseFloat(numberSecond);

if (isNaN(numberFirst) || isNaN(numberSecond)) {
    alert('Please enter valid numbers');
} else {
    let sum = numberFirst + numberSecond;
    let difference = numberFirst - numberSecond;
    let product = numberFirst * numberSecond;
    let quotient = numberFirst / numberSecond;

    alert(
        'Results:\n' +
        numberFirst + ' + ' + numberSecond + ' = ' + sum + '\n' +
        numberFirst + ' - ' + numberSecond + ' = ' + difference + '\n' +
        numberFirst + ' * ' + numberSecond + ' = ' + product + '\n' +
        numberFirst + ' / ' + numberSecond + ' = ' + quotient
    );
}


