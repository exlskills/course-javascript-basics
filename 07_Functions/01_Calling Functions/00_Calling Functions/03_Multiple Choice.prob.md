>>Consider the following code segment:

```
function printGreeting() {
  console.log("Hello");
}
printGreeting();
console.log("Hello");
```

How many times is "Hello" printed to the console?<<

( ) 0 {{Incorrect because "Hello" is printed twice, once from `printGreeting();` and the other from `console.log("Hello")`.}}
( ) 1 {{Incorrect because "Hello" is printed twice, once from `printGreeting();` and the other from `console.log("Hello")`.}}
(x) 2 {{Correct because "Hello" is printed twice, once from `printGreeting();` and the other from `console.log("Hello")`.}}
( ) 3 {{Incorrect because "Hello" is printed twice, once from `printGreeting();` and the other from `console.log("Hello")`.}}
( ) 4 {{IIncorrect because "Hello" is printed twice, once from `printGreeting();` and the other from `console.log("Hello")`.}}

||The statement `printGreeting()` prints "Hello" to the console.||