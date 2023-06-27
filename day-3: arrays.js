// @language=javascript

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let largest = Math.max(...nums);
    let res = nums.sort((a, b) => a > b ? 1 : -1).filter(item => item !== largest);
    return Math.max(...res)
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}


