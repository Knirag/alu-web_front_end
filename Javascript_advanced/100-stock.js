// Create a variable named stock
const stock = {
    macbook: 2,
    iphone: 4
  };
  
  // Write a new function named processPayment
  function processPayment(itemName) {
    stock[itemName.toLowerCase()] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
  }
  
  // Write a new function named processError
  function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log('Payment is not being processed');
  }
  
  // Write a new function named processOrder
  function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    if (stock[itemName.toLowerCase()] > 0) {
      callbackPayment(itemName);
    } else {
      callbackError(itemName);
    }
  }
  
  // Prompt the user for the item to purchase and process the order
  const userItem = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
  processOrder(userItem, processPayment, processError);
  