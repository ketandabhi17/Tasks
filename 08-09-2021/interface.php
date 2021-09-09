<?php

    interface first{
        function f1($a,$b);
        function f2($c,$d);
    }

    class A implements first 
    {
        function f1($a,$b)
        {
            echo $a + $b;
            echo "\n";
        }

        function f2($c,$d)
        {
            echo $c * $d;
            echo "\n";
        }
        
    }

    $a = new A();
    $a->f1(23,2);
    $a->f2(23,2);

?>