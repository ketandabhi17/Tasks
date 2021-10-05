function f1(a) {
    a.b(); // OK
}
function f2(a) {
    a.b();
    //   Object is of type 'unknown'.
}
