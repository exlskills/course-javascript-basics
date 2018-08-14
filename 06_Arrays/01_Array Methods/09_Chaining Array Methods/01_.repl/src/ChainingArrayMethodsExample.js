var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven(number) {
  return number % 2 == 0;
}
function square(number) {
  return number * number;
}
console.log(arr1.filter(isEven).map(square));
// arr1.filter(isEven) changes the array to [2,4,6,8,10]
// arr1.map(square) then changes the array to [4,16,36,64,100]