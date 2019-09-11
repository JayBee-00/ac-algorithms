// <!-- 
// 1) Add a script tag to the bottom of the page for your code.

$(document).ready(function(){
    
    // Declare all of your functions in your JS first
    function makeMadLib() {
        var noun = $("#noun").val();
        var adjective = $("#adjective").val();
        var personName = $("#person").val();
        $("#story").append("<p>" + personName + " really likes " + adjective + " " + "</p>")
    }
var userObject = {
    userObject.noun = noun
    userObject.adjective = adjective
    userObject.personName = personName
};

    $("#lib-button").on("click", function(){
    // Event listener to execute makeMadLib function
    });makeMadLib()



});


// 2) Add an event listener to the button so that it calls a makeMadLib function when clicked.
// 3)In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Laura really likes pink cucumbers.") -->

// <!-- Problem: We need to get values from the user to create a MadLib -->
// <!-- Step 1: User enters the information: a noun, adjective and a name, then clicks the button -->
// <!-- Step 2: We need to create an event listener so that when the user clicks it, we can execute a callback function - JQuery, use .on() for click event -->
// <!-- Step 3: Create a function that has 3 varibles, for each of the words the user types in. Each of those variables will have the value of what the user typed in. - use JQuery .val() method -->
// <!-- Step 4: Display the data in a sentence of the user. - JQuery .append() to the div in the HTML. But rhe concatinated sentence with the variables inside the append method parentheses -->
// <!-- Step 5: (BONUS) Create a variable and initialize it/set it equal to empty curly brackets. Add the 3 key value pairs with dot notation. -->



// <!-- Bonus: Make an object with the list elements as keys and the inputs as values.  -->