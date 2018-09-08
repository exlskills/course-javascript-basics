>>Consider the following code segment:

```
var str = "ABC ACB BAC BCA CAB CBA AAA BBB CCC";
console.log(str.lastIndexOf('B'));
```

What will the following code segment print to the console?<<

( ) 23 {{Incorrect because the last index of the character 'B' is the index 30 as the length of the string is 35.}}
( ) 24 {{Incorrect because the last index of the character 'B' is the index 30 as the length of the string is 35.}}
( ) 29 {{Incorrect because the last index of the character 'B' is the index 30 as the length of the string is 35.}}
(x) 30 {{Correct because the last index of the character 'B' is the last B in "BBB", which has an index of 30.}}
( ) 31 {{Incorrect because the last index of the character 'B' is the index 30 as the length of the string is 35.}}

||The last index of the string is always the length of the string minus one.||