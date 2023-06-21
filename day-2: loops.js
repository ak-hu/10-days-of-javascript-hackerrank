/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let arr = [];
    for (let i = 0; i < s.length; i++) {
      if(vowels.includes(s[i])) {
        console.log(s[i])
      } else {
        arr.push(s[i])
      }
    }
    arr.map(item => console.log(item))
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}


/* ============ Task ============

1. First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.

2. Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.

*/