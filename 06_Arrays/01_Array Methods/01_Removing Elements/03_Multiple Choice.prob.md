>>Consider the following code segment:

```
var arr = [1, 2, 3, 4, 5];
arr.shift();
arr.pop();
console.log(arr);
```

What will the following code segment print to the console?<<

( ) 3, 4, 5 {{Incorrect because the first and last element of the array should be removed instead of the first and second element.}}
( ) 1, 2, 3 {{Incorrect because the first and last element of the array should be removed instead of the last and second last element.}}
( ) 1, 2, 3, 4 {{Incorrect because the first element of the array should also be removed.}}
(x) 2, 3, 4 {{Correct because first and last elements of the array are removed from the `pop()` and `shift()`.}}
( ) 1, 2, 3, 4, 5 {{Incorrect because first and last elements of the array are removed from the `pop()` and `shift()`.}}

||`shift()` and `pop` remove two elements from the array, one on each end.||