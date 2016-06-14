### Problem 2. HTML binding
*	Write a function that puts the value of an object into the content/attributes of HTML tags.
	*	Add the function to the **String.prototype**

_Example 1:_

**input**

		var str = '<div data-bind-content="name"></div>';
		str.bind(str, {name: 'Steven'});

**output**

		<div data-bind-content="name">Steven</div>

_Example 2:_

**input**
		
		var bindingString = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
		str.bind(str, {name: 'Elena', link: 'http://telerikacademy.com'});

**output**

		<a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</а>
