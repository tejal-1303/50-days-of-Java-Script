//to check if an object is empty
const obj = { key: 1 };

function isEmpty(obj) {
    // write your solution here
    if(Object.keys(obj).length == 0){
        //Object.entries(obj).length == 0
        return true
    }
    else
    {
        return false
    }

    return
}

console.log(`is empty object: ${isEmpty(obj)}`)