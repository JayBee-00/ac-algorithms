//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  var strOfDna = str.split("");
  var dnaPairs = [];
  for (var i=0; i<strOfDna.length; i++) {
     if (strOfDna[i] === "A") {
        dnaPairs.push(["A", "T"]);
      } else if (strOfDna[i] === "T") {
        dnaPairs.push(["T", "A"]);
      } else if (strOfDna[i] === "G"){
        dnaPairs.push(["G", "C"]);
      } else if  (strOfDna[i] === "C"){
        dnaPairs.push(["C", "G"]);
      }
    }
    return dnaPairs;
  }
  

pairElement("GCG");
console.log(pairElement("GCG"));

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

// Input: String
// Output: A nested array
// Step 1: Establsih two variables, one that gets set to the value of the str. Use the .splt() method to break apart the str into array items with each letter in the str inside an array.
// Step 2: Create a second var that gets the output of a nested array, currently a variable store and empty array.
// Step 3: Begin a for loop and loop through each item in the array. 
// Create a conditional statement that includes a if statement and 3 else if statements. The conditional statement checks to see if the current letter we are on in the loop is equal to one of the 4 letters. 
  // If true, push an array with the to strings into our variable storing the array
  // Return the parent array which is the output varaible
// Tools: .splt(""), .length, for loop, .push()