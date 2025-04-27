/* 
1. Two Sum - Easy
Given an array of integers nums and an integer target. return indices of the two numbers such that they add up to target
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


*/
// using the two pointer techniques like left and right - but not useful buz no input in sorted array
function twoSum(nums, target){
    let left = 0;
    let right = nums.length - 1;
    let current_sum = 0;
    while(left < right) {
         current_sum = nums[left] + nums[right];
        if(current_sum === target){
            return [left,right];
        } else if(current_sum < target) {
            left ++;
        } else {
            right --;
        }

    }

}

console.log(twoSum([3,2,4], 6));

// using the two pointer techniques like slow and fast 
function twoSum1(nums, target) {
    let result = [];
    for(let i =0; i< nums.length; i++) {
        if((nums[i] + nums[i+1]) === target) {
          
            result.push(i);
            result.push(i+1);
        }
    }
 
    return result;
}
//console.log(twoSum1([2,7,11,15], 9));