// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 


// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24

// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6


function largestDiv(x, y) {
    let commonD = 0;
    for(let i = 1; i <= x && i <= y; i++) {
        if (x % i == 0 && y % i == 0) {
            commonD = i
        }
    } return commonD
}
console.log(largestDiv(336,360));