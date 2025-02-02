/* create a function that reverse a string: 'ABCD' should be 'DCBA' */

function reverse(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good'
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--) {
        backwards.push(str[i])
    } 
    ///console.log(backwards);
    return backwards.join('');

}

//another way 3
function reverse2(str) {

    return str.split('').reverse().join('');
}

//another way 3
const reverse3 = str => str.split('').reverse().join('');


console.log(reverse3('ABCD'));