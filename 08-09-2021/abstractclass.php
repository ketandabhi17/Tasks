<?php

// 6.Make one abstract class within that keep some methods
// Abstract and some as it is and call those abstract class’s Methods accordingly.
    abstract class sports
    {
         abstract function cricket();
        

         function football(){
             // echo "this is football";
         }
        
    }
    
    class india extends sports{
        function cricket(){
            echo "this is cricket\n"; 
            
        }
        function football(){
            echo "this is football\n";
        }
    }
    $s = new india();
    $s-> cricket();
    $s -> football();
?>