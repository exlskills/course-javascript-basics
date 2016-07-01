let task1Solution = require("./task1");
let task2Solution = require("./task2");
let task3Solution = require("./task3");

let task1Tests = [
    ["5 1 7 4 8"],
    ["5 1 7 6 3 6 4 2 3 8"],
    ["10 1 2 3 4 5 4 3 2 1 10"]
];

let task2Tests = [
    ["3", "4", "--K-", "K--K", "Q--Q", "12", "d1 b3", "a1 a3", "c3 b2", "a1 c1", "a1 b2", "a1 c3", "a2 c1", "d2 b1", "b1 b2", "c3 a3", "a2 a3", "d1 d3"],
    ["5", "5", "Q---Q", "-----", "-K---", "--K--", "Q---Q", "10", "a1 a1", "a1 d4", "e1 b4", "a5 d2", "e5 b2", "b3 d4", "b3 c1", "b3 d1", "c2 a3", "c2 b4"]
];

let task3Tests = [
    [
        ".jedi {",
        "has: lightsaber;",
        "}"
    ],
    [
        "#the-big-b{",
        "  color: big-yellow;",
        "  .little-bs {",
        "           color: little-yellow;",
        "      $.male            {",
        "             color: middle-yellow;",
        "}",
        "}",
        "}",
        "           .muppet           {",
        "             skin        :        fluffy;",
        "  $.water-spirit    {",
        "    powers    :     water;",
        "                     }",
        "  $>thread{",
        "     color: depends;",
        "}",
        "  powers    :      all-muppet-powers;",
        "}"
    ]
];


task1Tests.forEach((test, index) => {
    console.log(`Task 1: Test ${index + 1}`)
    task1Solution(test);
    console.log('----------------')
});

task2Tests.forEach((test, index) => {
    console.log(`Task 2: Test ${index + 1}`)
    task2Solution(test);
    console.log('----------------')
});

task3Tests.forEach((test, index) => {
    console.log(`Task 3: Test ${index + 1}`)
    task3Solution(test);
    console.log('----------------')
});