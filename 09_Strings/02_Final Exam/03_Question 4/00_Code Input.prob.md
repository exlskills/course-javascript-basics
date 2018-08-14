>>Complete the function <code>parseTags</code> so that it satisfies the following condition:
<p>Changes the given text as show below: <br/>
For example:<br/>
<code>parseTags("(upcase)text(upcase)")</code> should return "TEXT"<br/>
<code>parseTags("(lowcase)Text(lowcase)")</code> should return "text"<br/>
<code>parseTags("(upcase)text(/upcase)(lowcase)Text(lowcase)")</code> should return "TEXTtext"</p><<

= #!exl::repl('index.prob.repl.yaml')

||Use string properties and methods such as substring to solve this question ||
