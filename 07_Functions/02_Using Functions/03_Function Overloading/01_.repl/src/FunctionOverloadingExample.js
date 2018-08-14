function print(name) {
    console.log("Name: " + name);
}
function print(name, number) {
    console.log("Name: " + name + " Number: " + number);
}

// Correct Method
function printText(name, number) {
    if (arguments.length == 1) {
        console.log("Name: " + name);
    } else {
        console.log("Name: " + name + " Number: " + number);
    }
}

// Call function
print("Jack"); // will print "Jack undefined" because 'number' is not specified
printText("Jack");
printText("Jack", 21);