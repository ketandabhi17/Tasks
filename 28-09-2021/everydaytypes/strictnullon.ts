function doSomething(x: string | null) {
    if (x === null) {
      
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }
  doSomething('ketan');