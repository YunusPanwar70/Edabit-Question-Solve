// After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

// Given a string of what the overlapping claps sounded like, return how many claps were made in total.

function countClaps(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i]) {
            count += str[i].length
        }
    }
    return count
}
console.log(countClaps("ClaClaClaClap!"));
console.log(countClaps("ClClClaClaClaClap!"));
console.log(countClaps("CCClaClClap!Clap!ClClClap!"));
// ➞ 4
// ➞ 6
// ➞ 9