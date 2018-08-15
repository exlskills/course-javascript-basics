// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.quadraticEquation = function (input_1, input_2, input_3) {
    var squareRoot = Math.sqrt(input_2 * input_2 - 4 * input_1 * input_3); // square root of b^2 - 4ac
    var root_1 = (-1 * input_2 + squareRoot) / (2 * input_1); //quadratic formula
    var root_2 = (-1 * input_2 - squareRoot) / (2 * input_1); //quadratic formula
    if (root_1 > root_2){ // checks if root_1 is bigger than root_2
        console.log(root_2 + "," + root_1); // prints root_2 first
    } else {
        console.log(root_1 + "," + root_2);  // prints root_1 first
    }
};