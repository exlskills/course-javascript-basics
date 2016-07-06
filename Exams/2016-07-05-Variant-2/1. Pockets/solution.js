function solve(args) {
    "use strict";

    let heights = args[0].split(" ")
        .map(Number);

    let sum = 0;

    for (let i = 2; i < heights.length - 2; i += 1) {
        if (isPocket(i, heights)) {
            sum += heights[i];
        }
    }

    console.log(sum);

    // return sum;

    function isPocket(index, heights) {
        return isValley(index, heights) && isPeak(index - 1, heights) && isPeak(index + 1, heights);
    }

    function isValley(index, valley) {
        return valley[index] < valley[index - 1] &&
            valley[index] < valley[index + 1];
    }

    function isPeak(index, valley) {
        return valley[index] > valley[index - 1] &&
            valley[index] > valley[index + 1];
    }
}
