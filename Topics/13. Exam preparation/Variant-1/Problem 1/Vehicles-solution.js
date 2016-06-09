function solve(params) {
  var count1,
    count2,
    count3,
    all,
    s = +params[0],
    count = 0,
    c1 = 4,
    c2 = 10,
    c3 = 3;

  for (count1 = 0; count1 <= (s / c1) + 1; count1++) {
    for (count2 = 0; count2 <= (s / c2) + 1; count2++) {
      for (count3 = 0; count3 <= (s / c3) + 1; count3++) {
        all = (count1 * c1) + (count2 * c2) + (count3 * c3);
        if (all === s) {
          count++;
        }
      }
    }
  }
  return count;
}
