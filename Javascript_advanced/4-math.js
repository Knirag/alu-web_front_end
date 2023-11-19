// Define the divideBy function
function divideBy(firstNumber) {
    // Return a function that takes the secondNumber and returns its division by firstNumber
    return function(secondNumber) {
      return secondNumber / firstNumber;
    };
  }
  
  // Define the addBy function
  function addBy(firstNumber) {
    // Return a function that takes the secondNumber and returns the sum of the two numbers
    return function(secondNumber) {
      return firstNumber + secondNumber;
    };
  }
  
  // Create closures using the functions divideBy and addBy
  const addBy100 = addBy(100);
  const addBy1000 = addBy(1000);
  const divideBy10 = divideBy(10);
  const divideBy100 = divideBy(100);
  
  // Test the closures
  console.log(addBy100(20));      // Should display 120
  console.log(divideBy10(20));     // Should display 2
  console.log(divideBy100(200));   // Should display 2
  console.log(addBy1000(20));      // Should display 1020

  