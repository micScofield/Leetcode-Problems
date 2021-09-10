//Given an integer n, return the number of trailing zeroes in n!

// Two Approaches

function factorialTrailingZeroes(n) {
  if (n < 0) return -1;

  let count = 0;

  // Keep dividing n by powers of 5 and update count
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) count += Math.floor(n / i);

  return count;
}

console.log(factorialTrailingZeroes(3)); // 0 (6)
//console.log(factorialTrailingZeroes(5)); // 1 (120)
//console.log(factorialTrailingZeroes(0)); // 0 (1)
//console.log(factorialTrailingZeroes(10)); // 2
//console.log(factorialTrailingZeroes(100)); // 24

// Explaination
/*
if we count 5s in prime factors, we are done. How to count the total number of 5s in prime factors of n!? A simple way is to calculate floor(n/5). For example, 7! has one 5, 10! has two 5s. It is not done yet, there is one more thing to consider. Numbers like 25, 125, etc have more than one 5. For example, if we consider 28! we get one extra 5 and the number of 0s becomes 6. Handling this is simple, first, divide n by 5 and remove all single 5s, then divide by 25 to remove extra 5s, and so on. Following is the summarized formula for counting trailing 0s.
Trailing 0s in n! = Count of 5s in prime factors of n!
                  = floor(n/5) + floor(n/25) + floor(n/125) + ...
*/

// Approach 2


function factorialTrailingZeroes2(n) {

    function innerHelper(num) {
        if (num === 0) return 1
        return num * innerHelper(num-1)
    }

    let fact = innerHelper(n)

    // now count the trailing zeroes of the number
    let result = 0
    while (fact % 10 === 0) {
        result++
        fact = fact/10
    }
    return result
}

console.log(factorialTrailingZeroes2(10))
