function areObjectsEqual(obj1, obj2) {
    // Convert both objects to JSON strings and compare
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Example usage:

// Example #1
const obj1 = {
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
};

const obj2 = {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
};

console.log(areObjectsEqual(obj1, obj2)); // ➞ false

// Example #2
const obj3 = {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
};

const obj4 = {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
};

console.log(areObjectsEqual(obj3, obj4)); // ➞ true