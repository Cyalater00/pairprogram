// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// 	  String 2: Dogs eat ants
// Output: False


let isAnagram1 = (x,y) =>{
    x = x.toUpperCase().split('').sort().join('');
    y = y.toUpperCase().split('').sort().join('');
    return x === y;
};
console.log(isAnagram1('abC', 'cab'))
console.log(isAnagram1('aab', 'aac'))

