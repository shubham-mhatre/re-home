<?php

require 'db_connection.php';

header('Access-Control-Allow-Origin: http://localhost:3000'); // Replace '*' with the specific frontend origin (e.g., 'http://localhost:3000')
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Origin: *'); // Replace '*' with the specific frontend origin
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	$rawData = file_get_contents("php://input");
       
    // Convert the JSON data to an associative array
     $requestData = json_decode($rawData, true);
  
      $uname = $requestData['uname'];
      $phoneno = $requestData['phoneno'];
      $address = $requestData['address'];
      $mavid = $requestData['mavid'];     
      $email = $requestData['email'];
      $passwrd = $requestData['passwrd'];

      
     $sqlMasterUser="INSERT INTO users (name, email, passwrd,roles) VALUES
      ('$uname','$email','$passwrd','Student')";

    
    $generatedId=0;
    if ($conn->query($sqlMasterUser) === TRUE) {
        // Get the generated ID
        $generatedId = $conn->insert_id;
    }


      $sql = "INSERT INTO STUDENT (MAVID, UNAME, PHONENO, ADDRESS, ID)
      VALUES ('$mavid', '$uname','$phoneno','$address','$generatedId')";

       if ($conn->query($sql) === TRUE) {
       /* smtp_mailer($email,'Subject',$emailBody);*/
        echo "Register successfully.";
        return json_encode(['message' => 'Register successfully.']);
      } else {
        echo "Error: " . $sql . " " . $conn->error;
        return "Error: " . $sql . " " . $conn->error;
      }
   

    }

  