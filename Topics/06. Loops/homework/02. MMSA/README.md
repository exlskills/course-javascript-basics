# MMSA (Min, Max, Sum, Average) of N Numbers

## Description
Implement a javascript function that accepts an array of floating-point numbers as strings and returns the **minimal**, the **maximal** number, the **sum** 
and the **average** of all numbers (displayed with 2 digits after the decimal point).

## Input
- The array that will be passed as a parameter to your function will contain the numbers of the sequence.

## Output
- You output must always consist of *exactly* 4 lines - the minimal element on the first line, the maximal on the second, the sum on the third and the average on the fourth, in the following format:
```
min=3.00
max=6.00
sum=9.00
avg=4.50
```

## Constraints
- 1 <= **N** <= 1000
- All numbers will be valid floating-point numbers that will be in the range `[-10000, 10000]`
- Time limit: **0.2s**
- Memory limit: **32MB**

## Sample tests

|       Input  |                    Output                     |
|--------------|-----------------------------------------------|
| 2<br>5<br>1  | min=1.00<br>max=5.00<br>sum=8.00<br>avg=2.67  |
| 2<br>-1<br>4 | min=-1.00<br>max=4.00<br>sum=5.00<br>avg=1.67 |
