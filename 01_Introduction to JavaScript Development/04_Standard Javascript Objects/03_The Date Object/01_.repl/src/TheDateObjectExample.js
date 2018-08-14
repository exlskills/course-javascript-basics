var now = new Date();
// new Date() creates a new date object with the current date and time
var result = "The date and time now is " + now;
console.log(result);

// Make something happen (once) after a fixed delay:
function reminder() {
    console.log("It's been 5 seconds");
}
var timer = setTimeout(reminder, 5000); // 5 seconds in this case

// Make something happen repeatedly at fixed intervals:
var myTimer = 0;
function printTime() {
    console.log("The date and time now is " + new Date());
    myTimer++;
    if (myTimer == 10) { // stops the continuous call of the function
        clearInterval(timer);
        console.log("It's been 10 seconds");
    }
}
var timer = setInterval(printTime, 1000); // This function is called continuously every second