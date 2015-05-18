Using Objects
=============

### Problem 1. Planar coordinates
*	Write functions for working with shapes in standard Planar coordinate system.
	*	**Points** are represented by coordinates P(X, Y)
	*	**Lines** are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
*	Calculate the distance between two points.
*	Check if three segment lines can form a triangle.

### Problem 2. Remove elements
*	Write a function that removes all elements with a given value.
*	Attach it to the array type.
*	Read about **prototype** and how to attach methods.

		var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
		arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];

### Problem 3. Deep copy
*	Write a function that makes a deep copy of an object.
*	The function should work for both primitive and reference types.

### Problem 4. Has property
*	Write a function that checks if a given object contains a given property.

		var obj  = …;
		var hasProp = hasProperty(obj, 'length');

### Problem 5. Youngest person
*	Write a function that finds the youngest person in a given array of people and prints his/hers full name
*	Each person has properties firstname, lastname and age.

	_Example:_
	
		var people = [
		  { firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
		  { firstname : 'Bay', lastname: 'Ivan', age: 81},… ];

### Problem 6. 
*	Write a function that groups an array of people by age, first or last name.
*	The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
*	Use function overloading (i.e. just one function)

	_Example:_
	
		var people = {…};
		var groupedByFname = group(people, 'firstname');
		var groupedByAge= group(people, 'age');
