// Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

//Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

let twoSum = function(arr, target) {
    let left = 0
    let right = arr.length

    while (left < right) {
        const total = arr[left] + arr[right]
        if (total === target) return [+left+1, +right+1]

        if (total < target) left++
        else right--
    }
}

console.log(twoSum([2,3,4], 6)) // [1,3] // indices are 1 based
console.log(twoSum([-1, 0], -1)) // [1,3] // indices are 1 based