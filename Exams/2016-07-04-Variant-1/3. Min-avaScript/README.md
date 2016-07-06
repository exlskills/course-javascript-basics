<img src="https://raw.githubusercontent.com/TelerikAcademy/Common/master/logos/telerik-header-logo.png" />

#### _Telerik Academy Season 2016-2017 / JavaScript Fundamentals Exam - 04 June 2016_

# Min-avaScript

## Description
Min-avaScript is a revolutionary styling language. It uses **selectors** to match content and binds **values** to **properties**. So what is so amazing? It sets priority for each binding, so that it is clear what overrides what.

Your task is to write a program which finds out which properties are used for each selector and outputs them like this:

```
SELECTOR { PROPERTY: VALUE; }
SELECTOR { PROPERTY: VALUE; }
...
```

Output lines should be **lexicographically sorted**.

### Rules of Min-avaScript

#### Selectors
- Selectors are consisted only of **small latin letters and numbers**
- `{` will be on the same line as selectors
- `}` will be alone on a line
- _Example:_

```css
h1 {
}
```

#### Bindings
- Bindings can be defined only inside selectors
- They have the form of `PROPERTY: VALUE;`
  - Properties will be consisted only of **small latin letters, numbers and dashes (`-`)**
  - Values can contain all symbols except for **whitespace, `:`, `;`, `{`, `}` and `@`**
  - Each binding will be on a separate line

#### Priority
- Default priority is `0`
  - It can be overridden using the `@NUMBER` directive
    - `NUMBER` will be **non-negative integer**
  - _Example:_

```css
div {
    color: red;                                   (priority 0)
}
@5
div {
    color: green;                                 (priority 5)
}
```

- Priority can be overridden for a single binding
  - _Example:_

```css
span {
    font-size: 42px; @7                           (priority 7)
}
```

- Priority can be set for a single selector
  - Or changed inside it
  - _Example:_

```css
li { @3
    text-decoration: underline;                   (priority 3)
    @8
    color: blue;                                  (priority 8)
}
```

- Example using all of the above:

```css
div {
    color: black;                                 (priority 0)
}
@2
a { @8
    border: solid 1px;                            (priority 8)
    @6
    opacity: 0.5;                                 (priority 6)
}
span {
    font-family: "Impact,Charcoal,sans-serif";    (priority 2)
}
```

- If for one selector a property is defined more than once the binding with higher priority is used
  - _Example:_ `divs` will be `green`

```css
div {
    color: red; @1
    color: green; @3
}
div {
    color: yellow; @2
}
```

- In case of properties with same priorities the first one overrides the others
  - _Example:_ `blue` is preferred over `white`

```css
span {
    color: blue;
}
span {
    color: white;
}
```

## Input
- Input will be consisted of an array containing lines of Min-avaScript
  - Each line will be either selector (opening or closing), binding or property override
  - There will not be empty lines
- _Note:_ There can be any amount of whitespace around `:`, `;`, `{`, `}` and `@`, in the beginning or the end of each line
- _The input will always be valid and in the described format. There is no need to validate it explicitly._

## Output
- Output each used property on a separate line in the format:

```
SELECTOR { PROPERTY: VALUE; }
```

## Constraints
- **Time limit: 0.3 s**
- **Memory limit: 16 MB**

## Sample tests

### Sample Test 1

#### Input
```js
[
    'li {',
    '    font-size: 2px;',
    '    font-weight: bold;',
    '}',
    'div {',
    '    font-size: 20px; @5',
    '}',
    'div { @4',
    '    font-size: 17px;',
    '}',
    '@19',
    'li {',
    '    font-size: 42px;',
    '    color: red; @9',
    '}'
]
```

#### Output
```
div { font-size: 20px; }
li { color: red; }
li { font-size: 42px; }
li { font-weight: bold; }
```

### Sample Test 2

#### Input
```js
[
	'enthusiasm { @5',
	'  ap-percept-ion:buying;',
	'  @2',
	'  houston:pZ!X;',
	'  chute-s:accelerometers;',
	'}',
	'@9',
	'molar { @6',
	'  @15',
	'  houston:E!NVDt; @7',
	'  houston:u#It#;',
	'  ap-percept-ion:Dog; @15',
	'  chute-s:advises;',
	'}',
	'oodles {',
	'  @13',
	'  chute-s:perish;',
	'}',
	'molar {',
	'  r-ega-rding:4lXPE;',
	'  r-ega-rding:digesting;',
	'  houston:xZAEIh#S;',
	'  chute-s:benched;',
	'  @3',
	'  ap-percept-ion:gssO%FDd;',
	'}',
	'enthusiasm { @15',
	'  houston:NkR99XZ;',
	'  ap-percept-ion:aPQG;',
	'}'
]
```

#### Output
```
enthusiasm { ap-percept-ion: aPQG; }
enthusiasm { chute-s: accelerometers; }
enthusiasm { houston: NkR99XZ; }
molar { ap-percept-ion: Dog; }
molar { chute-s: advises; }
molar { houston: u#It#; }
molar { r-ega-rding: 4lXPE; }
oodles { chute-s: perish; }
```
