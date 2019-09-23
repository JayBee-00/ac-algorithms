/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

function swapCase(str) {
	var changeCase = "";
	var userStr = str.split("");
	for (var i=0; i<userStr.length; i++){
			if (userStr[i] === userStr[i].toLowerCase()) {
				changeCase = changeCase + userStr[i].toUpperCase();
		} else {
			changeCase = changeCase + userStr[i].toLowerCase();
		}
	}
  return changeCase;
}
var result = swapCase("Oh Hello!!");
console.log(result)

// Input: String
// Output: String
// We want to declare a var and store the output outside of the for loop as the output of the function.
// We want to declare a second var and store it outside the for loop as the str broken up into an array.
// Turn string into an array using the .split() method and making the deliminator a single character ("")
// Loop through all the items in the array (.length) and use a conditional statement to test if the item is upper case or lower case using the methods .toLowerCase() and .toUpperCase. 
//when looking for lower case letters:
	// If true, add that lketter to our output string once we have transformed it to upper case
	// If false, add that letter to our output string once we have transformed it to lower case
// Return the function

