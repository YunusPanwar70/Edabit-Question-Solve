function getFilename(arr) {
    arr.splice(0, 1, 0)
    return arr
}

console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
console.log(getFilename("ffprobe.exe"));


// ➞ "edabit.txt"
// ➞ "Beethoven_5.mp3"
// ➞ "ffprobe.exe"


// Create a function that returns the selected filename from a path. Include the extension in your answer.