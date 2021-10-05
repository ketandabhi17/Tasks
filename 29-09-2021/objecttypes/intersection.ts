interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
   
  type ColorfulCircle1 = Colorful & Circle;

function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }
   
  // okay
  draw({ color: "blue", radius: 42 });
   
  // oops
  draw({ color: "red", radius: 42 });