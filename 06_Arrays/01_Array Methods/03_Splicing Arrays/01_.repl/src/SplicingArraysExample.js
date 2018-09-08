var numbers = [1, 2, 3, 4, 5];
// Removes 2 elements starting from index 0 and adds 2 new elements
numbers.splice(0, 2, "one", "two");
console.log(numbers);

var names = ["John", "Jack"];
//Inserts element(s) at position index
names.splice(0, 0, "Jill", "Jim", "Jacob");
console.log(names);
//removes element(s) at position index, 0 is the index and 2 is the number of items removed
names.splice(0, 2);
console.log(names);