var diceNumber = 4;
if (diceNumber == 1) {
    console.log("The dice number is 1");
} else if (diceNumber % 2 == 0) { // if dice number is divisible by two
    if (diceNumber == 2) {
        console.log("The dice number is 2");
    } else if (diceNumber == 4) {
        console.log("The dice number is 4");
    } else if (diceNumber == 6) {
        console.log("The dice number is 6");
    } else {
        console.log("The number has to be between 1 and 6");
    }
} else if (diceNumber == 3) {
    console.log("The dice number is 3");
} else if (diceNumber == 5) {
    console.log("The dice number is 5");
} else {
    console.log("The number has to be between 1 and 6");
}