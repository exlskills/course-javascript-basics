var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEvenNumber(number) {
    return number % 2 == 0;
}
// arrayname.filter()
console.log(arr1.filter(isEvenNumber)); // Extract the even numbers from the array

// arrayname.reduce()
var sum = arr1.reduce(function (sum, number) { // Calculates the sum of the numbers
    return sum + number;
}, 0);
console.log(sum)

// arrayname.map()
var squares = arr1.map(function (number) { // Calculates the squares of the numbers
    return number * number;
});
console.log(squares);