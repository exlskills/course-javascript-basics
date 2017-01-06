const array = [1, 42, 7, 9, 13, 10, 20, 35, 45, -7, -3, 0, 4, -1, 15];

Array.prototype.filter = function (isOk) {
  let filteredArray = [];
  const len = this.length;
  for (let i = 0; i < len; i += 1) {
    if(isOk(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

Array.prototype.map = function (transform) {
  let mappedArray = [];
  const len = this.length;
  for (let i = 0; i < len; i += 1) {
    mappedArray.push(transform(this[i], i, this));
  }
  return mappedArray;
};

Array.prototype.reduce = function(aggregate, initial) {
  const len = this.length;
  let startIndex = 0;
  if(typeof initial === 'undefined') {
    initial = this[0];
    startIndex = 1;
  }
  for(let i = startIndex; i < len; i += 1) {
    initial = aggregate(initial, this[i], i, this);
  }
  return initial;
};

Array.prototype.reduceRight = function(aggregate, initial) {
  const len = this.length;
  let startIndex = len - 1;
  if(typeof initial === 'undefined') {
    initial = this[0];
    startIndex = len - 2;
  }
  for(let i = startIndex; i >= 0; i -= 1) {
    initial = aggregate(initial, this[i], i, this);
  }
  return initial;
};

Array.prototype.scanLeft = function(aggregate, initial) {
  const len = this.length;
  let array = [];
  let startIndex = 0;
  if(typeof initial === 'undefined') {
    initial = this[0];
    startIndex = 1;
  }
  array.push(initial);
  for(let i = startIndex; i < len; i += 1) {
    initial = aggregate(initial, this[i], i, this);
    array.push(initial);
  }
  return array;
};

console.log(array.filter(x => x % 2 === 1));
console.log(array.map((x, i) => x * i));

function rotate(x, i, arr) {
  if(i + 1 === arr.length) {
    return arr[0];
  }
  return arr[i + 1];
}

const rotated = array.map(rotate);
console.log(rotated);

console.log(array.reduce((x, y) => x + y, ''));

console.log([1, 2, 3].reduceRight((x, y) => x + ' ' + y, ''));
console.log([1,2,3,4,5,6].scanLeft((x, y) => x + y, 0));
