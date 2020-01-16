const hasAllUniqueCharacters = require('./ex01');
const reverse = require('./ex02');
const anagram = require('./ex03');


console.log(hasAllUniqueCharacters("Hello, World !"));
// => false
console.log(hasAllUniqueCharacters("abcdefghijklmnopqrstuvwxyz"));
// => true

console.log(reverse("Hello, World !"));
// => ! dlroW ,olleH

console.log(anagram("Hello, World !", "lel"));
// => false
console.log(anagram("Hello, World !", "! dlrow ,olleh"));
// => true