/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

function majorityElem(arr) {
    const freq = {}

    for (let i of arr) {
        freq[i] = ++freq[i] || 1
    }

    const len = arr.length

    for (let i in freq) {
        if (freq[i] > len / 2) return i
    }
}

console.log(majorityElem([3,2,3]))
console.log(majorityElem([2,2,1,1,1,2,2]))