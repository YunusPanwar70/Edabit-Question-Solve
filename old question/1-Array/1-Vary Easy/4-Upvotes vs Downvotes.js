function getVoteCount(vote) {
    return vote.downvotes - vote.upvotes
}
console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));
// ➞ 13
// ➞ -31
// ➞ 0