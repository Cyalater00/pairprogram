// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’



function vowelChecker(x){
    const vowels ="aeiou";
    let count =0;
    for(let i =0; i < x.length; i ++){
        if(vowels.includes(x[i])){
            console.log('this is a vowel')
        }else{
            console.log('this is not a vowel')
        }
    }
    return count;
}
vowelChecker('e')
vowelChecker('b')

