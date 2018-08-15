// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.parseTags = function (input) {
    if (input.indexOf("(upcase)") != -1){ // check if (upcase) exists in input
        input = input.replace("(upcase)", ""); // remove first tag
        input = input.replace("(upcase)", ""); // remove second tag
        input = input.toUpperCase(); // make the string uppercase
    } else if (input.indexOf("(lowcase)") != -1){ // check if (lowcase) exists in input
        input = input.replace("(lowcase)", ""); // remove first tag
        input = input.replace("(lowcase)", ""); // remove second tag
        input = input.toLowerCase(); // make the string lowercase
    }
    console.log(input);
};