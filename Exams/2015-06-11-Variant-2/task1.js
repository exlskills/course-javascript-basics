function solve(args) {
    "use strict";
    var heights = args[0].split(" ")
        .map(Number);

    var peaks = [0];

    for (let i = 1; i < heights.length - 1; i += 1) {
        if (isGreaterThanNeighbours(i, heights)) {
            peaks.push(i);
        }
    }

    peaks.push(heights.length - 1);

    let bestCount = -1;
    for (let i = 1; i < peaks.length; i += 1) {
        bestCount = Math.max(bestCount, peaks[i] - peaks[i - 1]);
    }


    //result
    console.log(bestCount);

    function isGreaterThanNeighbours(index, arr) {
        return arr[index - 1] < arr[index] &&
            arr[index + 1] < arr[index];
    }
}

module.exports = solve;