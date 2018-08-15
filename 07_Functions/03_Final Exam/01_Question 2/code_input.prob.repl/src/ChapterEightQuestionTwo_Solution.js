// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.getLargest = function (input) {
    var maxNum = input[0]; // initialise the maximum number with the first number in the array
    for (index = 0; index < input.length; index++) { // loop through the array
        if (input[index] > maxNum) { // check if the element is larger than the current max
            maxNum = input[index]; 
        }
    }
    console.log(maxNum);
};