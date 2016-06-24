# Third digit

## Description
Implement a javascript function that takes an array with a single element - an integer **N** as parameter and prints **true** if the third digit of **N** is **7**, or **"false THIRD_DIGIT"**, where you should print the third digits of **N**.
  - The counting is done from **right to left**, meaning 123**4**56's third digit is **4**.

## Input
- The input will always consist of an array with exactly one element, the integer **N** as a string.

## Output
- The output should be a single line - print whether the third digit is **7**, following the format described above.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- **N** will always be valid non-negative integer number.
- Time limit: **0.2s**
- Memory limit: **16MB**

## Sample tests

### Sample test 1

#### Input
```js
['5']
```

#### Output
```
false 0
```

### Sample test 2

#### Input
```js
['701']
```

#### Output
```
true
```

### Sample test 3

#### Input
```js
['9703']
```

#### Output
```
true
```

### Sample test 4

#### Input
```js
['877']
```

#### Output
```
false 8
```

### Sample test 5

#### Input
```js
['777877']
```

#### Output
```
false 8
```

### Sample test 6

#### Input
```js
['9999799']
```

#### Output
```
true
```

## Submission
- Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#3)
