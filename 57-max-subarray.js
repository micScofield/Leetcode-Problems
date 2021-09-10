// Kadane's algorithm
function maxSubArray(nums) {
    let max_so_far = nums[0]
    let max_ending_here = 0

    for (let i = 0; i < nums.length; i++) {
        max_ending_here += nums[i]
        if (max_so_far < max_ending_here) max_so_far = max_ending_here

        if (max_ending_here < 0) max_ending_here = 0
    }

    return max_so_far
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
// console.log(maxSubArray([5,4,-1,7,8])) // 23
console.log(maxSubArray([-2,-1])) // -1