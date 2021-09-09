<?php

    $a = 70;
    $b = 43;
    
    function swap($a,$b){
     echo "before swap a is: ".$a."\n";
     echo "before swap b is: ".$b."\n\n";
     $temp = $a;
     $a = $b;
     $b = $temp;       
     echo "after swap a is: ".$a."\n";
     echo "after swap b is: ".$b."\n";
    } 
    swap($a,$b);
?>
