// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.pointInCircle = function (input_1, input_2) {
    var withinX = input_1 <= 2 && input_1 >= -2; // checks if the x coordinate is in between -2 and 2 (inclusive)
    var withinY = input_2 <= 2 && input_2 >= -2; // checks if the y coordinate is in between -2 and 2 (inclusive)
    console.log(withinX && withinY); // prints true if both x and y coordinates meet the condition
};