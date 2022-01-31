//check if a given phone number is valid

const number = '+919876543210';

function validateMobile(number) {
    // write your solution here
    if((number.startsWith('+91 ')&&number.length == 14)||(number.startsWith('+91')&&number.length == 13)||(number.startsWith('0 ')&&number.length == 12)||(number.startsWith('0')&& number.length == 11))
    {return true;
    }
    if(number.length == 10)
    {
        return true;
    }

    return false;
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)


// Method-2 
// const number = '+919876543210';

// function validateMobile(number) {
//     let s=number+"";
//     if(s.substring(0,3)==="+91"||s.charAt(0)==="0"||s.length==10)
//         return true;
//     else
//         return false;
// }

// console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
