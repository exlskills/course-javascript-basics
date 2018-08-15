// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.calculateStats = function (input) {
    var maxVal = input[0]; // give maxVal an initial value, the first digit of input
    var minVal = input[0]; // give minVal an initial value, the first digit of input
    var sum = 0;
    var average = 0;
    for (index = 0; index < input.length; index++) { // loop through each index of the string
        if (parseInt(input[index]) > maxVal) { // check if the digit is greater than the current max
            maxVal = parseInt(input[index]) // change the current max to the digit
        }
        if (parseInt(input[index]) < minVal) { // check if the digit is smaller than the current min
            minVal = parseInt(input[index]) // change the current min to the digit
        }
        sum += parseInt(input[index]); // add each digit to the sum
    }
    average = sum / 4; // find the average by using the sum
    console.log("max=" + maxVal + ", " + "min=" + minVal + ", " + "sum=" + sum + ", " + "avg=" + average);
};