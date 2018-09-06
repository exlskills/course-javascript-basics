>>Consider the following code segment:

```
var arr = [1, 2, 9, 16, 25];
let varOne = 0;
for (var index of arr) {
    if (index % 2 == 0){
        varOne += index;
    }
}
console.log(varOne);
```

What will the following code segment print to the console?<<

( ) 0 {{Incorrect because `varOne` is the sum of all the even numbers in the array.}}
(x) 18 {{Correct because only the even numbers in the array are added to `varOne`.}}
( ) 25 {{Incorrect because `varOne` is the sum of all the even numbers in the array.}}
( ) 35 {{Incorrect because `varOne` is not the sum of all the odd numbers in the array.}}
( ) 53 {{Incorrect because `varOne` is not the sum of all the numbers in the array.}}

||`varOne += index` is only executed for the even numbers in the array.||