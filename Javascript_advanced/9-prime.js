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
  
    console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
  
    return count;
  }
  
  // Call the function
  countPrimeNumbers();
  