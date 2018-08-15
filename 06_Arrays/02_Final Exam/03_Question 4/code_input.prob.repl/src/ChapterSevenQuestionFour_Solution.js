// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.searchArray = function (input_1, input_2) {
    var targetIndex;
    for (index = 0; index < input_2.length; index++){
        if (input_2[index] == input_1){ // check if a certain element is the same as the target value
            targetIndex = index;
            break; // exits the for loop
        }
    }
    console.log(targetIndex);
};