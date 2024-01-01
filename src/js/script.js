'use strict';

let userInput = prompt('Enter number of hours');

userInput = parseFloat(userInput);

if (isNaN (userInput)) {
    alert('Please enter valid numbers');
} else {
    let numberOfSeconds = userInput * 60 * 60;
    alert('Result: ' + numberOfSeconds + ' seconds in ' + userInput + ' hours');
}