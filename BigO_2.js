function logItems(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
    for(let j = 0; j < n; j++) {
        console.log(j);
    }
}
logItems(10);

/* This Big O: Drop Constants
n + n = 2n
make sense O(2n) operations
now drop the constants, here 2 is constants
so we can say the above code is O(n)
*/
