// slice, splice, map, filter, []

function solve(lines) {

    function print(words) {
        var wordLengths = words.map(function (w) {
            return w.length;
        });

        var maxLength = Math.max.apply(null, wordLengths);
        var result = '';

        for (var c = 0; c < maxLength; c += 1) {
            for (var i = 0; i < words.length; i += 1) {
                if (words[i][c]) {
                    result += words[i][c];
                }
            }
        }

        console.log(result);
    }

    function reorder(words) {
        for (var oldPos = 0; oldPos < words.length; oldPos += 1) {
            var newPos = words[oldPos].length % (words.length + 1);

            words.splice(newPos, 0, words[oldPos]);

            if (newPos < oldPos) {
                words.splice(oldPos + 1, 1);
            } else {
                words.splice(oldPos, 1);
            }
        }
    }

    var words = lines.slice(1);

    reorder(words);

    print(words);

    // read input
    // slice the array from 1 to end
    // implement reorder
    // too complicated, not now
    // implement print
    // treat the words as a 2D array
    // find the length of the longest words
    // map to string length and use Math.max

}

solve([
    '3',
    'hi',
    'academy',
    'exam',
]);

solve([
'2',
'you',
'win'
]);

solve([
    '1',
    'hi'
]);

solve([
'4',
'nakov',
'wrote',
'this',
'problem'
]);