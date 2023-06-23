/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let string = s;

    try {
        string = s.split('').reverse().join('');
    } catch (message) {
        console.log('s.split is not a function')
    } finally {
        console.log(string)
    }
}


function main() {
    const s = eval(readLine());

    reverseString(s);
}

/* ============ Task ============

Complete the reverseString function; it has one parameter, s. You must perform the following actions:

1. Try to reverse string s using the split, reverse, and join methods.
2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
3. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
*/