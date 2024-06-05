// You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

function minutesToSeconds(str) {
    return str.split(':').reduce((acc, time) => (60 * acc) + +time);
}
console.log(minutesToSeconds("01:00"));
console.log(minutesToSeconds("13:56"));
console.log(minutesToSeconds("10:60"));
// ➞ 60
// ➞ 836
// ➞ false