>>Consider the following code segment:

```
var arr = [1, 3, 4, 7, 11, 18];
arr.splice(0, 0, 0, 10);
arr.splice(0, 2);
console.log(arr);
```

What will the following code segment print to the console?<<

( ) 0, 10, 1, 3, 4, 7, 11, 18 {{Incorrect because the numbers 0 and 10 are removed from the array due to the second `splice()` method.}}
( ) 4, 7, 11, 18 {{Incorrect because the elements that are removed from the array are the elements that were added (0 and 10).}}
(x) 1, 3, 4, 7, 11, 18 {{Correct because the first `splice()` method adds the numbers 0 and 10 to the array while the second `splice()` method removes the first two elements (0 and 10).}}
( ) 1, 3, 4, 7, 11, 18, 0, 10 {{Incorrect because `splice()` does not add elements to the end of the array.}}
( ) 1, 3, 4, 7 {{Incorrect because `splice()` does not remove the elements at the end of the array.}}

||The first `splice()` method adds the numbers 0 and 10 to the start of the array. The second `splice()` statement removes the first two elements.||