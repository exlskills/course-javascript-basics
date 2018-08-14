function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Call function
console.log(multiply(2, 5));
console.log(isEven(10));
console.log(isEven(11));