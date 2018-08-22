function printGreeting() {
  console.log("Hello");
}

function print() {
  printGreeting();
}

function fibonacci(num) { // example of recursion
  if (num <= 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Call functions
printGreeting();
print();
console.log(fibonacci(10)); // returns the tenth fibonacci number