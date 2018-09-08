>>Consider the following code segment:

```
let varOne = 10;
varOne++;
function multiply(){
  return varOne * 10;
}
console.log(varOne);
```

What will the following code segment print to the console?<<

( ) 10 {{Incorrect because `varOne++` adds one to the value of `varOne`.}}
(x) 11 {{Correct because the function doesn't change the original value of `varOne`.}}
( ) 90 {{Incorrect because the function doesn't change the original value of `varOne`.}}
( ) 100 {{Incorrect because the function doesn't change the original value of `varOne`.}}
( ) 110 {{Incorrect because the function doesn't change the original value of `varOne`.}}

||Numbers are passed by value, not reference.||