function logItems(n) {
    for(let i =0; i <= n; i++) {
        for(let j =0; j <= n; j++) {
            console.log(i, j);
        }
    }
    //above is O(n2)
    for(let k =0; k <= n; k++) {
        console.log(k);
    }
    
    // above is O(n)
}
logItems(10);

/* Big O : Drop non-Dominants
 O(n2) + O(n)  this becomes O(n2 + n) so  n2 is dominant term and n is non dominant term 
 so just remove the non dominant term here
 it becomes Big O is O(n2)
*/