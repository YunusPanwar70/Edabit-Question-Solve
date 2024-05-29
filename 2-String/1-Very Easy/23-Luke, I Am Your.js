// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// function relationToLuke(str) {
//     if (str === "Darth Vader") {
//         return "Luke, I am your father."
//     } else if (str === "Leia") {
//         return "Luke, I am your sister."
//     } else if (str === "Han") {
//         return "Luke, I am your brother in law."
//     }
// }

function relationToLuke(str) {
    const luke = {
        "Darth Vader": "Luke, I am your father.",
        "Leia": "Luke, I am your sister.",
        "Han": "Luke, I am your brother in law."
    }
    return luke[str]
}
console.log(relationToLuke("Darth Vader"));
console.log(relationToLuke("Leia"));
console.log(relationToLuke("Han"));
// ➞ "Luke, I am your father."
// ➞ "Luke, I am your sister."
// ➞ "Luke, I am your brother in law."