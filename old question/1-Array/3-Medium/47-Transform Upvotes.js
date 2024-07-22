// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

function transformUpvotes(str) {
    return str.split(' ').map((upvote) => {
        if (upvote.endsWith('k')) {
            return parseFloat(upvote) * 1000
        } else {
            return parseFloat(upvote)
        }
    })
}
console.log(transformUpvotes("6.8k 13.5k"));
console.log(transformUpvotes("5.5k 8.9k 32"));
console.log(transformUpvotes("20.3k 3.8k 7.7k 992"));
// ➞ [6800, 13500]
// ➞ [5500, 8900, 32]
// ➞ [20300, 3800, 7700, 992]