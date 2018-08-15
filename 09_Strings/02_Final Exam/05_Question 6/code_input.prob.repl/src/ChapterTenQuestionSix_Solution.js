// Do not delete this format, only change the code inside the function
// Use console.log, not return
module.exports.changeUrl = function (input) {
    var serverElement;
    for (index = 8; index < input.length; index++){ //just straight past the https://
        if (input[index] == "/"){
            serverElement = input.substring(8,index); // save the server element to a separate string
        }
    }
    console.log(serverElement);
};