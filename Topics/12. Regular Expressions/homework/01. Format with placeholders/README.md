# Format

## Description
- Write a function that formats a string. The function should have placeholders, as shown in the example
  - Add the function to the **String.prototype**

## Input
- The input array will look like that:

```js
[
	"{ name: 'John', age: 13 }", // options
	"My name is #{name} and I am #{age}-years-old" // template
]
```

- _Hint_: you can use `JSON.Parse` method to convert the options to an object.

## Output
- Output the formatted string.

## Sample tests

| 										Input								    		| 					Output					 |
|---------------------------------------------------------------------------------------|--------------------------------------------|
| ["{ name: 'John' }",<br/>"Hello, there! Are you #{name}?"]  							| 'Hello, there! Are you John'				 |
| ["{ name: 'John', age: 13 }",<br/>"My name is #{name} and I am #{age}-years-old"] 	| 'My name is John and I am 13-years-old' 	 |

