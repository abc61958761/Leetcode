/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function () {
  const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  let temp = 0;

  while (left < right) {
    const leftH = height[left];
    const rightH = height[right];
    if (leftH > rightH) {
      temp = rightH * (right - left);
      right--;
    } else {
      temp = leftH * (right - left);
      left++;
    }

    if (temp > result) result = temp;
  }

  return result;
};

console.log(maxArea());
