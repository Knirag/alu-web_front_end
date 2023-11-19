// Create a global variable named globalVariable with the value Welcome
var globalVariable = 'Welcome';

// Create a function outer
function outer() {
    // Alert the content of the variable globalVariable
    alert(globalVariable);

    // Create a variable named course with the value Holberton
    var course = 'Holberton';

    // Create a function inner
    function inner() {
        // Alert the content of the variables globalVariable and course (concatenated)
        alert(globalVariable + ' ' + course);

        // Create a variable named exclamation with the value !
        var exclamation = '!';

        // Create a function inception
        function inception() {
            // Alert the content of the variables globalVariable, course, and exclamation (concatenated)
            alert(globalVariable + ' ' + course + exclamation);
        }

        // Call the function inception
        inception();
    }

    // Call the function inner
    inner();
}

// Call the function outer in the main code
outer();

// Call the function inner within outer
// (This will display the second popup with the text Welcome Holberton)
inner();

// Call the function inception within inner
// (This will display the third popup with the text Welcome Holberton!)
inception();
