<img src="https://raw.githubusercontent.com/TelerikAcademy/Common/master/logos/telerik-header-logo.png" />

#### _Telerik Academy Season 2016-2017 / JavaScript Fundamentals Exam - 04 June 2016_

# Valleys

## Description

The earth is not flat. You are given a sequence of numbers representing heights. A **peak** is a height, that is **larger than its direct neighbours**. A valley is a sequence of 3 or more heights between two peak, including the peaks.

<img src="imgs/example.png" />

-   Peaks are in green

Your task is to write a program which finds the **largest sum of heights** in a valley.

## Input
- Input will consist of an array with single element: the heights with a space between them
- _The input will always be valid and in the described format. There is no need to validate it explicitly._

## Output
- Output should consist of a single line: the **largest sum**

## Constraints
-   The number of heights will always be less than `10000`
-   Each height will be between `0` and `100`
-   The first and the last height are peaks
-   **Time limit: 0.3 s**
-   **Memory limit: 16 MB**

##  Solution template

-   Follow the exact template:

```js
function solve(args){
    let heights = args[0]...

    let result;

    //your solution here

    console.log(result);
}
```

## Sample tests

### Sample Test 1

#### Input
```js
[
    "5 1 7 4 8"
]
```

#### Output
```
19
```

### Sample Test 2

#### Input
```js
[
	"5 1 7 6 5 6 4 2 3 8"
]
```

#### Output
```
24
```

####    Examplanation

-   The three valleys are:
    -   `5 1 7` (sum 13)
    -   `7 6 5 6` (sum **24**)
    -   `6 4 2 3 8` (sum 23)