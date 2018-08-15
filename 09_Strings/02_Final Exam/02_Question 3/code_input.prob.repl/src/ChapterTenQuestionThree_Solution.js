// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.substringText = function (input_1, input_2) {
    var counter = 0; // counts the number of occurrences of input_1
    var targetLength = input_1.length; // length of the target string
    for (index = 0; index < input_2.length; index++) { // loops through input_2
        if (input_2.substring(index, index + targetLength) == input_1) { // looks for the substring input_1 in input_2
            counter++;
        }
    }
    console.log(counter);
};