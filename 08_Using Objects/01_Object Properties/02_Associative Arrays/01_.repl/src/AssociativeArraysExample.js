function countCharacters(words) {
  let word, wordsCount = {};
  for (let i in words) {
    word = words[i].toLowerCase();
    if (!wordsCount[word]) {
      wordsCount[word] = 0;
    }
    wordsCount[word] += 1;
  }
  return wordsCount;
}
console.log(countCharacters("ABC ACB BAC BCA CAB CBA"));