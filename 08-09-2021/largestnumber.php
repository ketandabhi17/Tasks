<?php
    function largest($a,$b,$c=18)
    {
        if ($a > $b)
        {
            if ($a > $c)
            {
                echo $a."is the greatest among three \n";
            }
            else
            {
                echo $c." is the greatest among three \n";
            }
        }
        else if ($b > $c)
            echo $b ." is the greatest among three \n";
        else
            echo $c." is the greatest among three \n";
        
    }

    largest(10,12,15);

    largest(2,12);
?>


