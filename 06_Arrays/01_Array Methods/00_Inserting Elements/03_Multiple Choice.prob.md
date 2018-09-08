>>Consider the following code segment:

```
var arr = [1, 2, 3, 4, 5];
arr.push(20);
arr.unshift(15);
console.log(arr);
```

What will the following code segment print to the console?<<

( ) 20, 1, 2, 3, 4, 5, 15 {{Incorrect because the numbers 5 and 20 are in the wrong positions.}}
( ) 16, 2, 3, 4, 25 {{Incorrect because the new array should have 7 elements, not 5.}}
(x) 15, 1, 2, 3, 4, 5, 20 {{Correct because the number 15 is added to the front of the array while the number 20 is added to the end of the array.}}
( ) 1, 2, 3, 4, 5, 20, 15 {{Incorrect because the number 15 should be added to the front of the array.}}
( ) 20, 15, 1, 2, 3, 4, 5 {{Incorrect because the number 20 should be added to the end of the array.}}

||`push()` adds the element to the front of the array while `unshift()` adds the element to the end of the array.||