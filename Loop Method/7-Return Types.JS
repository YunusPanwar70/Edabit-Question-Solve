function arrayValuesTypes(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(typeof arr[i])
    }
    return result
}

console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));


// ➞ ["number", "number", "string", "object"]
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]