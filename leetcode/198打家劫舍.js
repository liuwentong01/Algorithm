/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums == null || nums.length < 1) return 0;
  if(nums.length == 1) return nums[0];
  var res = [nums[0], Math.max(nums[0], nums[1])];
  for(let i = 2; i < nums.length; i++){
    res[i] = Math.max(nums[i]+res[i-2], res[i-1]);
  }
  return Math.max(...res);
};
