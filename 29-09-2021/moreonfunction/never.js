function fn(x) {
    if (typeof x === "string") {
        // do something
        return String;
        console.log("string");
    }
    else if (typeof x === "number") {
        // do something else
    }
    else {
        x; // has type 'never'!
    }
}
fn("sss");
