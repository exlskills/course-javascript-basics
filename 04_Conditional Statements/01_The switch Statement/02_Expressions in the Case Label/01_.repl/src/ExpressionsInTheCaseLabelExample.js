var age = 23;
switch (true) { // checks if the value of age is in the twenties
    case (age > 19 && age < 22):
        console.log("The individual is either 20 or 21 years old");
        break;
    case (age > 21 && age < 24):
        console.log("The individual is either 22 or 23 years old");
        break;
    case (age > 23 && age < 26):
        console.log("The individual is either 24 or 25 years old");
        break;
    case (age > 25 && age < 28):
        console.log("The individual is either 26 or 27 years old");
        break;
    case (age > 27 && age < 30):
        console.log("The individual is either 28 or 29 years old");
        break;
    default:
        console.log("The individual is not in his/her age"); // only executed if the value of age is not in the twenties
        break;
}
