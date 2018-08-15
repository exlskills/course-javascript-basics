// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.allocateArray = function (input) {
    var arr = new Array(input); // creates a new array with length equal to input
    for (index = 0; index < input; index++){ // initialise the array with the proper numbers 
        arr[index] = 5 * index;
    }
    console.log(arr);
};