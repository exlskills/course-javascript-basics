const array = [1, 42, 7, 9, 13, 10, 20, 35, 45, -7, -3, 0, 4, -1, 15];

Array.prototype.find = function(isOk) {
  const len = this.length;
  for(let i = 0; i < len; i += 1) {
    if(isOk(this[i], i, this)) {
      return this[i];
    }
  }
}

Array.prototype.findIndex = function(isOk) {
  const len = this.length;
  for(let i = 0; i < len; i += 1) {
    if(isOk(this[i], i, this)) {
      return i;
    }
  }
  return -1;
}

console.log(array.find(x => x % 2 === 0));
console.log(array.find(x => x % 2 === 1));
console.log(array.find(x => x > 10 && x < 20));
console.log(array.find(x => x === 45));
console.log(array.find(x => x === 46));


console.log(array.findIndex(x => x % 2 === 0));
console.log(array.findIndex(x => x % 2 === 1));
console.log(array.findIndex(x => x > 10 && x < 20));
console.log(array.findIndex(x => x === 45));
console.log(array.findIndex(x => x === 46));
