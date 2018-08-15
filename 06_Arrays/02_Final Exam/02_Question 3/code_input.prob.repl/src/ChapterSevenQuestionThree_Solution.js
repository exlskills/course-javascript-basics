// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.findFrequent = function (input) {
    var counter = 0;
    var mostFrequent = 0;
    var answer = 0;
    for (index = 0; index < input.length; index++) { // loops through the array
        for (index_2 = index + 1; index_2 < input.length; index_2++) { // loops through the array but excludes anything before index
            if (input[index] == input[index_2]) { // checks to see if there are any duplicates
                counter++;
            }
        }
        if (counter > mostFrequent){ 
            mostFrequent = counter; // changes mostFrequent to the new maximum
            answer = input[index]; // sets answer as the digit with the most occurrences
        }
    }
    console.log(answer);
};