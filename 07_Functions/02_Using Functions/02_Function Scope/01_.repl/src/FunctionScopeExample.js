var arr = [1, 2, 3, 4, 5, 6, 7]; //'arr' is in the global scope (it is accessible from anywhere)
function countEven(array){
    var sum = 0; // 'sum' is in the local scope (only accessible from the function)
    for (counter = 0; counter < array.length; counter++){
        if (array[counter] % 2 == 0){
            sum += 1;
        }
    }
    return sum;
}

// Call function
console.log(countEven(arr));
// removing the comments below will cause an error
// console.log(sum); 
// console.log(array);
// console.log(counter);