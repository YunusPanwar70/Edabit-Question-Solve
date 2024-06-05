// Create a function that returns the smaller number.

function smallerNum(n1, n2) {
    if (parseInt(n1) < parseInt(n2)) {
        return n1;
    } else {
        return n2;
    }
}
console.log(smallerNum("21", "44"));
console.log(smallerNum("1500", "1"));
console.log(smallerNum("5", "5"));
// ➞ "21"
// ➞ "1"
// ➞ "5"