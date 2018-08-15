// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.printNumberSum = function (input) {
    var sum = 0;
    for (index = 0; index < input.length; index++){ // loops through each index of the string
        sum += parseInt(input[index]); // parse each character into an integer and adds it to sum
    }
    console.log(sum); // print the sum
};