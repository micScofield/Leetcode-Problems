const removeDuplicates = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i--, 1);
      console.log(nums);
    }
  }
  return nums.length;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
