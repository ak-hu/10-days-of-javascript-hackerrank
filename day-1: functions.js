// @language=javascript

/*
 * Create the function factorial here
 */
const factorial = (n) => {
    let prod = 1;
    for (let i = 1; i < n + 1; i++) {
        prod *= i;
    }
    return prod;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}

/* ============ Task ============

Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial). 

*/