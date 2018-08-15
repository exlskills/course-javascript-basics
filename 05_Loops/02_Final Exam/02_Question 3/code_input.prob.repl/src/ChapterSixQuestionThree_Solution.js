// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.palindrome = function (input) {
    var palindrome = "";
    for (index = 1; index <= input; index++){ // prints the first half of the palindrome
        palindrome = palindrome + index;
    }
    for (index = input; index >= 1; index--){ // prints the second half of the palindrome
        palindrome = palindrome + index;
    }
    console.log(palindrome);
};