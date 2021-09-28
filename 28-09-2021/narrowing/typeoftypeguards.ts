function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) {

        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      
    }
  }

//   console.log(printAll(['a','b','c']));
printAll(['a','b','c'])