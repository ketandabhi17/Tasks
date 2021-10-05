var x = {
    contents: "hello world"
};
// we could check 'x.contents'
if (typeof x.contents === "string") {
    console.log(x.contents.toUpperCase());
}
// or we could use a type assertion
console.log(x.contents.toUpperCase());
