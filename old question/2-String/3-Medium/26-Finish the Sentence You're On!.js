// POV: You are in an exam and time has just run out. While the teacher's back is turned, you hastily take the opportunity to finish scribbling down the last few words of the conclusion.
// For this challenge, it takes 0.5 seconds to write a character (not including spaces). Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.

// timeToFinish(
//     "And so brings my conclusion to its conclusion.",
//     "And so brings my conclusion to"
// )

console.log(timeToFinish(
    "And so brings my conclusion to its conclusion.",
    "And so brings my conclusion to its conclus"
));

console.log(timeToFinish(
    "As a result, my point is still valid.",
    "As a result, my"
));

console.log(timeToFinish(
    "Thank you for reading my essay.",
    "T"
));
// ➞ 7
// "its" has 3 characters
// "conclusion." has 11 characters, including punctuation.
// 11 + 3 = 14
// 14 x 0.5 = 7
// Remember not to include spaces.
// ➞ 2
// ➞ 9
// ➞ 12.5

// Notes
// The unfinished sentence is always found at the start of a complete sentence.