// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// function stolenItems(obj) {
//     let val = Object.values(obj)
//     if (val.length === 0) {
//         return "Lucky you!";
//     }
//     return val.reduce((acc, val) => acc + val);
// };

function stolenItems(obj) {
    let result = 0;
    for (const i in obj) {
        result += obj[i]
    }
    if (Object.keys(obj).length === 0) {
        return "Lucky you!";
    }
    return result;
};
console.log(stolenItems({
    tv: 30,
    skate: 20,
    stereo: 50,
}));

console.log(stolenItems({
    painting: 20000,
}));

console.log(stolenItems({}));


// ➞ 100
// ➞ 20000
// ➞ "Lucky you!"

// Notes
// The item value is always positive.
// This is my first experience in creating a challenge. I started to learn testing so I decided to give it a go here at Edabit as well. Hope I did it right... Suggestions are very welcome!
// This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that there.