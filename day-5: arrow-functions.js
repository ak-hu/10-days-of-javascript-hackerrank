// @language=javascript

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    const res = nums.map(num => num % 2 === 0 ? num * 2 : num * 3)
    
    return res;
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}

/* ============ Task ============

Complete the function in the editor. It has one parameter: an array, nums. It must iterate through the array performing one of the following actions on each element:

— If the element is even, multiply the element by 2.
— If the element is odd, multiply the element by 3.

The function must then return the modified array.

*/