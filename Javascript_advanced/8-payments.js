// Define the processPayment function
function processPayment(amount) {
    console.log(`Collecting payment of ${amount}`);
  }
  
  // Define the processOrder function
  function processOrder(orderId, amount) {
    console.log(`${orderId} is being processed`);
    processPayment(amount);
    console.log(`${orderId} has been fully processed`);
  }
  
  // Main part of the code
  console.log("Processing orders");
  
  // Call processOrder with 12321 and 10.99
  processOrder(12321, 10.99);
  
  // Call processOrder with 12322 and 12.99
  processOrder(12322, 12.99);
  
  // Call processOrder with 12323 and 15.0
  processOrder(12323, 15.0);
  
  // Logs to the console All the orders have been processed
  console.log("All the orders have been processed");
  