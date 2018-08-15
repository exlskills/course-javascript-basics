// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.endsWithCharacter = function (input) {
    var result = "";
    for (index = 0; index < input.length; index++){ // loop through the array
        if (input[index].match(/t$/g)){ // checks if the word ends with a 't'
            result = result + input[index] + " ";
        }
    }
    result = result.trim(); // remove the whitespace at the end of the string
    console.log(result);
};