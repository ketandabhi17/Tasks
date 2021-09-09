
<?php

// // <!-- Create object of only last class and Call parent class’ s functions -->
//  class one 
//     {
//         function first()
//         {
//             echo "this is one class";
//         }
//     }    
//     class two extends one
//     {

//     }
//     class three extends two
//     {
//         function child()
//         {
//             echo "this is three class";
//         }
//     }

//     $t = new three();
//     $t->first();


//     // make multiple objects of same class

// class Multipleobjects
// {
//     function f1()
//     {
//         echo "this is function 1 \n\n";
//     }
// }

// $m = new Multipleobjects();
// $k = new Multipleobjects();
// $s = new Multipleobjects();
// $m->f1();
// $k->f1();
// $s->f1();



//     // <!-- Make such a function that should accept n. No. of
// // Parameters and make sum of all the passed
// // Parameters -->

// function sum(...$numbers) {
//     $sum = 0;
//     foreach ($numbers as $n) {
//         $sum += $n;
//     }
//     return $sum ;
// }

// echo sum(1, 2, 3, 4, 5);


// // <!-- will the compiler auto call parent constructor
// // Just by making an object for a child class?

// //  No compiler will not call the parent constructor when we make the object for child class.
// //  To call parent constructor we have to write or use 'parent' keyword within the child constructor. -->



// //cicumstances of circle
// $r = readline("enter the value of radius of the circile:");
//     $pi = 3.14;
//     $cir = 2*$pi*$r;
//     echo "Circumference of a circle is: " .$cir;
//     return 0;

    
    
    
    // //multilevel inherience
    // class grandparent
    // {
    //     function main()
    //     {
    //         echo "this is grandparent class";
    //     }
    // }
    // class parent extends grandparent
    // {
    //     function first()
    //     {
    //         echo "this is parent class";
    //     }
    // }
    // class child extends parent
    // {
    //     function second()
    //     {
    //         echo "this is child class";
    //     }
    // }
    

    // //override 
    // class   override
    // {
    //     function p()
    //     {
    //         echo "this is parent function\n";
    //     }       
    // }

    // class child extends override
    // {
    //     function p()
    //     {
    //         echo "this is is child function \n";
    //     }
    // }
    // $o = new override;

    // $c = new child;
    // $o -> p();
    // $c -> p();

?>