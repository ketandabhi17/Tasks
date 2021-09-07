<?php

//__sleep method

    class student
    {
        public $course = "NODE";
        private $firstname;
        private $lastname;

        public function setName($fname,$lname)
        {
             $this -> firstname= $fname;
             $this -> lastname= $lname;
        }

        public function __sleep()
        {
            return array('firstname','lastname');

        }

    }
    $m = new student();
    $m->setName("ketan","dabhi");
    $srl = serialize($m);
    echo $srl;
    
?>