// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

function calculateLosses(obj) {
    if (Object.keys(stolenItems).length === 0) {
        return "Lucky you!";
    }
}
calculateLosses(stolenItems  { tv: 30, skate: 20, stereo: 50, })  //➞ 100
calculateLosses(stolenItems  { painting: 20000, })  //➞ 20000
calculateLosses(stolenItems  {}) // ➞ "Lucky you!"