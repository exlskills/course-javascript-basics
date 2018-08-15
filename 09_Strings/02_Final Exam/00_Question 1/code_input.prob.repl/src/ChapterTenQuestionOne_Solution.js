// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.reverseString = function (input) {
    var reversedString = ""; // declare the new reversed string
    for (index = input.length-1; index >= 0; index--){ // loops through the string from its last index
        reversedString = reversedString + input[index];
    }
    console.log(reversedString);
};