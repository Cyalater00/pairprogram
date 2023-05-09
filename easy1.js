// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]

// Output: Even numbers: [2, 4, 16]
// 	  Odd Numbers: [7, 11, 15]

let even = [];
let odd = [];

function splitnum (x){
    for(let i = 0; i < x.length; i++){
        if(x[i] % 2 == 0){
            even.push(x[i]);
        }else{
            odd.push(x[i])
        }
    }
    console.log(even);
    console.log(odd);

};

splitnum([2, 4, 7, 11, 15, 16]);