/* Remove Element - Easy

*/

function removeElement(nums, val) {
    let k = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
          nums[k] = nums[i];
            k++; 
        }
      
    }
console.log(k)
    return k;
};

removeElement([3,2,2,3], 3);