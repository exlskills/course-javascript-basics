function printSign(number) {
  if (number > 0) {
      console.log("Positive");
  } else if (number < 0) {
      console.log("Negative");
  } else {
      console.log("The number is zero");
  }
}

// Call function
printSign(-5);
printSign(231);
printSign(2 + 3);
printSign(0);