<?php

function mul($x) {
    return $x*5;
  }

  $a = readline('enter any number:');
  
  echo $a . "* 5 is " . mul($a) . "\n";

  function count1() 
  {
    yield "1";
    yield "2";
    yield "3";
    yield "4";
    yield "5";
  }
  
  foreach(count1() as $number) {
    echo $number;
    echo "\n";
  }
?>