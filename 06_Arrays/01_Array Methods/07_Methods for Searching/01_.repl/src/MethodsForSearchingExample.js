var arr1 = [1, 2, 3, 4, 2, 3, 2, 4, 2, 2];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven(number) {
  return number % 2 == 0;
}

// arrayname.indexOf
console.log(arr1.indexOf(2, 0));

// arrayname.lastIndexOf
console.log(arr1.lastIndexOf(2, arr1.length - 1));

// arrayname.find
console.log(arr2.find(isEven));

// arrayname.findIndex
console.log(arr2.findIndex(isEven));