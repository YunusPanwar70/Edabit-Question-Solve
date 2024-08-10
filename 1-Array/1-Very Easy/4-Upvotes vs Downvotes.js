// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// function getVoteCount(vote) {
//     return vote.upvotes - vote.downvotes
// }

// function getVoteCount(vote) {
//     let values = Object.values(vote)
//     return values[0] - values[1]
// }

// function getVoteCount(vote) {
//     let values = Object.values(vote)
//     return values.reduce((acc, val) => acc - val)
// }

function getVoteCount(vote) {
    let values = Object.values(vote);
    let result = 0;
    for (let i = 0; i < values.length; i++) {
        if (i === 0) {
            result += values[i];
        } else {
            result -= values[i];
        }
    }
    return result;
}

// function getVoteCount(vote) {
//     let values = Object.values(vote);
//     let i = 0;
//     let result = 0;
//     while (i < values.length) {
//         if (i === 0) {
//             result += values[i]
//         } else {
//             result -= values[i]
//         }
//         i++;
//     }
//     return result
// }

// function getVoteCount(vote) {
//     let result = 0;
//     for (const key in vote) {
//         if (key === 'upvotes') {
//             result += vote[key];
//         } else if (key === 'downvotes') {
//             result -= vote[key];
//         }

//     }
//     return result
// }

// function getVoteCount(vote) {
//     let { upvotes, downvotes } = vote;
//     return upvotes - downvotes;
// }
console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));
// ➞ 13
// ➞ -31
// ➞ 0

// Notes
// You can expect only positive integers for vote counts.