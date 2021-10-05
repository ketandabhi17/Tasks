interface Shape1 {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
  }

  function getArea1(shape: Shape1) {
    return Math.PI * shape.radius ** 2;
//   Object is possibly 'undefined'.
  
  }


  const a:Shape={kind:"circle",radius:65,sideLength:55};

  console.log(getArea1(a));