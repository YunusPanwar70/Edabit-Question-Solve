// Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

function joinPath(s1, s2) {
    if (s1.endsWith("/")) {
        s1 = s1.slice(0, -1);
    }
    if (s2.startsWith("/")) {
        s2 = s2.slice(1);
    }
    return `${s1}/${s2}`;
}
console.log(joinPath("portion1", "portion2"));
console.log(joinPath("portion1/", "portion2"));
console.log(joinPath("portion1", "/portion2"));
console.log(joinPath("portion1/", "/portion2"));
// ➞ "portion1/portion2"
// ➞ "portion1/portion2"
// ➞ "portion1/portion2"
// ➞ "portion1/portion2"