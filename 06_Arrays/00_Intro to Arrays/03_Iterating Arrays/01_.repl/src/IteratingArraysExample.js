// for loop
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (counter = 0; counter < arr.length; counter++) {
    sum += arr[counter];
}
console.log(sum); // print the sum of all the elements in the array

// for-in loop
var arr = [1, 2, 3];
var index;
for (index in arr) { // print all the elements in the array
    console.log(arr[index]);
}