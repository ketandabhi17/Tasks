type One = { p: string };
interface Two {
    p: string;
}
class Three {
    p = "Hello";
}

let x: One = { p: "hi" };
let two: Two = x;
two = new Three();

console.log(x);