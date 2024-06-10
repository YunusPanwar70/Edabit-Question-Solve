const obj = {
    a: 'Something',
    b: 42,
    c: false,
};
// console.log(obj.a); || console.log(obj[a]) //accessing the elements
// console.log(Object.keys(obj)); // return keys array
// console.log(Object.values(obj));//return values array
// console.log(Object.entries(obj));//return key value pair array


var arr = Object.entries(obj)
// console.log(arr);
console.log(arr[0][1]); // nested indexing

