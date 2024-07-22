function filterValues(obj) {
    // Initialize an empty object to store filtered items
    let filteredObj = {};

    // Iterate through each key-value pair in the input object
    for (let key in obj) {
        // Check if the value of the current item is 5000 or more
        if (obj[key] >= 5000) {
            // Add the item to the filtered object
            filteredObj[key] = obj[key];
        }
    }

    // Return the filtered object
    return filteredObj;
}

// Examples
console.log(filterValues({ tv: 4999, guitar: 5000, fork: 5001 })); // ➞ { guitar: 5000, fork: 5001 }
console.log(filterValues({ tv: 4999 })); // ➞ {}
console.log(filterValues({ guitar: 5000 })); // ➞ { guitar: 5000 }
console.log(filterValues({})); // ➞ {}