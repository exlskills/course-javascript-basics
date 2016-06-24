# Digit as word

## Description
Write a script that asks for a digit `(0-9)`, and depending on the input, shows the digit as a word (in English).
Print `not a digit` in case of invalid input.
Use a `switch` statement.

## Input
- The input will consist of an array containing a single string

## Output
- The output should be a single line

## Constraints
- Time limit: **0.2s**
- Memory limit: **16MB**

## Sample tests

### Sample test 1

#### Input
```js
['2']
```

#### Output
```
two
```

### Sample test 2

#### Input
```js
['1']
```

#### Output
```
one
```

### Sample test 3

#### Input
```js
['0']
```

#### Output
```
zero
```

### Sample test 4

#### Input
```js
['5']
```

#### Output
```
five
```

### Sample test 5

#### Input
```js
['-0.1']
```

#### Output
```
not a digit
```

### Sample test 6

#### Input
```js
['hi']
```

#### Output
```
not a digit
```

### Sample test 7

#### Input
```js
['9']
```

#### Output
```
nine
```

### Sample test 8

#### Input
```js
['10']
```

#### Output
```
not a digit
```
