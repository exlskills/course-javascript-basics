function solve(params) {
  var count1,
    count2,
    count3,
    price,
    s = params[0],
    c1 = params[1],
    c2 = params[2],
    c3 = params[3],
    answer = 0;

  for (count1 = 0; count1 <= (s / c1) + 1; count1++) {
    for (count2 = 0; count2 <= (s / c2) + 1; count2++) {
      for (count3 = 0; count3 <= (s / c3) + 1; count3++) {
        price = (count1 * c1) + (count2 * c2) + (count3 * c3);
        if (price <= s) {
          // if (price >= answer) console.log(s - price, i1, i2, i3);
          answer = Math.max(answer, price);
        }
      }
    }
  }

  return answer;
}
