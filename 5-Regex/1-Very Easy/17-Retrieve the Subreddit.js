// Create a function to extract the name of the subreddit from its URL.

function subReddit(link) {
    let lastSlashIndex = link.lastIndexOf('/');
    return link.substring(lastSlashIndex + 1);
}
console.log(subReddit("https://www.reddit.com/r/funny/"));
console.log(subReddit("https://www.reddit.com/r/relationships/"));
console.log(subReddit("https://www.reddit.com/r/mildlyinteresting/"));

// ➞ "funny"
// ➞ "relationships"
// ➞ "mildlyinteresting"

// Notes
// N/A