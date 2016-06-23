# Youngest person

## Description
Write a function that finds the youngest person in a given array of people and prints his/hers full name.
Each person has properties `firstname`, `lastname` and `age`.

_Example:_

```js
var people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 }
];
```

## Input
- The input will consist of an array containing **3 \* N values**
  - **N** is the number of people
  - Values represent `firstname`, `lastname`, `age`, ...

## Output
- The output should be consisted of one line
  - The full name of the youngest person

## Constraints
- Time limit: **0.2s**
- Memory limit: **16MB**

## Sample tests

### Sample Test 1

#### Input
```js
[
  'Gosho', 'Petrov', '32',
  'Bay', 'Ivan', '81',
  'John', 'Doe', '42'
]
```

#### Output
```
Gosho Petrov
```

### Sample Test 2

#### Input
```js
[
  'Penka', 'Hristova', '61',
  'System', 'Failiure', '88',
  'Bat', 'Man', '16',
  'Malko', 'Kote', '72'
]
```

#### Output
```
Bat Man
```

## Submission
- Submit your code [here](http://bgcoder.com/Contests/Compete/Index/362#2)
