>>Consider the following code segment:

```
var arr = [1, 3, 3, 4, 3, 3, 33, 5, 3, 2];
console.log(arr.lastIndexOf(3, 7));
```

What will the following code segment print to the console?<<

( ) 1 {{Incorrect because the `lastIndexOf()` method looks at the array elements from right to left.}}
( ) 2 {{Incorrect because index 5 also contains the number 3.}}
( ) 4 {{Incorrect because index 5 also contains the number 3.}}
(x) 5 {{Correct because last index of the number 3 from index 7 is index 5.}}
( ) 8 {{Incorrect because the `lastIndexOf()` method looks at the array elements before index 7.}}

||The `lastIndexOf()` method looks for the number 3 from right to left, starting from index 7.||