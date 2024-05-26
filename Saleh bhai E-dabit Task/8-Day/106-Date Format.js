// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.
function formatDate(str) {
    return str.split('')
}
console.log(formatDate("11/12/2019"));
console.log(formatDate("12/31/2019"));
console.log(formatDate("01/15/2019"));
// ➞ "20191211"
// ➞ "20193112"
// ➞ "20191501"