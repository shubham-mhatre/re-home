<?php
// db_connection.php

    $servername = "127.0.0.1";
    $username = "root";
    $password = "root";
    $dbname = "rehome";   

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

?>