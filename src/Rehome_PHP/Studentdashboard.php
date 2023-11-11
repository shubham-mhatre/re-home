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
  
    $role = $requestData['role'];

    if($role === "addItem"){

      $itemName = $requestData['itemName'];
      $brand = $requestData['brand'];
      $type = $requestData['type'];
      $condition = $requestData['condition'];
      $price=$requestData['price'];
      $itemImage=$requestData['itemImage'];
      $id=$requestData['id']; 

      // $sql = "INSERT INTO add_items(ITEM_NAME, ITEM_BRAND, ITEM_TYPE, ITEM_CONDITION, ITEM_PRICE,ITEM_IMG,ID) 
       //VALUES ('$itemName', '$brand','$type','$condition','$price','$itemImage','$id')";
       $sql = "INSERT INTO add_items (ITEM_NAME, ITEM_BRAND, ITEM_TYPE, ITEM_CONDITION, ITEM_PRICE, ITEM_IMG, ID) 
       VALUES (?, ?, ?, ?, ?, ?, ?)";
      /* if ($conn->query($sql) === TRUE) {
        echo "Item posted successfully.";
        return json_encode(['message' => 'Item posted successfully.']);
      } else {
        echo "Error: " . $sql . " " . $conn->error;
        return "Error: " . $sql . " " . $conn->error;
      }*/
      $stmt = $conn->prepare($sql);
      $stmt->bind_param("ssssssi", $itemName, $brand, $type, $condition, $price, $itemImage, $id);
     
      if ($stmt->execute()) {
          echo "Item posted successfully.";
          echo json_encode(['message' => 'Item posted successfully.']);
      } else {
          echo "Error: " . $stmt->error;
          echo json_encode(['error' => "Error: " . $stmt->error]);
      }


    }
    elseif($role === "StudentProfilechange"){
      $id=$requestData['id'];
      $mavid = $requestData['mavid'];
      $email = $requestData['email'];
      $uname = $requestData['uname'];
      $address = $requestData['address'];
      $phoneno = $requestData['phoneno'];
      $passwrd = $requestData['passwrd'];
      
      $sql1= "UPDATE users SET email = '$email' , passwrd ='$passwrd' WHERE ID = $id";
      $sql2 = "UPDATE student  SET uname = '$uname', address = '$address', mavid = '$mavid', phoneno = '$phoneno'  WHERE id =(select Id from users where ID= '$id')";

      if ($conn->query($sql1) === TRUE && $conn->query($sql2) === TRUE) {
        echo "Profile updated successfully.";
        return json_encode(['message' => 'Profile updated successfully.']);
      } else {
        echo "Error: " . $sql . " " . $conn->error;
        return "Error: " . $sql . " " . $conn->error;
      }
  }
  elseif($role === "updateItem"){

    $itemName = $requestData['itemName'];
    $brand = $requestData['brand'];
    $type = $requestData['type'];
    $condition = $requestData['condition'];
    $price=$requestData['price'];
    $itemImage=$requestData['itemImage'];
    $itemid=$requestData['itemid'];

     $sql = "UPDATE add_items SET ITEM_NAME='$itemName', ITEM_BRAND ='$brand', ITEM_TYPE='$type', ITEM_CONDITION='$condition', ITEM_PRICE='$price',ITEM_IMG='$itemImage' WHERE ITEM_ID= $itemid";
     

     if ($conn->query($sql) === TRUE) {
      echo "Item updated successfully.";
      return json_encode(['message' => 'Item updated successfully.']);
    } else {
      echo "Error: " . $sql . " " . $conn->error;
      return "Error: " . $sql . " " . $conn->error;
    }
  }
  elseif($role === "markItemasSold"){

    $itemid=$requestData['itemid'];

     $sql = "UPDATE add_items SET STATUS = 'SOLD' WHERE ITEM_ID= $itemid";
     

     if ($conn->query($sql) === TRUE) {
      echo "Item updated successfully.";
      return json_encode(['message' => 'Item updated successfully.']);
    } else {
      echo "Error: " . $sql . " " . $conn->error;
      return "Error: " . $sql . " " . $conn->error;
    }
  }
  elseif($role === "markItemasBookmark"){

        $itemid=$requestData['itemid'];
        $id=$requestData['id'];
        $mysql= "Select ITEM_ID from FLAG_ITEMS where ITEM_ID= '$itemid'";
        $result = $conn->query($mysql);
    
        if ($result === false || $result->num_rows === 0) {
              $sql = "INSERT INTO FLAG_ITEMS (ITEM_ID, ID) VALUES ('$itemid', '$id')";       

              if ($conn->query($sql) === TRUE) {
                echo "Item bookmarked successfully.";
                return json_encode(['message' => 'Item bookmarked successfully.']);
              } else {
                echo "Error: " . $sql . " " . $conn->error;
                return "Error: " . $sql . " " . $conn->error;
              }
        } else {
              echo "Item already marked as bookmark.";
              return json_encode(['message' => 'Item already marked as bookmark.']);
          }
  }
  elseif($role === "deleteItem"){

    $itemid=$requestData['itemid'];

     $sql = "Delete from  add_items WHERE ITEM_ID= $itemid";
     

     if ($conn->query($sql) === TRUE) {
      echo "Item deleted successfully.";
      return json_encode(['message' => 'Item deleted successfully.']);
    } else {
      echo "Error: " . $sql . " " . $conn->error;
      return "Error: " . $sql . " " . $conn->error;
    }
  }



}elseif ($_SERVER['REQUEST_METHOD'] === 'GET'){
    $role = $_GET['role'];

   if($role === "StudentProfiledetails"){
          $id = $_GET['id'];
          $sql="select a.mavid,a.uname,a.Phoneno,a.address,u.email from  student as a join  users as u  on a.ID=u.ID where a.ID='$id'";
          $mysqli =mysqli_query($conn,$sql);
          $json_data=array();
          while($row = mysqli_fetch_assoc($mysqli))
          {
            $json_data[]=$row;
          }
          echo json_encode(['phpresult'=>$json_data]);
    }
    elseif($role === "Updatestudentprofile"){
          $id = $_GET['id'];
          $sql="select a.mavid,a.uname,a.phoneno,a.address,u.email,u.passwrd from  student as a join  users as u  on a.ID=u.ID where a.ID='$id'";
          
          $mysqli =mysqli_query($conn,$sql);
          $json_data=array();
          while($row = mysqli_fetch_assoc($mysqli))
          {
            $json_data[]=$row;
          }
          echo json_encode(['phpresult'=>$json_data]);
    }
    elseif ($role === "Fetchitems"){
          $id = $_GET['id'];
          $sql="select * from  add_items where ID='$id' and STATUS='AVAILABLE'";
          $mysqli =mysqli_query($conn,$sql);
          $json_data=array();
          while($row = mysqli_fetch_assoc($mysqli))
          {
            $json_data[]=$row;
          }
          echo json_encode(['phpresult'=>$json_data]);
    } 
    
    elseif ($role === "FetchItemtoupdate"){
          $itemid = $_GET['itemid'];
          $sql="select *,ITEM_IMG  from add_items where item_id='$itemid'";
          $mysqli =mysqli_query($conn,$sql);
          $json_data=array();
          while ($row = mysqli_fetch_assoc($mysqli)) {
                // Convert BLOB data to base64 encoded string
                //$imageData = base64_encode($row['ITEM_IMG']);
                //$row['ITEM_IMG'] = 'data:image/png;base64,' . $imageData; // Add data URL prefix
                $json_data[] = $row;
        }
    
          echo json_encode(['phpresult'=>$json_data]);
    } 
    elseif ($role === "FetchSoldItem"){
          $id = $_GET['id'];
          $sql="select * from add_items where ID='$id' and status='SOLD'";
          $mysqli =mysqli_query($conn,$sql);
          $json_data=array();
          while($row = mysqli_fetch_assoc($mysqli))
          {
            $json_data[]=$row;
          }
          echo json_encode(['phpresult'=>$json_data]);
      } 
    elseif ($role === "FetchBookmarkItem"){
            $id = $_GET['id'];            
            $sql="select * from add_items where ITEM_ID in(select ITEM_ID from flag_items where ID='$id')";
            $mysqli =mysqli_query($conn,$sql);
            $json_data=array();
            while($row = mysqli_fetch_assoc($mysqli))
            {
              $json_data[]=$row;
            }
            echo json_encode(['phpresult'=>$json_data]);
      }
      elseif ($role === "GetFilterItems"){        
            $name= $_GET['name'];
            $type= $_GET['type'];
            $sql = "SELECT * FROM add_items WHERE ITEM_NAME='$name'OR ITEM_TYPE='$type' and STATUS='AVAILABLE' and ACTIVE=1";
            $mysqli = mysqli_query($conn, $sql);
            $json_data = array();
            while ($row = mysqli_fetch_assoc($mysqli)) {
                $json_data[] = $row;
            }
            echo json_encode(['phpresult' => $json_data]);
        
  }    
          




}







?>