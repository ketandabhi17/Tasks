type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
function area(s: Shape) {
  if (s.kind === "circle") {
    return Math.PI * s.radius * s.radius;
  } else if (s.kind === "square") {
    return s.x * s.x;
  } else {
    return (s.x * s.y) / 2;
  }
}

function height(s: Shape) {
    if (s.kind === "circle") {
      return 2 * s.radius;
    } else {
      // s.kind: "square" | "triangle"
      return s.x;
    }
  }

