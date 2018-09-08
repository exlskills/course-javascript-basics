>>Consider the following code segment:

```
var bill;
function person(first_name, last_name) {
  return {
    first_name: first_name,
    last_name: last_name,
    fullName: function () {
      return this.first_name + ' ' + this.last_name;
    }
  }
}
bill = new person("Bill", "Brown");
bill.fullName();
console.log(bill.firstName);
```

What will the following code segment print to the console?<<

( ) Bill {{Incorrect because the property `firstName` does not exist in the object bill, which is why "undefined" is printed to the console.}}
( ) BillBrown {{Incorrect because the property `firstName` does not exist in the object bill, which is why "undefined" is printed to the console.}}
( ) bill brown {{Incorrect because the property `firstName` does not exist in the object bill, which is why "undefined" is printed to the console.}}
(x) undefined {{Correct because the property `firstName` does not exist in the object bill, which is why "undefined" is printed to the console.}}
( ) It will print nothing to the console {{Incorrect because the code above has no syntax errors.}}

||The statement `bill.fullName()` does not print anything to the console.||