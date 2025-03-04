// Ques 1: Implement Linear Search in JavaScript
// Write a function to search "target" in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(n) runtime complexity.

// Input: nums = [4,5,6,7,0,1,2], target = 0  ----->>>>>  Output:  4
// Input: nums = [4,5,6,7,0,1,2], target = 3  ----->>>>>  Output: -1

const linearSearch = (nums , target) =>{
    for (let i = 0; i < nums.length; i++) {
        if( nums[i] === target ){
            return i;
        }
    }

    return -1;
}

//Time Complexity - o(n);
//Space Complexity - o(1);

console.log(linearSearch([4, 5, 6, 7, 0, 1, 2],0));
console.log(linearSearch([4, 5, 6, 7, 0, 1, 2],3));

// Global Linear Search

const globalLinearSearch = (nums, target) =>{
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target){
            result.push(i);
        }
    }

    if( result.length === 0 ) return -1;
    return result;
}

//Time Complexity - o(n);
//Space Complexity - o(n)

console.log(globalLinearSearch([4, 0, 5, 6, 7, 0, 1, 2], 0));
console.log(globalLinearSearch([4, 5, 6, 7, 0, 1, 2], 3));
