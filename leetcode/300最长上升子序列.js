/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if(nums.length < 1 || nums == null) return null;
  var res = new Array(nums.length).fill(0);
  res[0] = 1;
  for(let i = 1; i < nums.length; i++){
    for(j = 0; j < i; j++){
      if(nums[i] > nums[j] && res[i] <= res[j]){
        res[i] = res[j]+1;
      }
    }
    res[i] = res[i] ? res[i] : 1;
  }
 // console.log(res);
  return Math.max(...res);
};
lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]);
