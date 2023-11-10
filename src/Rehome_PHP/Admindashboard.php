<?php

require 'db_connection.php';

header('Access-Control-Allow-Origin:  http://localhost:3000'); // Replace '*' with the specific frontend origin (e.g., 'http://localhost:3000')
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
        $role = $requestData['role'];
        //-----------------delete job on decline-----------------------
        if($role === "declineItem"){

          $jid = $requestData['jid'];
          $sql = "delete from add_items where ITEM_ID=$jid;";
      
          if ($conn->query($sql) === TRUE) {
            echo "Deleted Item  successfully.";
            return json_encode(['message' => 'Deleted Job  successfully.']);
          } else {
            echo "Error: " . $sql . " " . $conn->error;
            return "Error: " . $sql . " " . $conn->error;
          }
    }
    //-----------------active job on accept-----------------------
    elseif($role === "acceptItem"){

          $jid = $requestData['jid'];
          $sql = "UPDATE add_items SET ACTIVE = 1 WHERE ITEM_ID=$jid;";
      
          if ($conn->query($sql) === TRUE) {
            echo "Accpeted Item  successfully.";
            return json_encode(['message' => 'Accpeted Job  successfully.']);
          } else {
            echo "Error: " . $sql . " " . $conn->error;
            return "Error: " . $sql . " " . $conn->error;
          }


    }
}
elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $role = $_GET['role'];

        if ($role === "FetchConatctusQuestion"){
          $sql="select * from contactus ";
          $mysqli =mysqli_query($conn,$sql);
          $json_data=array();
          while($row = mysqli_fetch_assoc($mysqli))
          {
            $json_data[]=$row;
          }
          echo json_encode(['phpresult'=>$json_data]);
      } 
      elseif ($role === "FetchAllItem"){
          $sql="select * from add_items where STATUS='AVAILABLE' and ACTIVE=0";
          $mysqli =mysqli_query($conn,$sql);
          $json_data=array();
          while($row = mysqli_fetch_assoc($mysqli))
          {
            $json_data[]=$row;
          }
          echo json_encode(['phpresult'=>$json_data]);
  } 



}
?>
