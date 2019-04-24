module.exports = function(limit) {
  let sum = 0;
  function isPrime(value) {
    for (let i = 2; i < value; i++) {
      if (value % i == 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
};
