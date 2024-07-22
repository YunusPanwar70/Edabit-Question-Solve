// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.


function retrieveMajor(semver) {
    return semver.split('.')[0]
}
function retrieveMinor(semver) {
    return semver.split('.')[1]
}
function retrievePatch(semver) {
    return semver.split('.')[2]
}
console.log(retrieveMajor("6.1.9"));
console.log(retrieveMinor("6.1.9"));
console.log(retrievePatch("6.1.9"));
console.log(retrieveMajor("2.1.0"));
console.log(retrieveMinor("2.1.0"));
console.log(retrievePatch("2.1.0"));
// 6.1.9
// ➞ "6"
// ➞ "1"
// ➞ "9"

// 2.1.0
// ➞ "2"
// ➞ "1"
// ➞ "0"