/*
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3,0,0,0] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

// Do not return anything, modify nums1 in-place instead.

var merge = function (nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (right < 0) {
      break;
    }

    if (left >= 0 && nums1[left] > nums2[right]) {
      nums1[i] = nums1[left--];
    } else {
      nums1[i] = nums2[right--];
    }
  }
  console.log(nums1)
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
