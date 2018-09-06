>>Consider the following code segment:

```js
for (num = 0; num < 20; num += 2){
    if (num % 3 == 1){
        console.log(num);
    }
}
```

What numbers are printed to the console after executing the code above?<<

( ) 4, 16 {{Incorrect because 10 is also printed to the console.}}
(x) 4, 10, 16 {{Correct because the `for` loop above prints all the even numbers between 0 and 19 that have a remainder of 1 when divided by 3.}}
( ) 0, 6, 12, 18 {{Incorrect because the `for` loop above doesn't print even numbers that are divisible by 3.}}
( ) 1, 4, 7, 10, 13, 16, 19 {{Incorrect because the `for` loop above only prints even numbers.}}
( ) 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 {{Incorrect because the `for` loop above doesn't print all even numbers between 0 and 19.}}

||The `for` loop above only prints even numbers.||