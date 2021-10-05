interface student {
    rollno: 1|2|3;
    xPos?: number;
    yPos?: number;
  }

   
  function tellme(opts: student) {
    // ...
    console.log(opts.rollno, opts.xPos,opts.yPos);
  }
   
  tellme({ rollno:1,xPos:22 });
  tellme({ rollno:2 });
  tellme({ rollno:3 });
  

