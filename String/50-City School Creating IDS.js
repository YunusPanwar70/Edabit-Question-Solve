function createID(firstname, lastname) {
    let firstchar = firstname.charAt(0);

    const lastThreeChars = lastname.substring(0, 3);

    const formattedLastName = lastThreeChars.charAt(0).toUpperCase() + lastThreeChars.slice(1).toLowerCase();

    const result = firstchar + formattedLastName;

    return result;


}

console.log(createID("mary", "lamb"));
console.log(createID("John", "SMITH"));
console.log(createID("mary", "smith"));


// ➞ "mLam"
//  ➞ "jSmi"
//  ➞ "mSmi"