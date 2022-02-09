function fibonacci(n) {
	// write your solution here
    let n1 = 0;
    let n2 = 1
    let n3 = 0;
 
    
    for(i = 1; i<n; i++)
    {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }

    return n3;
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)
