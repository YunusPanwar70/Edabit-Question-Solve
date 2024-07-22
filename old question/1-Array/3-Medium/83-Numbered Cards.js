// You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.


function winRound(arr1, arr2) {
    arr1.sort((a, b) => b - a);
    arr2.sort((a, b) => b - a);
    let num1 = arr1[0] * 10 + arr1[1];
    let num2 = arr2[0] * 10 + arr2[1];
    return num1 > num2;
}
console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]));
console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]));
console.log(winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5]));
console.log(winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1]));
// ➞ true
// Your cards can make the number 96
// Your opponent can make the number 73
// You win the round since 96 > 73
// ➞ true
// ➞ false
// ➞ false


// Notes
// Return false if you and your opponent reach the same maximum number (see example #4).