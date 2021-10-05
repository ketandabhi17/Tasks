function tellme(opts) {
    // ...
    console.log(opts.rollno, opts.xPos, opts.yPos);
}
tellme({ rollno: 1, xPos: 22 });
tellme({ rollno: 2 });
tellme({ rollno: 3 });
