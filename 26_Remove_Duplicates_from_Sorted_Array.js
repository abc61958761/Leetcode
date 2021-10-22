/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * 
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 */
 var removeDuplicates = function(nums) {
    const temp = new Set();
    let i = 0;
    while(i < nums.length) {
        if (!temp.has(nums[i])) {
            nums[temp.size] = nums[i];
            temp.add(nums[i]);
            i++;
        } else {
            nums.splice(i, 1);
        }
    }
    return nums;
};
const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));
