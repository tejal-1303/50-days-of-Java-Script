
//reverse a number 
//Method-1
// const num = 3849;

// function reverseGivenInteger(num) {
//     // write your solution here
//     let reversedInt = 0;
// let rem = 0;
//     while(num > 0)
//     {
        
//         rem = num % 10;
//         reversedInt = reversedInt*10 + rem;
//         num = Math.floor(num/10);   
//     }
//     return reversedInt;
// }

// console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)

//method-2

const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here
    let str = num.toString();
    //convert to string 
    let rev = str.split("").reverse().join("");
   // split them with spaces separately, then reverse, then join them removing the spaces
    return Number(rev);
    //convert the string to number
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)