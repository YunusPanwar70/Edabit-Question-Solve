// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

// function cmsSelector(arr, char) {
//     let check = arr.filter((item) => item.includes(char));
//     return check.sort();
// }

function cmsSelector(arr, char) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(char)) result.push(arr[i])
    }
    return result
}
console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "W"))
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru"));
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], ""));

// ➞ ["WordPress"]
// ➞ ["Drupal"]
// ➞ ["Drupal", "Joomla", "Magento", "WordPress"]

// Notes
// The given letter(s) are case sensitive and can be more than one.
// In the case of an empty string, return the entire array.
// A CMS is a Content Management System.