// You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.

function convertToNumber(obj) {
    const newObj = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = Number(obj[key]);
        }
    }

    return newObj;
}
console.log(convertToNumber({ piano: "200" }));
console.log(convertToNumber({ piano: "200", tv: "300" }));
console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" }));
// ➞ { piano: 200 }
// ➞ { piano: 200, tv: 300 }
// ➞ { piano: 200, tv: 300, stereo: 400 }