>>Consider the following code segment:

```
function containsArt(strOne, strTwo, strThree){
  var str = strOne + strTwo + strThree;
  return str.indexOf("art") != -1;
}
```

The method `containsArt()` returns true if at least one of the three strings (strOne, strTwo or strThree) contains the substring "art". Otherwise, the method should return false. Which of the following method call demonstrates that the method DOES NOT work as intended?<<

( ) `containsArt("start", "article", "Bart")` {{Incorrect because this statement will return true as "start" has the substring "art", thus working as intended.}}
(x) `containsArt("rattrap", "similar", "today")` {{Correct because this statement will return true even though none of the individual strings have the substring "art". This statement returns true as the "ar" in similar is concatenated to the 't' in today, causing the substring "art".}}
( ) `containsArt("harm", "chortle", "crowbar")` {{Incorrect because this statement will return false as none of the individual strings have the substring "art", thus working as intended.}}
( ) `containsArt("matriculate", "carat", "arbitrary")` {{Incorrect because this statement will return false as none of the individual strings have the substring "art", thus working as intended.}}
( ) `containsArt("darkroom", "cartoon", "articulate")` {{Incorrect because this statement will return true as "cartoon" has the substring "art", thus working as intended.}}

||Concatenating the strings together could create an unwanted substring "art".||