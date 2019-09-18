//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.

function findLongestWord(str) {
  var longestWord = 0
  var sentenceArray = str.split(' ')
  for (var i=0; i<sentenceArray.length; i++){
    if (sentenceArray[i].length > longestWord){
      longestWord = sentenceArray[i].length;
    }
  }
  return longestWord
  }

var longestWordResult = findLongestWord("What is the average airspeed velocity of an unladen swallow")
console.log(longestWordResult)



// Input: a String, sentence
// Output: a number
// We need to look at the length of each word (will give you the number of chafacters) and we need to compare the length of each word with the others. If a word is longer than the one that comes before it, we will replace the value of it's length
// Tools: a variable to store the length of the longest string
// Use .split(" ") to change astring into an array
// For loop allows us to run through the words, a conditional statement (placed inside the for loop) to check to see if the next word is longer than the length stored in the varaible.
// If the word that comes next is longer than the word that came before it, if true I want to replace the value of the varaible with the length of the longer word.


var longestWord = 0
// if (["string"].length > ["string"].length) {
var longestWord = 0  
for (var i=0; i>0, i++)
//   if 


//   else
// }
// return longestWord
words need to be the [i]