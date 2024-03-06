function compact(arr) {
    // const result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i]) {
    //         result.push(arr[i])

    //     }
    // }
    // return result

    return arr.filter((value) => !!value);
}

console.log(compact([0, 1, false, 2, "", 3]));

// => [1, 2, 3]