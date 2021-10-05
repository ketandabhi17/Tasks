function area(s) {
    if (s.kind === "circle") {
        return Math.PI * s.radius * s.radius;
    }
    else if (s.kind === "square") {
        return s.x * s.x;
    }
    else {
        return (s.x * s.y) / 2;
    }
}
function height(s) {
    if (s.kind === "circle") {
        return 2 * s.radius;
    }
    else {
        // s.kind: "square" | "triangle"
        return s.x;
    }
}
area(s);
