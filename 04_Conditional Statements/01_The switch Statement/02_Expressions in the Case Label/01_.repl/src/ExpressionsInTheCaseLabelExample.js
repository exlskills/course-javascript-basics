var twenties = 23;
switch (true) {
    case (twenties > 19 && twenties < 22):
        console.log("The individual is either 20 or 21 years old");
        break;
    case (twenties > 21 && twenties < 24):
        console.log("The individual is either 22 or 23 years old");
        break;
    case (twenties > 23 && twenties < 26):
        console.log("The individual is either 24 or 25 years old");
        break;
    case (twenties > 25 && twenties < 28):
        console.log("The individual is either 26 or 27 years old");
        break;
    case (twenties > 27 && twenties < 30):
        console.log("The individual is either 28 or 29 years old");
        break;
    default:
        console.log("The individual is not in his/her twenties");
        break;
}
