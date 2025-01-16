// After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

// Given a string of what the overlapping claps sounded like, return how many claps were made in total.
function countClaps(str) {
    let regex = /(?=Clap)/g;  // Lookahead pattern se har "Clap" ko find karenge
    let count = 0;

    // Jab tak "Clap" milta hai, tab tak count badhate rahenge
    while (regex.exec(str) !== null) {
        count++;
    }

    return count;
}
console.log(countClaps("ClaClaClaClap!"));
console.log(countClaps("ClClClaClaClaClap!"));
console.log(countClaps("CCClaClClap!Clap!ClClClap!"));
// ➞ 4
// ➞ 6
// ➞ 9

// Notes
// Each clap starts with a capital "C".