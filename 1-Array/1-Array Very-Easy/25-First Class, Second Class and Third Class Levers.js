// function determineLever(arr) {
//     if (arr[1] === 'f') {
//         if (arr[0] === 'e') {
//             return "first class lever";
//         } else if (arr[2] === 'e') {
//             return "third class lever";
//         }
//     } else if (arr[2] === 'f' && arr[1] === 'l') {
//         return "second class lever";
//     }

//     return "Invalid lever configuration";
// }


// console.log(determineLever(["e", "f", "l"])); 
// console.log(determineLever(["e", "l", "f"])); 
// console.log(determineLever(["f", "e", "l"])); 

// Output: "first class lever"
// Output: "second class lever"
// Output: "third class lever"





function determineLever(arr) {
    const leverTypes = {
        'efl': 'first class lever',
        'elf': 'second class lever',
        'fel': 'third class lever'
    };

    const positions = arr.join('');
    return leverTypes[positions] || 'Invalid lever configuration';
}


console.log(determineLever(["e", "f", "l"]));
console.log(determineLever(["e", "l", "f"]));
console.log(determineLever(["f", "e", "l"]));



// Output: "first class lever"
// Output: "second class lever"
// Output: "third class lever"