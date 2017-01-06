const array = [1, 42, 7, 9, 13, 10, 20, 35, 45, -7, -3, 0, 4, -1, 15];

Array.prototype.every = function(isOk) {
  // console.log('Our function is called');
  const len = this.length;
  for(let i = 0; i < len; i += 1) {
    console.log(isOk(this[i], i, this));
    if(!isOk(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

Array.prototype.some = function(isOk) {
  //console.log('Our function is called');
  const len = this.length;
  for(let i = 0; i < len; i += 1) {
    if(isOk(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

console.log(array.some(x => x < 10));
console.log(array.some(x => x > 100));
console.log([1,2,3].some(x => x < 10));

function isIncreasing(x, i, arr) {
  if(i === 0) {
    return true;
  }

  return arr[i - 1] < x;
}

console.log([1,2,3].every(isIncreasing));
console.log([42, 1, 2, 3].every((x, i) => x % 2 === i % 2));
