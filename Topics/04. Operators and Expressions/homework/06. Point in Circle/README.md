# Point in a circle

## Description
Implement a javascript function that by given coordinates of a point **x** and **y** 
and using an expression checks if given point **(x,  y)** is inside a circle `K({0, 0}, 2)` - the center has coordinates **(0, 0)** and the circle has radius **2**. 
The program should then print **"yes DISTANCE"** if the point is inside the circle or **"no DISTANCE"** if the point is outside the circle.
  - In place of **DISTANCE** print the distance from the beginning of the coordinate system - **(0, 0)** - to the given point.

## Input
- You will receive an array as a parameter. The array will contain exactly 2 string elements, the first being the **x** coordinate and the second - the **y** coordinate.

## Output
- Output a single line in the format described above. The distance should always be printed with _2-digits of precision_ after the floating point.
- You can use `console.log` to print the results or you can use `return` to return the answer. Both are correct.

## Constraints
- The numbers **x** and **y** will always be valid floating point numbers in the range `(-1000, 1000)`
- Time limit: **0.1s**
- Memory limit: **16MB**

## Sample tests

### Sample test 1

#### Input
```js
['-2', '0']
```

#### Output
```
yes 2.00
```

### Sample test 2

#### Input
```js
['-1', '2']
```

#### Output
```
no 2.24
```

### Sample test 3

#### Input
```js
['1.5', '-1']
```

#### Output
```
yes 1.80
```

### Sample test 4

#### Input
```js
['-1.5', '-1.5']
```

#### Output
```
no 2.12
```

### Sample test 5

#### Input
```js
['100', '-30']
```

#### Output
```
no 104.40
```

### Sample test 6

#### Input
```js
['0', '0']
```

#### Output
```
yes 0.00
```

### Sample test 7

#### Input
```js
['0.2', '-0.8']
```

#### Output
```
yes 0.82
```

### Sample test 8

#### Input
```js
['0.9', '-1.93']
```

#### Output
```
no 2.13
```

### Sample test 9

#### Input
```js
['1', '1.655']
```

#### Output
```
yes 1.93
```

### Sample test 10

#### Input
```js
['0', '1']
```

#### Output
```
yes 1.00
```

## Submission
- Submit your code [here](http://bgcoder.com/Contests/Compete/Index/357#5)
