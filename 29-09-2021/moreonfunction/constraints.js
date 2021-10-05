function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
var longerArray = longest([1, 2], [1, 2, 3]);
var longerString = longest("alice", "bob");
console.log(longerArray);
console.log(longerString);
