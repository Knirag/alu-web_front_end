// Define a closure function named welcomeMessage
function welcomeMessage(fullName) {
    return () => {
      alert("Welcome " + fullName);
    };
  }
  
  // Create three variables with calls to welcomeMessage
  const guillaume = welcomeMessage("Guillaume");
  const alex = welcomeMessage("Alex");
  const fred = welcomeMessage("Fred");
  
  // Test the functions
  guillaume();
  alex();
  fred();
  