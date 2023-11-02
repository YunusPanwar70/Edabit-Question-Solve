function countClaps(sounds) {
    let clapCount = 0;
    for (let i = 0; i < sounds.length; i++) {
        if (sounds[i] === 'C') {
            clapCount++;
        }
    }
    return clapCount;
}
console.log(countClaps("ClaClaClaClap!"));
console.log(countClaps("ClClClaClaClaClap!"));
console.log(countClaps("CCClaClClap!Clap!ClClClap!"));




// ➞ 4
// ➞ 6
// ➞ 9