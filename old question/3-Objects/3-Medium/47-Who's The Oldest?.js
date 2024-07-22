// Given an object containing the names and ages of a group of people, return the name of the oldest person.


function oldest(people) {
    let oldestName = '';
    let maxAge = -1;

    for (const [name, age] of Object.entries(people)) {
        if (age > maxAge) {
            maxAge = age;
            oldestName = name;
        }
    }

    return oldestName;
}
console.log(oldest({
    Emma: 71,
    Jack: 45,
    Amy: 15,
    Ben: 29
}));
// ➞ "Emma"

console.log(oldest({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33
}));
// ➞ "Sam"