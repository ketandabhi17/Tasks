<?php
   class BaseClass{
      final function calculate($val1,$val2){
         $sum = $val1+$val2;
         echo "\nSum of given no=".$sum;
         }
      }
   class ChildClass extends BaseClass{
      function calculate($x,$y){
         $mult=$val1*$val2;
         echo "\nMultiplication of given no=".$mult;
         }
      }
   $obj= new ChildClass();
   $obj->calculate(10,10);
    //  conclusion-> we cannot override final mehod

?>