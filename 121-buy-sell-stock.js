let maxProfit = function(prices) {
    let max_so_far = 0
    let min = prices[0]

    for (let i = 1; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i]
        }
        if (prices[i] - min > max_so_far) {
            max_so_far = prices[i] - min
        }
    }
    return max_so_far
}

console.log(maxProfit([7,6,4,3,1])) // 0
console.log(maxProfit([2,4,1])) // 2
console.log(maxProfit([7,1,5,3,6,4])) // 6-1 = 5
console.log(maxProfit([1])) // 6-1 = 5
