<img src="https://raw.githubusercontent.com/TelerikAcademy/Common/master/logos/telerik-header-logo.png" />

#### _Telerik Academy Season 2016-2017 / JavaScript Fundamentals Exam - 05 June 2016_

# Otp-adaScript

## Description
Otp-adaScript is a revolutionary language for defining enumerations. Each enumeration has a name and contains at least one name. Each name has a value - **a non-negative integer**.

Your task is to write a program which finds out the value of each constant:

```
NAME = VALUE :: ENUMERATION;
NAME = VALUE :: ENUMERATION;
...
```

Output lines should be **lexicographically sorted**.

### Rules of Otp-adaScript

#### Defining enumerations
- Syntax:

```
<Colors>
	BLACK;
	RED;
	GREEN;
	BLUE;
	WHITE = 7;
</>
```

- `<Colors>` - Indicates definition of enumeration named `Colors`
- `</>` indicates end of definition
- `WHITE = 7;` defines a constant named `WHITE` with value of `7`
- `BLACK;` defines a constant named `BLACK`, value is **the smallest unused non-negative integer inside the enumeration**
  - Values inside enumerations **are different from each other**

- _Examples:_

```
<Colors>
	BLACK;              ( = 0 )
	RED;                ( = 1 )
	GREEN;              ( = 2 )
	BLUE;               ( = 3 )
	WHITE = 7;          ( = 7 )
</>
```

```
<Fruit>
	Apple;              ( = 0 )
	Banana;             ( = 1 )
	Pineapple;          ( = 2 )
</>
<Vegetable>
	Cucumber = 1;       ( = 1 )
	Cabage;             ( = 0 )
</>
```

#### Shared enumerations
- Syntax (the same with `@`):

```
<@Colors>
	BLACK;
	RED;
	GREEN;
	BLUE;
	WHITE = 7;
</>
```

- They work in exactly the same way
  - Values inside them **are different from each other**
  - Values inside them **are different from values inside other shared enumerations**

- _Examples:_

```
<@Fruit>
	Apple;              ( = 0 )
	Banana;             ( = 2 )
	Pineapple;          ( = 3 )
</>
<@Vegetable>
	Cucumber = 1;       ( = 1 )
	Cabage;             ( = 4 )
</>
```

```
<@Languages>
	CSharp;             ( = 0 )
	JavaScript;         ( = 1 )
	Haskell = 42;       ( = 42 )
	Rust = 4;           ( = 4 )
	CPP;                ( = 3 )
</>
<Result>
	Failed;             ( = 0 )
	Passed;             ( = 1 )
	Excellence;         ( = 2 )
</>
<@Insects>
	Ant;                ( = 5 )
	Mosquito = 2;       ( = 2 )
</>
```

## Input
- Input will be consisted of an array containing lines of Otp-adaScript
  - Each line will be either beginning or ending of declaration or constant definition
  - There will not be empty lines
- _Note:_ There can be any amount of whitespace around `=` and `;`, in the beginning or the end of each line
- _The input will always be valid and in the described format. There is no need to validate it explicitly._

## Output
- Output each constant with its value in the format:

```
NAME = VALUE :: ENUM;
```

## Constraints
- Enumeration and constant names are consisted only of latin letters and numbers
- All enumerations and constants will have different names
- **Time limit: 0.3 s**
- **Memory limit: 16 MB**

## Sample tests

### Sample Test 1

#### Input
```js
[
	'<Fruit>',
	'  Apple;',
	'  Banana;',
	'  Pineapple;',
	'</>',
	'<Vegetable>',
	'  Cucumber = 1;',
	'  Cabage;',
	'</>'
]
```

#### Output
```
Apple = 0 :: Fruit;
Banana = 1 :: Fruit;
Cabage = 0 :: Vegetable;
Cucumber = 1 :: Vegetable;
Pineapple = 2 :: Fruit;
```

### Sample Test 2

#### Input
```js
[
	'<@Languages>',
	'	CSharp;',
	'	JavaScript;',
	'	Haskell = 42;',
	'	Rust = 4;',
	'	CPP;',
	'</>',
	'<Result>',
	'	Failed;',
	'	Passed;',
	'	Excellence;',
	'</>',
	'<@Insects>',
	'	Ant;',
	'	Mosquito = 2;',
	'</>'
]
```

#### Output
```
Ant = 5 :: Insects;
CPP = 3 :: Languages;
CSharp = 0 :: Languages;
Excellence = 2 :: Result;
Failed = 0 :: Result;
Haskell = 42 :: Languages;
JavaScript = 1 :: Languages;
Mosquito = 2 :: Insects;
Passed = 1 :: Result;
Rust = 4 :: Languages;
```
