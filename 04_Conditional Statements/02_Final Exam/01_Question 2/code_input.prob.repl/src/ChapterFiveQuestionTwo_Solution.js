// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.sortNumbers = function (input_1, input_2, input_3) {
    if (input_1 > input_2 && input_1 > input_3) { // if input_1 is the largest number
        if (input_2 > input_3) { // if input_2 is greater than input_3
            console.log(input_1 + "," + input_2 + "," + input_3); // print input_1, then input_2, then input_3
        } else {
            console.log(input_1 + "," + input_3 + "," + input_2); // print input_1, then input_3, then input_2            
        }
    } else if (input_2 > input_1 && input_2 > input_3) { // if input_2 is the largest number
        if (input_1 > input_3) { // if input_1 is greater than input_3
            console.log(input_2 + "," + input_1 + "," + input_3); // print input_2, then input_1, then input_3
        } else {
            console.log(input_2 + "," + input_3 + "," + input_1); // print input_2, then input_3, then input_1           
        }
    } else if (input_3 > input_1 && input_3 > input_2) { // if input_3 is the largest number
        if (input_1 > input_2) { // if input_1 is greater than input_2
            console.log(input_3 + "," + input_1 + "," + input_2); // print input_3, then input_1, then input_2
        } else {
            console.log(input_3 + "," + input_2 + "," + input_1); // print input_3, then input_2, then input_1           
        }
    }
};