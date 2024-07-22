// The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.

// const obj = 

function preventChanges(obj) {
    Object.freeze(obj)
    obj.noChanges = false;
    obj.signature = "whatever"
    return obj;
}
console.log(preventChanges({ noChanges: true }));

// ➞ { noChanges: true }
// Notes
// If you have suggestions on how to present or further test this challenge please leave me a comment.Thanks!
// This series is part of a collection that focuses on objects.If you are interested in following the breathtaking narrative skills of yours truly or just do some object focused challenges(the challenges are ordered in ascending difficulty order), you can more easily do that here.