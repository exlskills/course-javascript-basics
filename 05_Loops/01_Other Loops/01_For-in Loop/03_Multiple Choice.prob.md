>>Consider the following code segment:

```
var arr = [1, 1, 2, 3, 5, 8, 13, 21];
var sum = 0;
for (var index in arr) {
    sum += arr[index];
}
console.log(sum);
```

What number is printed to the console after the `for-in` loop is executed?<<

(x) 0 {{Incorrect because each element of the array is added the `sum`.}}
( ) 28 {{Incorrect because the sum of all the elements in the array is 54.}}
( ) 33 {{Incorrect because the sum of all the elements in the array is 54.}}
( ) 54 {{Correct because the sum of all the elements in the array is 54.}}
( ) The code above will cause an error. {{Incorrect because the code above adheres to JavaScript syntax.}}

||The `for-in` loop above sums the elements in the array.||