function getArea(shape) {
    return Math.PI * Math.pow(shape.radius, 2);
    //   Object is possibly 'undefined'.
}
var a = { kind: "circle", radius: 65, sideLength: 55 };
console.log(getArea(a));
