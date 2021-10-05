// let fst: (a: any, b: any) => any = (a, b) => a;
// console.log(fst(1,2)); cannot access b
// let o: { n: number; xs: object[] } = { n: 19, xs: [] };
// console.log(o.n);
(1).toExponential();
// equivalent to
Number.prototype.toExponential.call(1);
console.log(Number);
