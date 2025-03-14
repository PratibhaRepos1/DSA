// remove the duplicate items from an array

function removeDuplicates(nums) {
    if(nums.length === 0) return 0;

    let k = 1;
    for(let i=1; i<nums.length; i++) {
       // console.log("i:", nums[i]);
       // console.log("i-1:", nums[i-1]);
        if(nums[i] !== nums[i-1]) {
            nums[k] = nums[i];
            console.log("k:", nums[k]);
            k++;
        }
    }
    
    return k;

}

nums = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums));
console.log(nums);

mytext = ['p', 'r', 'a'];
console.log(mytext);
mytext[1] = 'o';
console.log(mytext);
mytext = ['p'];
console.log(mytext);