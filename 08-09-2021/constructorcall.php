<?php
class Base {
    function __construct() {
        echo "In BaseClass constructor";
    }
}

class child extends Base {
    function f1(){
         echo "after base constructor";
    }
}
$k = new child();
$k->f1();

?>