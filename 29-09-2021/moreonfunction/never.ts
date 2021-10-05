function fn(x: string | number) {
    if (typeof x === "string") {
      // do something
      console.log("string");
    } else if (typeof x === "number") {
      // do something else
    } else {
      x; // has type 'never'!
    }
  }

  fn("sss");