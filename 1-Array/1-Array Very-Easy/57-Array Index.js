function arrIndex(arr, idx) {
    return idx.map(index => {
        const row = Math.floor((index - 1) / arr[0].length);
        const col = (index - 1) % arr[0].length;

        if (row >= 0 && row < arr.length && col >= 0 && col < arr[0].length) {
            return arr[row][col];
        }
    }).join('');
}

const arr = [
    ["m", "u", "b"],
    ["a", "s", "h"],
    ["i", "r", "1"]
];

const idx = [1, 3, 5, 8];

console.log(arrIndex(arr, idx)); // Output: "mbsr"