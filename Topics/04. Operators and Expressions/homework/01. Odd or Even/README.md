# Odd or Even

## Description
Implement a javascript function that uses an expression to check if
given integer is odd or even, and prints **"even NUMBER"** or **"odd NUMBER"**, where you should print the input number's value instead of **NUMBER**.

- The functions should look like that:

```js
function solve(args) {
    // your code goes here
}
```

## Input
- You will receive the input as an array with only one element - the integer number as a javascript string.

## Output
- Output a single value - if the number is even, output **even**, followed by a space and the value of the number.
  - Otherwise, print **odd**, again followed by a space and the number's value. See the sample tests.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- The input number will always be a valid integer number.
- The input number will always be in the range `[-30, 30]`.
- Time limit: **0.2s**
- Memory limit: **16MB**

## Sample tests

### Sample Test 1

#### Input
```js
['3']
```

#### Output
```
odd 3
```

### Sample Test 2

#### Input
```js
['2']
```

#### Output
```
even 2
```

### Sample Test 3

#### Input
```js
['-2']
```

#### Output
```
even -2
```

### Sample Test 4

#### Input
```js
['-1']
```

#### Output
```
odd -1
```

### Sample Test 5

#### Input
```js
['0']
```

#### Output
```
even 0
```

## Submission
- Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#0)
