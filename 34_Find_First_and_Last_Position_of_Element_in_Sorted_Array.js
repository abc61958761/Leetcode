/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 */
 var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    const result = [-1, -1];
    while(left <= right) {
        if (nums[left] !== target) {
            left++;
        } else {
            result[0] = left;
        }

        if (nums[right] !== target) {
            right--;
        } else {
            result[1] = right;
        }

        if (result[0] !== -1 && result[1] !== -1) break;
    }
    return result;
};
const nums = []
const target = 0
console.log(searchRange(nums, target));

//[0,0]