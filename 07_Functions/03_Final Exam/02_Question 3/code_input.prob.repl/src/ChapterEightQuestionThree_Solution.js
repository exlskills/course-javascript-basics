// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.englishDigit = function (input) {
    var lastDigit = input % 10;
    switch(lastDigit){
        case 0: console.log("zero"); break; // if lastDigit is equal to 0, these statements are executed
        case 1: console.log("one"); break; // if lastDigit is equal to 1, these statements are executed
        case 2: console.log("two"); break; // if lastDigit is equal to 2, these statements are executed
        case 3: console.log("three"); break; // if lastDigit is equal to 3, these statements are executed
        case 4: console.log("four"); break; // if lastDigit is equal to 4, these statements are executed
        case 5: console.log("five"); break; // if lastDigit is equal to 5, these statements are executed
        case 6: console.log("six"); break; // if lastDigit is equal to 6, these statements are executed
        case 7: console.log("seven"); break; // if lastDigit is equal to 7, these statements are executed
        case 8: console.log("eight"); break; // if lastDigit is equal to 8, these statements are executed
        case 9: console.log("nine"); break; // if lastDigit is equal to 9, these statements are executed
    }
};