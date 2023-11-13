function relationToLuke(str) {
    const relation = {
        "Darth Vader": "father",
        "Leia": "Sister",
        "Han": "Brother in law"
    }
    return `Luke i am your ${relation[str]}`
}

console.log(relationToLuke("Darth Vader"));
console.log(relationToLuke("Leia"));
console.log(relationToLuke("Han"));


// ➞ "Luke, I am your father."
// ➞ "Luke, I am your sister."
// ➞ "Luke, I am your brother in law."