// Many IDS (for emails or Google ID) are created using the person's name.

// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

function createID(s1,s2) {
    
}
console.log(createID("mary", "lamb"));
console.log(createID("John", "SMITH"));
console.log(createID("mary", "smith"));
// ➞ "mLam"
// ➞ "jSmi"
// ➞ "mSmi"
