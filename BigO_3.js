
function logItems(n) {
    for(let i =0; i <= n; i++) {
        for(let j =0; j <= n; j++) {
            console.log(i, j);
        }
    }
    
}
logItems(10);

/*
O(n2) -> O of n square
no of operations count is
n * n = n2
that's why we get our big O here is O(n2)
*/