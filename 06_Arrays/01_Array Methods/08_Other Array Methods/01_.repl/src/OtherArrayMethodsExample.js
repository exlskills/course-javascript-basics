var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arrayname.reverse()
console.log(arr1.reverse());

// arrayname.join()
var stringA = arr1.join(" : ")
console.log(stringA);

// arrayname.slice()
console.log(arr1.slice(0, 5));

// arrayname.sort
var arr2 = [1, 3, 2, 4, 6, 7, 5, 9, 8, 10];
arr2.sort(function (x, y) { // sort in ascending order
  return x - y;
});
console.log(arr2);

// arrayname.fill
var arr3 = Array.from({ length: 10 }).fill("a");
console.log(arr3);