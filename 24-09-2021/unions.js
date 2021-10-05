function start(arg) {
    // this is super common in JavaScript
    if (typeof arg === "string") {
        return commonCase(arg);
    }
    else if (Array.isArray(arg)) {
        return arg.map(commonCase).join(",");
    }
    else if (typeof arg === "function") {
        return commonCase(arg());
    }
    else {
        return commonCase(arg.s);
    }
    function commonCase(s) {
        // finally, just convert a string to another string
        console.log(s);
        return s;
    }
}
start("this is string");
//   console.log(start);
