>>Consider the following code segment:

```
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEvenNumber(number) {
    return number % 2 == 0;
}
function isOddNumber(number) {
    return number % 2 == 1;
}
var booleanOne = arr.every(isEvenNumber) && arr.some(isOddNumber);
var booleanTwo = arr.some(isEvenNumber) && arr.every(isOddNumber);
console.log(booleanOne);
console.log(booleanTwo);
```

What will the following code segment print to the console?<<

( ) true and true {{Incorrect because both `arr.every(isEvenNumber)` and `arr.every(isOddNumber)` evaluates to false.}}
(x) false and false {{Correct because both `arr.every(isEvenNumber)` and `arr.every(isOddNumber)` evaluates to false.}}
( ) true and false {{Incorrect because `booleanOne` is also false as `arr.every(isEvenNumber)` evaluates to false.}}
( ) false and true {{Incorrect because `booleanTwo` is also false as `arr.every(isOddNumber)` evaluates to false.}}
( ) true {{Incorrect because two `boolean` values are printed to the console.}}

||`arr.every(isEvenNumber)` evaluates to false because not all numbers in the array are even numbers. What do you think `arr.every(isOddNumber)` evaluates to?||