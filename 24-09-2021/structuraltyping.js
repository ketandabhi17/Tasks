var Three = /** @class */ (function () {
    function Three() {
        this.p = "Hello";
    }
    return Three;
}());
var x = { p: "hi" };
var two = x;
two = new Three();
console.log(x);
