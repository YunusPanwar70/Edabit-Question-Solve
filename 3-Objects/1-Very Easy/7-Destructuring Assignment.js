// You can assign variables from arrays like this:

var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// first = arr[0]
// second = arr[1]
// third = arr[2]
// other = arr.slice(3)
let [one, two, third, ...other] = arr;
console.log(one)
console.log(two)
console.log(third)
console.log(other)
// ➞ outputs 1
// ➞ outputs 2
// ➞ outputs 3
// ➞ outputs [4, 5, 6, 7, 8]

// However, this is long and tedious. Instead, we can use Object Destructuring to create all those variables in one line. Your task: Create variables first, second, third and other from the given array using Destructuring Assignment (check the Resources tab for some examples).


// first ➞ 1
// second ➞ 2
// third ➞ 3
// other ➞ [4, 5, 6, 7, 8]
// Your task is to unpack the arr writeyourcodehere into four variables, first, second, third, and other.