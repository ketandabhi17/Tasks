function f1(a: any) {
    a.b(); // OK
  }
  function f2(a: any) {
    a.b();
//   Object is of type 'unknown'.
  
  }