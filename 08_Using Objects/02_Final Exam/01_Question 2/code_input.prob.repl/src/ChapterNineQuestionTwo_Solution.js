// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.youngestPerson = function (input) {
    var youngest = input[2]; // initialise the youngest age with the age of the first person
    for (index = 2; index < input.length; index+=3){ // only loops through all the ages in the array
        if (input[index] < youngest){ // check if the person's age is smaller than the current min
            youngest = input[index];
        }
    }
    console.log(input[input.indexOf(youngest)-2] + " " + input[input.indexOf(youngest)-1]); // print first and last name of the youngest individual
};