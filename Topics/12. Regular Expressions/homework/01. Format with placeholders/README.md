# Format with placeholders

## Description
- Write a function that formats a string. The function should have placeholders, as shown in the example
  - Add the function to the **String.prototype**

## Input
- The input array will look like that:

```js
[
	'{ "name": "John", age: 13 }', // options as JSON
	'My name is #{name} and I am #{age}-years-old' // template
]
```

- _Hint_: you can use `JSON.parse` method to convert the options to an object.

## Output
- Output the formatted string.

## Constraints
- The options will always be passed as a JSON-stringified object
- The input will be relatively small
  - The options will be 6-7 at most
  - The longest template string will be shorter than 2000 symbols
- Time limit: **0.2s**
- Memory limit: **32MB**

## Sample tests

| 										Input								    					| 					Output					 |
|---------------------------------------------------------------------------------------------------|--------------------------------------------|
| [<br>'{ "name": "John" }',<br/>"Hello, there! Are you #{name}?"<br>]  							| 'Hello, there! Are you John'				 |
| [<br>'{ "name": "John", "age": 13 }',<br/>"My name is #{name} and I am #{age}-years-old"<br>] 	| 'My name is John and I am 13-years-old' 	 |

