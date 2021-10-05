function doSomething(value) {
    for (var i = 0; i < Array.length; i++) {
        console.log(Array[i]); // output: Apple Orange Banana
    }
}
var myArray = ["hello", "world"];
// either of these work!
doSomething(myArray);
doSomething(new Array("hello", "world"));
doSomething(new Array("ketan", "dabhi"));
