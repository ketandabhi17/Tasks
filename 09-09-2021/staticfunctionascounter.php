<?php
<<<<<<< HEAD
//static function as counter
=======
>>>>>>> c301b8dfe3ece3beba63b0f3aec56e747ef17356
class solution {
	static $count;
	public static function getCount() {
		return self::$count++;
	}
}
solution::$count = 1;
for($i = 0; $i < 5; ++$i) {
	echo 'The next value is: '.
	solution::getCount() . "\n";
}

<<<<<<< HEAD


=======
>>>>>>> c301b8dfe3ece3beba63b0f3aec56e747ef17356
?>
