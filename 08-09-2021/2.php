<?php
    // 2.Check whether one can write same function in multiple
    // interfaces and how to implement the same in class
    interface one{
        function same();
    }

    interface second{
        function same();   
    }

    class three implements one,second 
    {
        function same()
        {
            echo "this is from class function.";
        }
        
    }

    $a= new three();
    $a->same();
?>