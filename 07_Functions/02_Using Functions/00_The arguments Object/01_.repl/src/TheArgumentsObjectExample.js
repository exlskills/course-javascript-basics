function printArguments() {
    var i;
    for (i in arguments) {
        console.log(arguments[i]);
    }
}

// Better Practise
function printArrayArguments() {
    var i, args;
    args = [].slice.apply(arguments);
    for (i in args) {
        console.log(args[i]);
    }
}

// Call function
printArguments(1, 2, 3, 4);
printArrayArguments(5, 6, 7, 8);