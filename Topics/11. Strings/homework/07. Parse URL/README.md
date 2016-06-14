### Problem 7. Parse URL
*	Write a script that parses an URL address given in the format: `[protocol]://[server]/[resource]`
	and extracts from it the `[protocol]`, `[server]` and `[resource]` elements.
*	Return the elements in a JSON object.

_Example:_ 

|                 URL                  |                                     result                                     |
|:------------------------------------:|:----------------------------------------------------------------------------------------:|
| `http://telerikacademy.com/Courses/Courses/Details/239` |  { protocol: `http`, <br> server: `telerikacademy.com` <br> resource: `/Courses/Courses/Details/239` |

