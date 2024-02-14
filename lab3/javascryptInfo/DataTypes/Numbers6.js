function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Test cases
console.log(randomInteger(1, 5)); // Example output: 1
console.log(randomInteger(1, 5)); // Example output: 3
console.log(randomInteger(1, 5)); // Example output: 5