#   Task 1: Hills

##  Description

The earth is not flat. You are given a series of numbers representing its height at equal intervals. There is a rock in each of those intervals. Over time the rocks on the earth roll down until they gather in the valleys. Your task is to find what will be the maximum number of rocks in a single valley. 

##  Example (second sample input) 

<img src="imgs/example.png" />

-   Peaks are in green
-   Valleys are yellow
-   Each line has a single rock on it


##  Input	

-   The input data is given as a parameter - an array of strings. 
-   On the only input line there will be numbers separated by spaces – the heights.

##  Output

-   The output should be printed on the console.
-   Output the maximum number of rocks that will be in a valley.


##  Sample solution code (in JavaScript)

```js
function solve(params) {
    var s = params[0].split(" ")
                     .map(Number),
        result;
    // Your solution here
    console.log(result);
}
```

#   Constraints

-   Input contains between `3` and `10 000` numbers
-   Each of them is ranging `from` 0 to `100 000`
-   Consecutive numbers are not equal
-   The first and the last height are peaks
-   Allowed working time for your program: `0.25` seconds
-   Allowed memory: 32 MB


##  Sample tests

### Sample input

```cmd
5 1 7 4 8
```

### Sample output

```
2
```

### Explanation

-   5, 7 and 8 are peaks
-   1 and 4 are valleys
-   In valley 1:
    -   One rock from the left
    -   One rock from the right


### Sample input

```cmd
5 1 7 6 3 6 4 2 3 8
```

### Sample output

```
4
```

### Explanation

-   5, 7, 6 and 8 are peaks
-   1, 3 and 2 are valleys
-   In valley 1:
    -   One rock from the left
    -   One rock from the right
    -   Total: 2 
-   In valley 3:
    -   Two rocks from the left
    -   One rock from the right
    -   Total: 3
-   In valley 2:
    -   Two rocks from the left
    -   Two rocks from the right
    -   Total: 4

