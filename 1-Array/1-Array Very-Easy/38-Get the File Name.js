function getFilename(str) {
    return str.split('/').pop();
};

console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
console.log(getFilename("ffprobe.exe"));



// ➞ "edabit.txt"
// ➞ "Beethoven_5.mp3"
// ➞ "ffprobe.exe"