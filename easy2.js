// Example1:                                             Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example2:											Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]

function checkForPrime(numberArray) {
    let primeNumbers = [];
    // function checks if number is a prime number or not
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    // loop throught the passed array to find primes and pus them to new arrat
    for (let i = 0; i < numberArray.length; i++) {
      if (isPrime(numberArray[i])) {
        primeNumbers.push(numberArray[i]);
      }
    }
    return primeNumbers;
  }
  console.log(checkForPrime([ 2, 8, 12, 16, 19, 47,]));













