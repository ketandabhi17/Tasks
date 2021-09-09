<?php
    final class demo 
    {
        function f1()
        {
            echo "this hello is from demo class";
        }

    }
    class child extends demo
    {
        function f1()
        {
            echo "this hello is from child class";
        }
    }

    $a= new child();
    $a->f1();

    //class child may not inherit from  final class
?>