let a = true;
let b = false;
console.log(a && b); // checks if both 'a' and 'b' are true
console.log(a || b); // checks if either 'a' or 'b' is true
console.log(!b); // the '!' changes 'b' from false to true
console.log((5 > 7) && (a == b));

// true-like or false-like:
console.log("Output: " +
    !!'', // empty string is false-like
    !!'0', // non-empty strings are true-like
    !!0, // zero is false-like
    !!35, // non-zero numbers are true-like
    !![], // objects are true-like
    !!NaN, // NaN is false-like
    !!null, // both null and undefined are false-like
    !!undefined // both null and undefined are false-like
);