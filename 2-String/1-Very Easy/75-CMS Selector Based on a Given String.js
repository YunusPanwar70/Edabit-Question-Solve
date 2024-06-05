// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

function cmsSelector(str, char) {
    // return str.filter((item) => item.toLowerCase().includes(char))
    let a = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase().includes(char)) {
            a.push(str[i])
        }
    }
    return a
}
console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w"));
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru"));
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], ""));
// ➞ ["WordPress"]
// ➞ ["Drupal"]
// ➞ ["Drupal", "Joomla", "Magento", "WordPress"]