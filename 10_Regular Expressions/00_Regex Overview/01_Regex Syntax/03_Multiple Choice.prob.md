>>Which of the following regex literals match strings that end with a 'T'?<<

( ) `const literalRegex = /t$/g;` {{Incorrect because this regex matches strings that end with a lowercase 't', not an uppercase.}}
( ) `const literalRegex = t$/g;` {{Incorrect because the slash before 't' is missing.}}
( ) `const literalRegex = T$/g;` {{Incorrect because the slash before 'T' is missing.}}
(x) `const literalRegex = /T$/g;` {{Correct because this statement will match strings that end with a uppercase 'T'.}}
( ) `const literalRegex = /T/g;` {{Incorrect because this regex matches strings that start with the uppercase 'T'.}}

||The string has to end with an uppercase 'T', not a lowercase 't'.||