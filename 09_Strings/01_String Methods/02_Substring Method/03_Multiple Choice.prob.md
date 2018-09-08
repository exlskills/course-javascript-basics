>>Consider the following code segment:

```
var animalOne = "Dog";
var animalTwo = "Cat";
var animalThree = "Mouse";
animalTwo = animalOne;
animalOne = "Frog";
var str = animalOne.substring(2, 4) + animalTwo.substring(1, 2) + animalThree.substring(animalOne.indexOf('o'), 5);
console.log(str);
```

What will the following code segment print to the console?<<

( ) rogDuse {{Incorrect because string index starts from 0, not 1.}}
( ) rDou {{Incorrect because `animalOne.substring(2,4)` returns "og" from "Frog", `animalTwo.substring(1,2)` returns "o" from "Dog", and `animalThree.substring(animalOne.index('o'), 5)` returns "use" from "Mouse".}}
(x) ogouse {{Correct because because `animalOne.substring(2,4)` returns "og" from "Frog", `animalTwo.substring(1,2)` returns "o" from "Dog", and `animalThree.substring(animalOne.index('o'), 5)` returns "use" from "Mouse".}}
( ) gogu {{Incorrect because `animalOne.substring(2,4)` returns "og" from "Frog", `animalTwo.substring(1,2)` returns "o" from "Dog", and `animalThree.substring(animalOne.index('o'), 5)` returns "use" from "Mouse".}}
( ) The code above will throw an error {{Incorrect because the code above has no syntax errors.}}

||`animalThree.substring(animalOne.indexOf('o'), 5)` can be simplified to `animalThree.substring(2, 5)`.||