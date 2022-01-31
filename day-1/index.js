function randomNumberGeneratorInRange(max, min) {
	// write your solution here
//    return Math.floor(Math.random() * rangeEnd - rangeStart + 1) + rangeStart;



        return Math.floor(Math.random() * (max - min + 1)) + min
        
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)