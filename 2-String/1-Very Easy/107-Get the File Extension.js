// Write a function that maps files to their extension names.
function getExtension(files) {
    return files.map(file => file.split('.').pop());
}
console.log(getExtension(["code.html", "code.css"]));
console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]));
console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]));
// ➞ ["html", "css"]
// ➞ ["jpg", "pdf", "mp3"]
// ➞ ["rb", "cpp", "py", "js"]