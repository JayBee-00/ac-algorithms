/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

function dashInsert(num) {
	var output = "";
	var dashArray = num.toString().split("");
	for (var i=0; i<dashArray.length; i++) {
		if (dashArray[i] % 2 === 1 && dashArray[i + 1] % 2 === 1) {
			output = output + dashArray[i] + "-";
		} else {
			output = output + dashArray[i];
		}
	}
  return output
}
console.log(dashInsert(454793))
	

// Input: a number
// Output: a modified string from the input with dashes inbetween the odd numbers of that string
// Step 1: Create a variable to store the string 
// Step 2: Create a variable to store the transformation of the number t an array of numbers, by first turning into first, a string, and then to an array Tools: .toString().split("")
// 4982
// ["4", "9", "8", "2"]
// Step 3: Create a for loop to go through each of the numbers in the array
	//Need a conditional statement that will test if the number is odd && if the number after it is odd
		// If true, I want to add the number and the dash to the string
		// If false, I want to just add the number








// We start a for loop would loop through the items in the the array, using the modulas to identify numbers in the array that have a remainder of 1. 

















	
	if (dashArray[i] % 2 == 1)
	arr[i = arr[i]] + " "
}
return dashArray.join("")