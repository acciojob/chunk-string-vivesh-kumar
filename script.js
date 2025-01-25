function stringChop(str, size) {
  // your code here
	 if (!str) {
        return [];
    }

    // Initialize an array to hold the chunks
    const chunks = [];

    // Loop through the string in increments of chunkLength
    for (let i = 0; i < str.length; i += size) {
        // Extract a substring of chunkLength characters and push to the array
        chunks.push(str.slice(i, i + size));
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
