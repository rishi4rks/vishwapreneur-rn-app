<?php include 'config.php';
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $name = $obj['name'];

    $password = $obj['password'];

    if($obj['name']!=''){
        
        $result= $mysqli->query("SELECT * FROM users where email='$email' and password='$password');

        if($result->num_rows==0){
            echo json_encode('Wrong Details');
        }
        else
        echo json_encode('ok');
        }
    }
    else{
        echo json_encode('try again');
    }
?>