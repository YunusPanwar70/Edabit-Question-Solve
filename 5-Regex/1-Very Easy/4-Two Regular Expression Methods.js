// There are three methods (we exclude compile) that you can use with regular expression literals. Use these two methods to fix the code. One method returns a boolean if there is a match. The other method returns an iterator from a search.

function checkAndListMatches(str, regex) {
    const hasMatch = regex.test(str);
    const allMatches = [...str.matchAll(regex)];
    return {
        hasMatch, allMatches
    };
}
console.log(checkAndListMatches("apple apricot banana", /a\w+/g));

// Notes
// Do not use the same method twice.
// Do not use String methods that accept regular expresssions as arguments.