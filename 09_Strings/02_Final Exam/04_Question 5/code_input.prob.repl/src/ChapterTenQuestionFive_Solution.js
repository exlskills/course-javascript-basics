// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.changeSpace = function (input) {
    var newString = ""; // initialise new string
    for (index = 0; index < input.length; index++){ // loop through string
        if (input[index] == ' '){ // check if the index is a space
            newString = newString + "nbsp"; // add nbsp to the new string
        } else { // if the index is not a string
            newString = newString + input[index];
        }
    }
    console.log(newString);
};