// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

function incrementItems(arr) {
    let a = [];

    for (let i = 0; i < arr.length; i++) {
        a.push(arr[i] + 1);
    };
    return a;
};

console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));

// ➞ [1, 2, 3, 4]
// ➞ [3, 5, 7, 9]
// ➞ [0, -1, -2, -3]