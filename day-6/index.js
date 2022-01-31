//truncate a string

const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here
    let k =0;
    let s = ""
    for(let i =0; i< str.length; i++)
    {
        if(str.charAt(i)==' ')
        {
           k++;
        }
        if(k === wordLimit)
        {
            break;
        }
        s = s + str.charAt(i);
    }

    return s;
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
