>>Consider the following code segment:

```
var stringOne = new String ("Hello");
var stringTwo = "Hello";
var stringThree = new String (stringOne);
var stringFour = String (stringTwo);
```

Which string are primitive strings?<<

( ) `stringOne` and `stringTwo` {{Incorrect because `stringOne` is an object.}}
( ) `stringOne` and `stringThree` {{Incorrect because `stringOne` and `stringThree` are objects.}}
( ) `stringTwo` and `stringThree` {{Incorrect because `stringThree` is an object.}}
(x) `stringTwo` and `stringFour` {{Correct because both `stringTwo` and `stringFour` are objects.}}
( ) None of the strings are primitive string? {{Incorrect because both `stringTwo` and `stringFour` are objects.}}

||Strings that are created with the `new` keyword are objects.||