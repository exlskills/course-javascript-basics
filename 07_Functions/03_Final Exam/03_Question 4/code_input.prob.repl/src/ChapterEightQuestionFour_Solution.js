// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.countArray = function (input_1, input_2) {
    var counter = 0; // counts the occurrence of input_1 in the array
    for (index = 0; index < input_2.length; index++){ // loop through the array
        if (input_2[index] == input_1){ // check if the element at the index is equal to input_1
            counter++;
        }
    }
    console.log(counter);
};