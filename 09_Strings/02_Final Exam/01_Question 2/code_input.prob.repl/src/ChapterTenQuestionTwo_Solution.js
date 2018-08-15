// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.correctBrackets = function (input) {
    var leftBrackets = 0;
    var rightBrackets = 0;
    for (index = 0; index < input.length; index++){ // count left brackets
        if (input[index] == "("){
            leftBrackets++;
        }
    }
    for (index = 0; index < input.length; index++){ // count right brackets
        if (input[index] == ")"){
            rightBrackets++;
        }
    }
    if (leftBrackets == rightBrackets){ // check if the number of left brackets are equal to the number of right brackets
        console.log(true);
    } else {
        console.log(false);
    }
};