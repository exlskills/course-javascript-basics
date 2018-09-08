>>Consider the following code segment:

```
let person = {
    firstName: 'Hollis',
    lastName: 'Brown',
    welcomeMessage: function () {
        return 'Welcome ' + this.firstName + ' ' + this.lastName + '!';
    }
};
person.welcomeMessage();
```

What will the following code segment print to the console?<<

( ) Hollis {{Incorrect because the object doesn't have any `console.log()` statements.}}
( ) Hollis Brown {{Incorrect because the object doesn't have any `console.log()` statements.}}
( ) Welcome Hollis Brown! {{Incorrect because the object doesn't have any `console.log()` statements.}}
( ) Welcome! {{Incorrect because the object doesn't have any `console.log()` statements.}}
(x) It will print nothing to the console {{Correct because the object has no `console.log()` statements.}}

||The `return` statement doesn't print anything to the console.||