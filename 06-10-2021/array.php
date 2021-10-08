

<?php

function sendemail($id_list,$userid){
    foreach($id_list as $id) {
        printf("$id\n"); 
    }
}

$idl = Array("id1", "id2","id3","id4");
$uid = "userID";
sendemail($idl, $uid);

?>