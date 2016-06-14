### Problem 6. Group people
*	Write a function that groups an array of people by age, first or last name.
*	The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
*	Use function overloading (i.e. just one function)

	_Example:_
	
		var people = {…};
		var groupedByFname = group(people, 'firstname');
		var groupedByAge= group(people, 'age');
