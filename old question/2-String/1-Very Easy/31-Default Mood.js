// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// function moodToday(str) {
//     if (str === "happy") {
//         return "Today, I am feeling happy"
//     } else if (str === "sad") {
//         return "Today, I am feeling sad"
//     } else if (str === undefined) {
//         return "Today, I am feeling neutral"
//     }
// }
function moodToday(str) {
    const today = {
        "happy": "Today, I am feeling happy",
        "sad": "Today, I am feeling sad",
        undefined: "Today, I am feeling neutral"
    }
    return today[str]
}
console.log(moodToday("happy"));
console.log(moodToday("sad"));
console.log(moodToday());
// ➞ "Today, I am feeling happy"
// ➞ "Today, I am feeling sad"
// ➞ "Today, I am feeling neutral"