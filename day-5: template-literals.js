// @language=javascript

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let res = [];
    let x = (expressions[1] + Math.sqrt(expressions[1]**2 - 16 * expressions[0])) / 4;
    let y = (expressions[1] - Math.sqrt(expressions[1]**2 - 16 * expressions[0])) / 4;
    res.push(x, y);
    return res.sort();
}


function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}


/* ============ Task ============

The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

Complete the function in the editor so that it does the following:

1. Finds the initial values of  and  by plugging the area and perimeter values into the formula:
S = (P +- √(P**2 - 16 * A)) / 4

where A is the rectangle's area and P is its perimeter.
2. Creates an array consisting of s1 and s2 and sorts it in ascending order.
3. Returns the sorted array.

*/