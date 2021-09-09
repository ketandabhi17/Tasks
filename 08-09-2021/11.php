<?php
    // 11.Pass array into the function and update the values into the
    // function and after that print an array. Check whether it
    // Prints original array or an updated array

    $captain = array("saura","dhoni","kohli");

    function indian($captain)
    {
       $captain[2]="rohit";
    }
    echo $captain[2]."\n";
?>