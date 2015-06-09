function a(i) {
  return [1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786][i[0]] / 2;
}

var fs = require('fs');

var testId = 1;
for (var i = 1; i < 12; i++) {
  if (i === 7) continue;
  if (i < 10) {
    fs.writeFile('./Tests/test.00' + testId + '.in.txt', i);
    fs.writeFile('./Tests/test.00' + testId + '.out.txt', a([i]));
  } else {
    fs.writeFile('./Tests/test.0' + testId + '.in.txt', i);
    fs.writeFile('./Tests/test.0' + testId + '.out.txt', a([i]));
  }

  testId++;
}
