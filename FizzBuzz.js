/*
modulus operator
*/

function fizzBuzz(num) {
    for(let i=1; i<=num; i++) {
        //more short way for i % 3 === 0 && i % 5 === 0 >>>> i % 15 === 0
        if (i % 15 === 0) console.log('FizzBuzz');
        else if(i % 3 === 0) console.log('Fizz');
        else if(i % 5 === 0) console.log('Bizz');
        else console.log(i);
       
    }
}

fizzBuzz(30);