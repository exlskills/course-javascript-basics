// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.removeElements = function (input) {
    var newArray = input.filter(function (number) {
        return number != input[0]; // keep all elements that are not equal to the first element
    });
    console.log(newArray); // print new array without the occurrence of the first element 
};