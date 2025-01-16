// Create a function that returns the selected filename from a path. Include the extension in your answer.

function getFilename(path) {
    let lastSlashIndex = path.lastIndexOf('/');
    return path.substring(lastSlashIndex + 1);
}
console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
console.log(getFilename("ffprobe.exe"));
// ➞ "edabit.txt"
// ➞ "Beethoven_5.mp3"
// ➞ "ffprobe.exe"

// Notes
// Tests will include both absolute and relative paths.
// For simplicity, all paths will include forward slashes.