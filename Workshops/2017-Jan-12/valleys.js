function solve(args) {
  let numbers = args[0].split(' ').map(Number);

  function isPeak(index) {
    if(index === 0 || index === numbers.length - 1) {
      return true;
    }
    if(numbers[index] > numbers[index - 1]
      && numbers[index] > numbers[index + 1]) {
        return true;
      }

    return false;
  }

  let peaks = [];
  numbers.forEach(function(number, ind) {
    if(isPeak(ind)) {
      peaks.push(ind);
    }
  });

  let maxValleySum = 0;
  let currentValleySum = 0;

  numbers.forEach(function(num, ind) {
    currentValleySum += num;

    if(isPeak(ind)) {
      if(maxValleySum < currentValleySum) {
        maxValleySum = currentValleySum;
      }
      
      currentValleySum = num;
    }
  });

  console.log(maxValleySum);
}

solve([
    "5 1 7 4 8"
]);

solve([
    "5 1 7 6 5 6 4 2 3 8"
]);
