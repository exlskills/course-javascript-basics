for (i = 1; i <= 20; i++) {
    var x = Math.random();
    // Math.random() returns a floating-point, random number in the range 0–1 (inclusive of 0, but not 1) 
    // with approximately uniform distribution over that range
    x = 100 * x + 1;
    x = Math.floor(x);
    // Math.floor() returns the largest integer less than or equal to a given number
    console.log("Random number (" + i + ") in range " + "1..100 --> " + x);
}