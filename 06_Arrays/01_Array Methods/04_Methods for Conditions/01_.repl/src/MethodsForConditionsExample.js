var arr1 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var arr2 = [10, 12, 14, 16, 18, 20];
function isEvenNumber(number) {
    return number % 2 == 0;
}
// arrayname.every()
console.log(arr1.every(isEvenNumber));
console.log(arr2.every(isEvenNumber));

// arrayname.some()
console.log(arr1.some(isEvenNumber));
console.log(arr2.some(isEvenNumber));