function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function countPrimeNumbers() {
    const start = performance.now();
  
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
  
    const end = performance.now();
    const executionTime = end - start;
  
    return executionTime;
  }
  
  // Execute the function countPrimeNumbers 100 times
  function runCountPrimeNumbersMultipleTimes() {
    const totalStart = performance.now();
  
    for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
    }
  
    const totalEnd = performance.now();
    const totalTime = totalEnd - totalStart;
  
    console.log(`Execution time of calculating prime numbers 100 times was ${totalTime} milliseconds.`);
  }
  
  // Call the function to run countPrimeNumbers 100 times and log the total time
  runCountPrimeNumbersMultipleTimes();
  