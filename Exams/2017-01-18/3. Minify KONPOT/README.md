<img src="https://raw.githubusercontent.com/TelerikAcademy/Common/master/logos/telerik-header-logo.png" />

# Minify KONPOT

## Description
KONPOT is the new JSON! You might be wandering what is KONPOT (or JSON for that matter). Once upon a time there was a kon in a pot who really liked JSON and wanted to make it better, so he invented KONPOT.

A KONPOT string is consisted of many identifiers
- identifiers will be consisted of latin letters, numbers and underscores (`_`)
- identifiers will be separated by `;`
Some of the identifiers may be inside scopes (`{}`)
- curly braces also can separate identifiers

_Example:_
```
hello;
{this; is
 ; an;;;example;
}
of;
{
KONPOT;
{
Some_numbers;
42;5;3}
_}
```

Now it would be very useful to be able to minify KONPOT strings. You could:
- Remove unneeded `;`
- Remove empty scopes
- Remove all whitespace
- Names of identifiers can be shortened
  - different identifiers should have different shortened name

Write a program which finds the minimal possible length of a given KONPOT string.

## Input
- The KONPOT string is given as an array of strings

## Output
- You should output a single line containing a number - the length of the minified KONPOT string

## Constraints
- There will be at most 4000 identifiers
- KONPOT string will be valid KONPOT

## Sample tests

### Sample test 1

#### Input
```
[
	'hello;',
	'{this; is',
	' ; an;;;example;',
	'}',
	'of;',
	'{',
	'KONPOT;',
	'{',
	'Some_numbers;',
	'42;5;3}',
	'_}'
]
```

#### Output
```
24
```

### Sample test 2

#### Input
```
[
	'; ;;;jGefn4E5Pvq    ;;  ;  ; ;',
	'tQRZ5MMj26Ov { {    {;    ;;    5OVyKBFu7o1T2 ;szDVN2dWhex1V;1gDdNdANG2',
	';    ;    ;  ;; jGefn4E5Pvq   ;;    ;p0OWoVFZ8c;;}    ;  ; ;',
	'5OVyKBFu7o1T2   ;  szDVN2dWhex1V ;    ;tQRZ5MMj26Ov    ;  ;   };',
	'1gDdNdANG2    ;   p0OWoVFZ8c ;  jGefn4E5Pvq ;; {;Z9n;;',
	';1gDdNdANG2;   ;;    ;   ;jGefn4E5Pvq    ;; ;;p0OWoVFZ8c;;    ;;',
	';',
	'tQRZ5MMj26Ov  ;',
	'{    ;szDVN2dWhex1V;   ;',
	';   jGefn4E5Pvq   ;  ;  } }}'
]
```

#### Output
```
44
```

### Sample test 3

#### Input
```
[
	'1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12; 13; 14;',
	'15; 16; 17; 18; 19; 20; 21; 22; 23; 24; 25; 26; 27; 28;',
	'29; 30; 31; 32; 33; 34; 35; 36; 37; 38; 39; 40; 41; 42;',
	'43; 44; 45; 46; 47; 48; 49; 50; 51; 52; 53; 54; 55; 56;',
	'57; 58; 59; 60; 61; 62; 63; 64; 65; 66; 67; 68; 69; 70;'
]
```

#### Output
```
146
```
