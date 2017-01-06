const array = [1, 42, 7, 9, 13, 10, 20, 35, 45, -7, -3, 0, 4, -1, 15];
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

Array.prototype.forEach = function(func) {
  const len = this.length;
  for(let i = 0; i < len; i += 1) {
    func(this[i], i, this);
  }
};

array
  .map((_, i) => i + 1)
  .scanLeft((x, y) => x + y)
  .filter(x => x % 2 === 1)
  .map(x => x * x)
  .forEach(x => console.log(x));

let accum = 0;
for(let i = 0; i < array.length; i += 1) {
  accum += i + 1;
  if(accum % 2 === 1) {
    console.log(accum * accum);
  }
}
