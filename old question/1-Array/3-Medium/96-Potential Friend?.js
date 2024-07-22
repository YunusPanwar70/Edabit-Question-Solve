// .Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. Return true if there's a potential friend!

function isPotentialFriend(set1, set2) {
    
}
console.log(isPotentialFriend(
    ["sports", "music", "chess"],
    ["coding", "music", "netflix", "chess"]
));

console.log(isPotentialFriend(
    ["cycling", "technology", "drawing"],
    ["dancing", "drawing"]
));

console.log(isPotentialFriend(
    ["history"],
    ["history"]
));

// ➞ true
// ➞ false
// ➞ true

// Notes
// Arrays of interests may have varied lengths.