// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.rectangles = function (input_1, input_2) {
    var area = input_1 * input_2; // calculates the area of the rectangle (width x height)
    var perimeter = input_1 * 2 + input_2 * 2; // calculates the perimeter of the rectangle (width + width + height + height)
    console.log(area + ' ' + perimeter); // prints the area and perimeter with a space in between
};