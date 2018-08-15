// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.biggestNum = function (input_1, input_2, input_3, input_4, input_5) {
    if (input_1 > input_2 && input_1 > input_3 && input_1 > input_4 && input_1 > input_5){ // check if input_1 is the largest
        console.log(input_1); // prints input_1
    } else if (input_2 > input_1 && input_2 > input_3 && input_2 > input_4 && input_2 > input_5){ // check if input_2 is the largest
        console.log(input_2); // prints input_2
    } else if (input_3 > input_1 && input_3 > input_2 && input_3 > input_4 && input_3 > input_5){ // check if input_3 is the largest
        console.log(input_3); // prints input_3
    } else if (input_4 > input_1 && input_4 > input_2 && input_4 > input_3 && input_4 > input_5){ // check if input_4 is the largest
        console.log(input_4); // prints input_4
    } else { // if all of the above statements are false, input_5 must be the largest
        console.log(input_5); // prints input_5
    }
};