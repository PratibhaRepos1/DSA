const strings = ['a', 'b', 'c', 'd'];

strings[2];

strings.push('e'); //O(1)
console.log(strings);

//pop : remove last items
strings.pop(); //O(1)
console.log(strings);

//add item at begining
strings.unshift('x'); //O(n)
console.log(strings);

//splice
strings.splice(2, 0, 'alien'); //O(n)
console.log(strings)
