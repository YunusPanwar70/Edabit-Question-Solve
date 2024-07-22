// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.
function mostExpensiveItem(items) {
    return Object.entries(items).reduce((maxItem, currentItem) =>
        currentItem[1] > maxItem[1] ? currentItem : maxItem
    )[0];
}
console.log(mostExpensiveItem({ piano: 2000, }));
console.log(mostExpensiveItem({ tv: 30, skate: 20, }));
console.log(mostExpensiveItem({ tv: 30, skate: 20, stereo: 50, }));
// ➞ "piano"
// ➞ "tv"
// ➞ "stereo"