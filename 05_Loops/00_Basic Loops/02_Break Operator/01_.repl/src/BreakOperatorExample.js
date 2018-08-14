let counter = 1;
console.log("Count from 1 to 10");
while (counter < 11) {
    console.log(counter);
    if (counter == 5) { // stops the while loop after 5 is printed
        break;
    } else {
        counter += 1;
    }
}