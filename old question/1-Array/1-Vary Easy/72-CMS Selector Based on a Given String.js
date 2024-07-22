function cmsSelector(arr, str) {
    let check = arr.filter((val) => val.includes(str))
    return check.sort()
}
console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "W"));
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru"));
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], ""));
// ➞ ["WordPress"]
// ➞ ["Drupal"]
// ➞ ["Drupal", "Joomla", "Magento", "WordPress"]